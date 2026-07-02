import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ChartsSection({ stats }) {
  if (!stats) return null;

  const COLORS = [
    "#F59E0B",
    "#3B82F6",
    "#8B5CF6",
    "#14B8A6",
    "#EC4899",
    "#F97316",
    "#06B6D4",
    "#64748B",
  ];

  return (
    <div className="xl:col-span-2 space-y-6">
      {/* Language Distribution */}
      <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-6">
        <h2 className="mb-6 text-xl font-semibold text-[#f0f6fc]">
          Language Distribution
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Pie Chart */}
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={stats.languageData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={70}
                  outerRadius={120}
                  paddingAngle={3}
                >
                  {stats.languageData.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip
                  contentStyle={{
                    background: "#161b22",
                    border: "1px solid #30363d",
                    borderRadius: "10px",
                    color: "#fff",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex flex-col justify-center space-y-4">
            {stats.languageData.map((lang, index) => (
              <div
                key={lang.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{
                      backgroundColor:
                        COLORS[index % COLORS.length],
                    }}
                  />
                  <span className="text-[#f0f6fc]">
                    {lang.name}
                  </span>
                </div>

                <span className="text-[#8b949e]">
                  {lang.value} repos
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-[#0d1117] p-5 text-center border border-[#30363d]">
            <p className="text-3xl font-bold text-white">
              {stats.totalRepos}
            </p>
            <p className="mt-1 text-sm text-[#8b949e]">
              Repositories
            </p>
          </div>

          <div className="rounded-xl bg-[#0d1117] p-5 text-center border border-[#30363d]">
            <p className="text-3xl font-bold text-white">
              {stats.languageData.length}
            </p>
            <p className="mt-1 text-sm text-[#8b949e]">
              Languages
            </p>
          </div>

          <div className="rounded-xl bg-[#0d1117] p-5 text-center border border-[#30363d]">
            <p className="text-3xl font-bold text-white">
              {stats.totalStars.toLocaleString()}
            </p>
            <p className="mt-1 text-sm text-[#8b949e]">
              Total Stars
            </p>
          </div>
        </div>
      </div>

      {/* Language Usage */}
      <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-6">
        <h2 className="mb-6 text-lg font-semibold text-[#f0f6fc]">
          Language Usage
        </h2>

        <div className="space-y-5">
          {stats.languageData.map((lang, index) => {
            const percent = Math.round(
              (lang.value / stats.totalRepos) * 100
            );

            return (
              <div key={lang.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-[#f0f6fc]">
                    {lang.name}
                  </span>

                  <span className="text-[#8b949e]">
                    {percent}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-[#30363d]">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${percent}%`,
                      backgroundColor:
                        COLORS[index % COLORS.length],
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ChartsSection;