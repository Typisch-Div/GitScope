import React from "react";
import {
  FaStar,
  FaCodeBranch,
  FaUsers,
  FaBook,
  FaCalendarAlt,
} from "react-icons/fa";
import StatCard from "./StatCard";

function DashboardStats({ user, stats }) {
  if (!user || !stats) return null;

  const generateChartData = () =>
    Array.from({ length: 7 }, () => ({
      v: 25 + Math.random() * 55,
    }));

  const cards = [
    {
      icon: FaStar,
      title: "Total Stars",
      value: stats.totalStars,
      change: `${stats.totalRepos} repositories`,
      color: "#f59e0b",
    },
    {
      icon: FaCodeBranch,
      title: "Forks",
      value: stats.totalForks,
      change: "Across all repositories",
      color: "#3b82f6",
    },
    {
      icon: FaUsers,
      title: "Followers",
      value: user.followers,
      change: `${user.following} following`,
      color: "#06b6d4",
    },
    {
      icon: FaBook,
      title: "Repositories",
      value: user.public_repos,
      change: "Public repositories",
      color: "#8b5cf6",
    },
    {
      icon: FaCalendarAlt,
      title: "Member Since",
      value: new Date(user.created_at).getFullYear(),
      change: new Date(user.created_at).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      }),
      color: "#ef4444",
    },
  ];

  return (
    <section className="py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-5">
        {cards.map((card) => (
          <StatCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            value={card.value}
            change={card.change}
            chartData={generateChartData()}
            color={card.color}
          />
        ))}
      </div>
    </section>
  );
}

export default DashboardStats;