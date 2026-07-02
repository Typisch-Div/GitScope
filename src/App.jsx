import React, { useState } from "react";
import axios from "axios";
import { FaGithub } from "react-icons/fa";

import Layout from "./components/Layout";
import SearchBar from "./components/SearchBar";
import ProfileHeader from "./components/ProfileHeader";
import RepositoryAnalytics from "./components/RepositoryAnalytics";
import DashboardStats from "./components/DashboardStats";
import ChartsSection from "./components/ChartsSection";
import QuickInsights from "./components/QuickInsights";
import TopRepositoriesTable from "./components/TopRepositoriesTable";

import "./index.css";

const GITHUB_API_BASE = "https://api.github.com";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [userData, setUserData] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [stats, setStats] = useState(null);

  const calculateStats = (repos) => {
    if (!repos.length) return null;

    const languages = {};

    repos.forEach((repo) => {
      if (repo.language) {
        languages[repo.language] =
          (languages[repo.language] || 0) + 1;
      }
    });

    return {
      totalRepos: repos.length,
      totalStars: repos.reduce(
        (sum, repo) => sum + repo.stargazers_count,
        0
      ),
      totalForks: repos.reduce(
        (sum, repo) => sum + repo.forks_count,
        0
      ),
      languageData: Object.entries(languages)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 8),
      topRepos: repos
        .filter((repo) => !repo.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5),
    };
  };

  const handleSearch = async () => {
    if (!searchInput.trim()) {
      setError("Please enter a GitHub username.");
      return;
    }

    setLoading(true);
    setError("");
    setUserData(null);
    setRepositories([]);
    setStats(null);

    try {
      const username = searchInput.trim();

      const [userResponse, reposResponse] = await Promise.all([
        axios.get(`${GITHUB_API_BASE}/users/${username}`),
        axios.get(
          `${GITHUB_API_BASE}/users/${username}/repos?per_page=100&sort=updated`
        ),
      ]);

      setUserData(userResponse.data);
      setRepositories(reposResponse.data);
      setStats(calculateStats(reposResponse.data));
    } catch (err) {
      if (err.response?.status === 404) {
        setError("User not found.");
      } else if (err.response?.status === 403) {
        setError("GitHub API rate limit exceeded.");
      } else {
        setError("Failed to fetch GitHub data.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onSearch={handleSearch}
        loading={loading}
        error={error}
      />

      {userData ? (
        <>
          <section className="max-w-7xl mx-auto px-6 py-8">
            <ProfileHeader user={userData} />
          </section>


          <DashboardStats
            user={userData}
            stats={stats}
          />

          <RepositoryAnalytics
            repositories={repositories}
            stats={stats}
          />

          <ChartsSection
            stats={stats}
            repositories={repositories}
          />

          <br />
          <QuickInsights
            user={userData}
            stats={stats}
            repositories={repositories}
          />
            <br />
          <TopRepositoriesTable
            repositories={repositories}
          />
        </>
      ) : (
        !loading &&
        !error && (
          <section className="max-w-7xl mx-auto px-6 py-28 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center">
                <FaGithub className="text-3xl text-black" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#f0f6fc]">
              Analyze Any GitHub Profile
            </h2>

            <p className="mt-4 text-[#8b949e] max-w-xl mx-auto">
              Search for a GitHub username to explore repositories,
              programming languages, stars, forks, and developer insights.
            </p>

            <p className="mt-8 text-sm text-[#8b949e]">
              Try: torvalds • gaearon • sindresorhus • vercel
            </p>
          </section>
        )
      )}
    </Layout>
  );
}

export default App;