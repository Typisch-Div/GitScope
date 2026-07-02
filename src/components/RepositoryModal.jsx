import { FaTimes, FaStar, FaCodeBranch, FaExclamationCircle } from "react-icons/fa";

function RepositoryModal({ repo, onClose }) {
  if (!repo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-2xl border border-[#30363d] bg-[#161b22] p-8 relative">

        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-[#8b949e] hover:text-white"
        >
          <FaTimes />
        </button>

        <h2 className="text-2xl font-bold text-white">
          {repo.name}
        </h2>

        <p className="mt-4 text-[#8b949e]">
          {repo.description || "No description available."}
        </p>

        <div className="grid grid-cols-1 gap-6">

          <div className="flex items-center gap-3">
            <FaStar className="text-amber-400" />
            <span>{repo.stargazers_count} Stars</span>
          </div>

          <div className="flex items-center gap-3">
            <FaCodeBranch className="text-cyan-400" />
            <span>{repo.forks_count} Forks</span>
          </div>

          <div>
            <p className="text-[#8b949e] text-sm">Language</p>
            <p>{repo.language || "Unknown"}</p>
          </div>

          <div>
            <p className="text-[#8b949e] text-sm">Default Branch</p>
            <p>{repo.default_branch}</p>
          </div>

          <div>
            <p className="text-[#8b949e] text-sm">Open Issues</p>
            <p>{repo.open_issues_count}</p>
          </div>

          <div>
            <p className="text-[#8b949e] text-sm">Size</p>
            <p>{repo.size} KB</p>
          </div>

          <div>
            <p className="text-[#8b949e] text-sm">License</p>
            <p>{repo.license?.name || "None"}</p>
          </div>

        </div>

        {repo.topics?.length > 0 && (
          <div className="mt-8">

            <h3 className="font-semibold mb-3">
              Topics
            </h3>

            <div className="flex flex-wrap gap-2">
              {repo.topics.map(topic => (
                <span
                  key={topic}
                  className="px-3 py-1 rounded-full bg-[#0d1117] border border-[#30363d] text-sm"
                >
                  {topic}
                </span>
              ))}
            </div>

          </div>
        )}

        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-lg bg-amber-500 px-5 py-3 font-semibold text-black hover:bg-amber-400"
        >
          Open on GitHub
        </a>

      </div>

    </div>
  );
}

export default RepositoryModal;