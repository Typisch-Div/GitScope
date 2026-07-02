import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

function StatCard({
  icon: Icon,
  title,
  value,
  change,
  chartData,
  color = "#f59e0b",
}) {
  return (
    <div className="group rounded-2xl border border-[#30363d] bg-[#161b22] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-[#8b949e]">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#f0f6fc]">
            {typeof value === "number" ? value.toLocaleString() : value}
          </h2>

          {change && (
            <p className="mt-2 text-sm text-[#8b949e]">
              {change}
            </p>
          )}
        </div>

        {Icon && (
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl"
            style={{
              backgroundColor: `${color}20`,
              color: color,
            }}
          >
            <Icon size={22} />
          </div>
        )}
      </div>

      {/* Mini Chart */}
      {chartData && (
        <div className="mt-6 h-14">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <Line
                type="monotone"
                dataKey="v"
                stroke={color}
                strokeWidth={2.5}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default StatCard;