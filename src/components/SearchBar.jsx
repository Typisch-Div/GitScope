import React from "react";
import { FaSearch, FaGithub } from "react-icons/fa";

function SearchBar({
  searchInput,
  setSearchInput,
  onSearch,
  loading,
  error,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <section className="py-14">
      <div className="mx-auto max-w-5xl">

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#30363d] bg-[#161b22] px-4 py-2 text-sm text-[#8b949e]">
            <FaGithub className="text-amber-400" />
            GitHub Profile Analytics
          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-[#f0f6fc]">
            Analyze Any GitHub Profile
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#8b949e]">
            Search any public GitHub account and instantly visualize
            repositories, languages, stars, forks and developer insights.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-3xl overflow-hidden rounded-2xl border border-[#30363d] bg-[#161b22]"
        >
          <div className="relative flex-1">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8b949e]" />

            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Enter GitHub username..."
              className="h-16 w-full bg-transparent pl-14 pr-6 text-[#f0f6fc] placeholder:text-[#8b949e] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-8 font-semibold bg-amber-500 text-black transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Searching..." : "Analyze"}
          </button>
        </form>

        {error && (
          <div className="mx-auto mt-5 max-w-3xl rounded-xl border border-red-700 bg-red-900/20 px-5 py-4 text-red-400">
            {error}
          </div>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["torvalds", "gaearon", "vercel", "sindresorhus"].map((user) => (
            <button
              key={user}
              onClick={() => setSearchInput(user)}
              className="rounded-full border border-[#30363d] bg-[#161b22] px-4 py-2 text-sm text-[#8b949e] transition hover:border-amber-400 hover:text-white"
            >
              {user}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SearchBar;