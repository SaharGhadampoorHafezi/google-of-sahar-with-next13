"use client";

import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { useRouter } from "next/navigation";
// in next 12 we import from next/router, but in next 13 we import from next/navigation instead

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };
  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  };
  return (
    <>
      <form
        className="sm:max-w-xl lg:max-w-2xl focus-within:shadow-md flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow"
        onSubmit={handleSubmit}
      >
        <AiOutlineSearch
          onClick={handleSubmit}
          className="text-xl text-gray-500 mr-3"
        />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <BiMicrophone className="text-lg text-gray-500" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="disabled:opacity-80 btn flex items-center justify-center"
        >
          {randomSearchLoading ? (
            <img src="spinner.svg" alt="" className="h-6 text-center" />
          ) : (
            "I Am Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
