import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

function App() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-gray-50/50">
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
      </header>

      <section className="p-2">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-medium">Special Offers</h2>
            <p className="text-black/50">Limited Time Deals</p>
          </div>
          <div className="flex items-center gap-1 rounded border bg-primary px-2 py-1 text-white">
            <span>View All</span>
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth={2} />
            </svg>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="relative basis-1/2 rounded-lg border border-zinc-200 bg-white">
            <span className="absolute top-0 left-0 rounded-tl bg-zinc-200 p-1 font-medium">
              Exclusive
            </span>
            <img
              src="https://picsum.photos/200/200"
              alt="Offer A"
              className="w-full rounded-t"
            />
            <div className="p-2">
              <h3>Offer A</h3>
              <span className="text-lg font-medium">50 points</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path
                  d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0L109.6 0C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9c0 0 0 0-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3L448 384l-320 0 0-133.4c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3L64 384l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64 0-131.4c-4 1-8 1.8-12.3 2.3z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div className="relative basis-1/2 rounded-lg border border-zinc-200 bg-white">
            <span className="absolute top-0 left-0 rounded-tl bg-zinc-200 p-1 font-medium">
              Exclusive
            </span>
            <img
              src="https://picsum.photos/200/200"
              alt="Offer A"
              className="w-full rounded-t"
            />
            <div className="p-2">
              <h3>Offer B</h3>
              <span className="text-lg font-medium">25 points</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path
                  d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0L109.6 0C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9c0 0 0 0-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3L448 384l-320 0 0-133.4c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3L64 384l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64 0-131.4c-4 1-8 1.8-12.3 2.3z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="p-2">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-medium">Points Summary</h2>
            <p className="text-black/60">Track Your Progress</p>
          </div>
          <button className="flex items-center gap-1 self-center rounded border-2 border-primary px-2 py-1">
            <span>View History</span>
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth={2} />
            </svg>
          </button>
        </div>

        <div className="mt-5 rounded border border-black/30 p-2">
          <h3 className="text-black/40">Total Points</h3>
          <span className="text-lg font-medium">750</span>
          <p>+50 from last week</p>
        </div>

        <div className="mt-5 flex gap-2">
          <div className="flex basis-1/2 flex-col items-center justify-center rounded border-2 bg-white p-4">
            <svg
              className="h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path
                d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z"
                fill="currentColor"
              />
            </svg>
            {/* <span>Rewards</span> */}
          </div>
          <div className="flex basis-1/2 flex-col items-center justify-center rounded bg-primary p-4 text-white">
            <svg
              className="h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path
                d="M0 80C0 53.5 21.5 32 48 32l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48L0 80zM64 96l0 64 64 0 0-64L64 96zM0 336c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96zm64 16l0 64 64 0 0-64-64 0zM304 32l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm80 64l-64 0 0 64 64 0 0-64zM256 304c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-160zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z"
                fill="currentColor"
              />
            </svg>
            {/* <span>Scan</span> */}
          </div>
        </div>
      </section>

      <section className="p-2">
        <h2 className="mb-4 text-xl font-medium">Featured Businesses</h2>
        <div className="flex gap-1 border-y border-black/20 bg-white pb-2">
          <img
            className="h-30 w-30"
            src="https://picsum.photos/200/200"
            alt="Restaurant A"
          />
          <div className="flex flex-col items-start gap-1">
            <h3 className="text-lg font-medium">Restaurant A</h3>
            <p className="text-black/50">Specializing in Local Cuisines</p>
            <span className="rounded bg-zinc-200 p-1">Restaurant</span>
            <p className="text-sm">Earn points by dinning here</p>
          </div>
        </div>
        <div className="flex gap-1 border-y border-black/20 bg-white pb-2">
          <img
            className="h-30 w-30"
            src="https://picsum.photos/200/200"
            alt="Restaurant A"
          />
          <div className="flex flex-col items-start gap-1">
            <h3 className="text-lg font-medium">Grocery Store B</h3>
            <p className="text-black/50">Fresh and Organice Produce</p>
            <span className="rounded bg-zinc-200 p-1">Grocery</span>
            <p className="text-sm">Collect points with every purchase</p>
          </div>
        </div>
      </section>

      <section className="p-2">
        <h2 className="text-xl font-medium">Nearby Businesses</h2>
        <div className="flex items-center gap-2 border-y border-black/20 bg-white py-2">
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path
              d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1L61.1 224zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L64 352c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16l0 16c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-16z"
              fill="currentColor"
            />
          </svg>
          <div>
            <h3>Restaurant C</h3>
            <p className="text-black/50">Try our new menu</p>
          </div>
          <div className="grow text-end">
            <p className="font-medium">
              100 meters <br /> away
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 border-y border-black/20 bg-white py-2">
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="currentColor"
          >
            <path
              d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0L109.6 0C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9c0 0 0 0-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3L448 384l-320 0 0-133.4c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3L64 384l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64 0-131.4c-4 1-8 1.8-12.3 2.3z"
              fill="currentColor"
            />
          </svg>

          <div>
            <h3>Grocery Store D</h3>
            <p className="text-black/50">Weekly discounts</p>
          </div>
          <div className="grow text-end">
            <p className="font-medium">
              200 meters <br /> away
            </p>
          </div>
        </div>
        <button className="mt-4 w-full rounded-lg bg-primary py-2 text-white">
          Redeem Points
        </button>
      </section>

      <Navbar active={0} />
    </main>
  );
}

export default App;
