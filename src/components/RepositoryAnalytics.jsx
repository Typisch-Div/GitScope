import React from "react";
import {
  FaStar,
  FaCodeBranch,
  FaRocket,
  FaCode,
} from "react-icons/fa";

function RepositoryAnalytics({ repositories, stats }) {
  if (!repositories.length || !stats) return null;

  const mostStarred = repositories.reduce((a, b) =>
    a.stargazers_count > b.stargazers_count ? a : b
  );

  const mostForked = repositories.reduce((a, b) =>
    a.forks_count > b.forks_count ? a : b
  );

  const newestRepo = [...repositories].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  )[0];

  const topLanguage = stats.languageData[0];

  const analytics = [
    {
      icon: FaStar,
      title: "Most Starred Repository",
      value: mostStarred.name,
      subtitle: `${mostStarred.stargazers_count.toLocaleString()} Stars`,
      color: "text-amber-400",
    },
    {
      icon: FaCodeBranch,
      title: "Most Forked Repository",
      value: mostForked.name,
      subtitle: `${mostForked.forks_count.toLocaleString()} Forks`,
      color: "text-sky-400",
    },
    {
      icon: FaRocket,
      title: "Newest Repository",
      value: newestRepo.name,
      subtitle: `Created ${new Date(
        newestRepo.created_at
      ).toLocaleDateString()}`,
      color: "text-emerald-400",
    },
    {
      icon: FaCode,
      title: "Top Language",
      value: topLanguage?.name || "Unknown",
      subtitle: `${Math.round(
        (topLanguage.value / stats.totalRepos) * 100
      )}% of repositories`,
      color: "text-violet-400",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-8">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-[#f0f6fc]">
          Repository Analytics
        </h2>

        <p className="text-sm text-[#8b949e]">
          Insights generated from repository data
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {analytics.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 transition-all duration-300 hover:border-amber-500 hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-6">

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8b949e]">
                    {item.title}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-[#f0f6fc] break-all">
                    {item.value}
                  </h3>
                </div>

                <div
                  className={`w-12 h-12 rounded-xl bg-[#0d1117] flex items-center justify-center ${item.color}`}
                >
                  <Icon size={20} />
                </div>
              </div>

              <p className="text-sm text-[#8b949e]">
                {item.subtitle}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
}

export default RepositoryAnalytics;