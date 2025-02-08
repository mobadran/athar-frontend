import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

export default function Search() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-col">
      <header className="p-2">
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
        <form>
          <label
            htmlFor="default-search"
            className="sr-only mb-2 text-sm font-medium text-gray-900"
          >
            Search
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <svg
                className="h-4 w-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search.."
            />
          </div>
        </form>
      </header>
      <main className="grow p-2">
        <h1 className="mb-4 text-black/40">History</h1>
        <ul className="flex flex-col border border-zinc-200">
          <li className="flex justify-between p-2 nth-[even]:bg-white nth-[odd]:bg-gray-500 nth-[odd]:text-white">
            <h2 className="text-lg font-medium">Business One</h2>
            <span className="text-black/50">Restaurant</span>
          </li>
          <li className="flex justify-between p-2 nth-[even]:bg-white nth-[odd]:bg-gray-500 nth-[odd]:text-white">
            <h2 className="text-lg font-medium">Business Two</h2>
            <span className="text-black/50">Grocery Store</span>
          </li>
        </ul>
      </main>
      <Navbar active={1} />
    </div>
  );
}
