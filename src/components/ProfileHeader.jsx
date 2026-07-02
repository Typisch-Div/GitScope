import React from "react";
import { FaGithub, FaMapMarkerAlt, FaLink } from "react-icons/fa";

function ProfileHeader({ user }) {
  if (!user) return null;

  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8">
        <div className="flex flex-col lg:flex-row gap-8">

          <div className="flex-shrink-0">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-32 h-32 rounded-2xl border border-[#30363d]"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#f0f6fc]">
              {user.name || user.login}
            </h2>

            <p className="text-[#8b949e] mt-1">@{user.login}</p>

            {user.bio && (
              <p className="mt-4 text-[#c9d1d9] leading-7">
                {user.bio}
              </p>
            )}

            <div className="mt-6 space-y-3 text-sm">

              {user.location && (
                <div className="flex items-center gap-3 text-[#8b949e]">
                  <FaMapMarkerAlt className="text-[#f59e0b]" />
                  <span>{user.location}</span>
                </div>
              )}

              {user.blog && (
                <div className="flex items-center gap-3 text-[#8b949e]">
                  <FaLink className="text-[#f59e0b]" />

                  <a
                    href={
                      user.blog.startsWith("http")
                        ? user.blog
                        : `https://${user.blog}`
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#f59e0b] hover:text-[#fbbf24] transition-colors"
                  >
                    {user.blog}
                  </a>
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-[#f59e0b] px-6 py-3 font-semibold text-black transition hover:bg-[#fbbf24]"
              >
                <FaGithub />
                View GitHub
              </a>

              <button
                onClick={() => navigator.clipboard.writeText(user.html_url)}
                className="rounded-xl border border-[#30363d] px-6 py-3 text-[#f0f6fc] transition hover:border-[#f59e0b]"
              >
                Copy Profile Link
              </button>

            </div>
          </div>

          <div className="flex gap-8 lg:flex-col lg:text-right">

            <div>
              <p className="text-3xl font-bold text-[#f0f6fc]">
                {user.followers.toLocaleString()}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#8b949e]">
                Followers
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-[#f0f6fc]">
                {user.public_repos}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#8b949e]">
                Repositories
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ProfileHeader;