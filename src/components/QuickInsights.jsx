import React from "react";
import {
  FaChartLine,
  FaCode,
  FaStar,
  FaCalendarAlt,
} from "react-icons/fa";

function QuickInsights({ user, stats, repositories }) {
  if (!user || !stats) return null;

  const topLanguage = stats.languageData[0]?.name || "N/A";
  const avgStars = Math.round(stats.totalStars / stats.totalRepos || 0);
  const accountAge =
    new Date().getFullYear() -
    new Date(user.created_at).getFullYear();

  const insights = [
    {
      icon: FaChartLine,
      title: "Repository Growth",
      value: `${stats.totalRepos}`,
      description: "Public repositories",
    },
    {
      icon: FaCode,
      title: "Primary Language",
      value: topLanguage,
      description: `${stats.languageData.length} languages used`,
    },
    {
      icon: FaStar,
      title: "Average Stars",
      value: avgStars,
      description: "Per repository",
    },
    {
      icon: FaCalendarAlt,
      title: "GitHub Member",
      value: `${accountAge} Years`,
      description: `Since ${new Date(user.created_at).getFullYear()}`,
    },
  ];

  return (
    <aside className="space-y-6">

      <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-6">
        <h2 className="text-lg font-semibold text-[#f0f6fc]">
          Quick Insights
        </h2>

        <div className="mt-6 space-y-5">
          {insights.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border-b border-[#30363d] pb-4 last:border-none last:pb-0"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d1117] text-[#f59e0b]">
                <item.icon />
              </div>

              <div className="flex-1">
                <p className="text-sm text-[#8b949e]">
                  {item.title}
                </p>

                <h3 className="mt-1 text-xl font-semibold text-[#f0f6fc]">
                  {item.value}
                </h3>

                <p className="mt-1 text-xs text-[#8b949e]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-6">
        <h2 className="mb-4 text-lg font-semibold text-[#f0f6fc]">
          Profile Summary
        </h2>

        <div className="space-y-3 text-sm">

          <div className="flex justify-between">
            <span className="text-[#8b949e]">Followers</span>
            <span className="font-medium text-[#f0f6fc]">
              {user.followers.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#8b949e]">Following</span>
            <span className="font-medium text-[#f0f6fc]">
              {user.following.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#8b949e]">Repositories</span>
            <span className="font-medium text-[#f0f6fc]">
              {stats.totalRepos}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#8b949e]">Stars</span>
            <span className="font-medium text-[#f0f6fc]">
              {stats.totalStars.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#8b949e]">Forks</span>
            <span className="font-medium text-[#f0f6fc]">
              {stats.totalForks.toLocaleString()}
            </span>
          </div>

        </div>
      </div>

    </aside>
  );
}

export default QuickInsights;
