import React from "react";
import Tour from "./Tour";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl flex flex-col justify-center items-center space-y-10  bg-gray-400 text-white text-center p-10">
        <span className="border p-3 rounded-sm border-green-400">
          Get Our Latest Album
        </span>
        <div className="border p-5 border-green-400 rounded-full inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-8 text-green-400"
          >
            <path
              fill-rule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </h1>
      <div className="flex flex-col items-center my-10 space-y-6">
        <Tour />
        <Tour />
        <Tour />
        <Tour />
        <Tour />
      </div>
    </div>
  );
};

export default HomePage;
