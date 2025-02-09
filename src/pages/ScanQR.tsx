import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
export default function ScanQR() {
  const [scannedData, setScannedData] = useState("");
  const [successfull, setSuccessfull] = useState(false);
  const navigate = useNavigate();
  const onScanSuccess = (data: string) => {
    setScannedData(data);
    setSuccessfull(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  const onClose = () => {
    navigate("/");
  };

  useEffect(() => {
    if (scannedData) {
      fetch("http://localhost:8000/api/dashboard/sendQr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token") || "",
        },
        body: JSON.stringify({ text: scannedData }),
      });
    }
  }, [scannedData]);

  useEffect(() => {
    const config = {
      fps: 10,
      qrbox: { width: window.innerWidth, height: window.innerHeight }, // Fullscreen
      aspectRatio: window.innerWidth / window.innerHeight,
      // supportedScanTypes: [Html5QrcodeScanner.SCAN_TYPE_CAMERA],
      defaultCameraId: "environment", // Defaults to the back camera
    };

    const scanner = new Html5QrcodeScanner("qr-scanner", config, false);

    scanner.render(
      (decodedText) => {
        // onScanSuccess(decodedText);
        onScanSuccess(decodedText);
        scanner.clear(); // Stop scanning after success
      },
      (error) => {
        console.warn(error);
      },
    );

    return () => {
      scanner.clear();
    }; // Cleanup on unmount
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          // background: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          id="qr-scanner"
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
          }}
        ></div>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "red",
            color: "white",
            border: "none",
            padding: "10px 15px",
            fontSize: "16px",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          Close
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black ${successfull ? "flex" : "hidden"}`}
      >
        <p className="text-white">
          You have successfully EARNED 500 POINTS!!!!
        </p>
      </div>
    </>
  );
}
