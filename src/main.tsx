import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./pages/App.tsx";
import Profile from "./pages/Profile.tsx";
import Search from "./pages/Search.tsx";
import ScanQR from "./pages/ScanQR.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/scan-qr" element={<ScanQR />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
