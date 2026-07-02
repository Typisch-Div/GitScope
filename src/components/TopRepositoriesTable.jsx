import React, { useMemo, useState } from "react";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import RepositoryModal from "./RepositoryModal";

function TopRepositoriesTable({ repositories }) {
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("All");
  const [sortBy, setSortBy] = useState("stars");
  const [selectedRepo, setSelectedRepo] = useState(null);

  const languages = [
    "All",
    ...new Set(
      repositories
        .map((repo) => repo.language)
        .filter(Boolean)
    ),
  ];

  const topRepos = useMemo(() => {
    return repositories
      .filter((repo) => !repo.fork)
      .filter((repo) =>
        repo.name.toLowerCase().includes(search.toLowerCase())
      )
      .filter((repo) =>
        language === "All"
          ? true
          : repo.language === language
      )
      .sort((a, b) => {
        switch (sortBy) {
          case "stars":
            return b.stargazers_count - a.stargazers_count;

          case "forks":
            return b.forks_count - a.forks_count;

          case "updated":
            return new Date(b.updated_at) - new Date(a.updated_at);

          case "name":
            return a.name.localeCompare(b.name);

          default:
            return 0;
        }
      })
      .slice(0, 10);
  }, [repositories, search, language, sortBy]);

  const getTimeAgo = (date) => {
    const now = new Date();
    const updated = new Date(date);
    const days = Math.floor((now - updated) / (1000 * 60 * 60 * 24));

    if (days < 1) return "Today";
    if (days === 1) return "Yesterday";
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    if (days < 365) return `${Math.floor(days / 30)} months ago`;

    return `${Math.floor(days / 365)} years ago`;
  };

  const languageColors = {
    JavaScript: "#f7df1e",
    TypeScript: "#3178c6",
    Python: "#3776ab",
    Java: "#f89820",
    HTML: "#e34c26",
    CSS: "#1572b6",
    "C++": "#00599c",
    C: "#a8b9cc",
    Go: "#00add8",
    Rust: "#dea584",
    PHP: "#777bb4",
    Ruby: "#cc342d",
    Kotlin: "#a97bff",
    Swift: "#f05138",
  };

  return (
    <section className="max-w-7xl mx-auto px-6 pb-10">
      <div className="overflow-hidden rounded-2xl border border-[#30363d] bg-[#161b22]">

        <div className="border-b border-[#30363d] px-8 py-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <h2 className="text-xl font-semibold text-[#f0f6fc]">
              Top Repositories
            </h2>

            <div className="flex flex-wrap gap-3">

              <input
                type="text"
                placeholder="Search repository..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full md:w-64 px-4 py-2 rounded-lg bg-[#0d1117] border border-[#30363d] text-[#f0f6fc] placeholder-[#8b949e] focus:outline-none focus:border-[#f59e0b]"
              />

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="px-4 py-2 rounded-lg bg-[#0d1117] border border-[#30363d] text-white focus:outline-none focus:border-[#f59e0b]"
              >
                {languages.map((lang) => (
                  <option key={lang}>{lang}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg bg-[#0d1117] border border-[#30363d] text-white focus:outline-none focus:border-[#f59e0b]"
              >
                <option value="stars">Most Stars</option>
                <option value="forks">Most Forks</option>
                <option value="updated">Recently Updated</option>
                <option value="name">Name (A-Z)</option>
              </select>

            </div>

          </div>

          <p className="mt-4 text-sm text-[#8b949e]">
            Showing {topRepos.length} repositories
          </p>

        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">

            <thead className="bg-[#0d1117]">
              <tr className="border-b border-[#30363d] text-sm">
                <th className="px-8 py-4 text-left font-medium text-[#8b949e]">
                  Repository
                </th>
                <th className="px-8 py-4 text-left font-medium text-[#8b949e]">
                  Language
                </th>
                <th className="px-8 py-4 text-right font-medium text-[#8b949e]">
                  Stars
                </th>
                <th className="px-8 py-4 text-right font-medium text-[#8b949e]">
                  Forks
                </th>
                <th className="px-8 py-4 text-right font-medium text-[#8b949e]">
                  Updated
                </th>
              </tr>
            </thead>

            <tbody>

              {topRepos.length === 0 ? (
                <tr
                    onClick={() => setSelectedRepo(repo)}
                    className="cursor-pointer border-b border-[#21262d] transition hover:bg-[#0d1117]"
                >
                  <td
                    colSpan="5"
                    className="py-10 text-center text-[#8b949e]"
                  >
                    No repositories match your filters.
                  </td>
                </tr>
              ) : (
                topRepos.map((repo) => (
                  <tr
                    key={repo.id}
                    className="border-b border-[#21262d] transition-colors hover:bg-[#0d1117]"
                  >
                    <td className="px-8 py-5">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 font-semibold text-[#f59e0b] hover:text-[#fbbf24]"
                      >
                        <FaGithub />
                        {repo.name}
                      </a>

                      {repo.description && (
                        <p className="mt-2 max-w-md text-sm leading-6 text-[#8b949e]">
                          {repo.description.length > 90
                            ? repo.description.slice(0, 90) + "..."
                            : repo.description}
                        </p>
                      )}
                    </td>

                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <span
                          className="h-3 w-3 rounded-full"
                          style={{
                            background:
                              languageColors[repo.language] || "#6b7280",
                          }}
                        />
                        <span className="text-[#f0f6fc]">
                          {repo.language || "Unknown"}
                        </span>
                      </div>
                    </td>

                    <td className="px-8 py-5 text-right">
                      <span className="inline-flex items-center gap-2 font-medium text-[#f0f6fc]">
                        <FaStar className="text-[#f59e0b]" />
                        {repo.stargazers_count.toLocaleString()}
                      </span>
                    </td>

                    <td className="px-8 py-5 text-right">
                      <span className="inline-flex items-center gap-2 text-[#c9d1d9]">
                        <FaCodeBranch className="text-[#8b949e]" />
                        {repo.forks_count.toLocaleString()}
                      </span>
                    </td>

                    <td className="px-8 py-5 text-right text-[#8b949e]">
                      {getTimeAgo(repo.updated_at)}
                    </td>
                  </tr>
                ))
              )}

            </tbody>

          </table>
        </div>
      </div>
      {selectedRepo && (
    <RepositoryModal
        repo={selectedRepo}
        onClose={() => setSelectedRepo(null)}
          />
      )}
    </section>
  );
}

export default TopRepositoriesTable;