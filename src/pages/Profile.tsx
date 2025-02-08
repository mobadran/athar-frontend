import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen flex-col">
      <header className="flex items-center gap-2 p-2">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center gap-2"
        >
          <svg
            className="w-4"
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            strokeWidth="2"
            xmlns="http://www.w3.or g/2000/svg"
          >
            <path d="M16 0L0 12L16 24" stroke="black" />
          </svg>

          <h1 className="text-2xl font-medium">Athar</h1>
        </button>
      </header>

      <section className="flex items-center gap-2 p-2">
        <img
          src="https://picsum.photos/100/100"
          alt="John Doe"
          className="w-16 rounded-full"
        />

        <div>
          <h2 className="font-medium">John Doe</h2>
          <p className="text-black/50">johndoe@example.com</p>
        </div>
      </section>

      <section className="p-2">
        <h2 className="my-4 text-xl font-medium">Profile Information</h2>
        <div className="flex gap-2 border-b py-4">
          <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
          <span>Email</span>
          <p className="grow text-end">johndoe@example.com</p>
        </div>
        <div className="flex gap-2 border-b py-4">
          <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
          </svg>
          <span>Name</span>
          <p className="grow text-end">John Doe</p>
        </div>
        <div className="flex gap-2 border-b py-4">
          <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
          <span>Points</span>
          <p className="grow text-end">750</p>
        </div>
        <div className="my-4 flex gap-2">
          <button className="basis-1/2 rounded-lg border border-primary p-1">
            Log Out
          </button>
          <button className="basis-1/2 rounded-lg bg-primary p-1 text-white">
            Settings
          </button>
        </div>
      </section>

      <section className="grow p-2">
        <h2 className="text-xl font-medium">Contact Us</h2>
        <div className="flex items-center gap-2 border-b py-4">
          <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
          <span>Phone Number</span>
          <p className="grow text-end">+1-800-123-4567</p>
        </div>
        <div className="flex items-center gap-2 border-b py-4">
          <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
          <span>Email</span>
          <p className="grow text-end">info@example.com</p>
        </div>
        <div className="flex items-center gap-2 border-b py-4">
          <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l96 0 0 80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0z" />
          </svg>
          <span>Live Chat</span>
          <p className="grow text-end">Available 24/7</p>
        </div>
      </section>

      <Navbar active={2} />
    </main>
  );
}
