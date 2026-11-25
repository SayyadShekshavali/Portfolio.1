import { useState } from "react";
import { HeatmapGrid } from "./arts/HeatmapGrid.jsx";
import { GithubHeatmap } from "./GithubHeatmap.jsx";

export default function ActivityDashboard() {
  const [activeTab, setActiveTab] = useState("leetcode");

  const buttonStyle = (tab) =>
    `px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
      activeTab === tab
        ? "bg-white text-black"
        : "bg-transparent text-gray-400 hover:text-white"
    }`;

  return (
    <section className="w-full min-w-0 px-0 sm:-px-0">
      <div className="flex justify-center gap-2 sm:gap-3 mb-1 sm:mb-3">
        <button
          onClick={() => setActiveTab("leetcode")}
          className={buttonStyle("leetcode")}
        >
          LeetCode
        </button>

        <button
          onClick={() => setActiveTab("github")}
          className={buttonStyle("github")}
        >
          GitHub
        </button>
      </div>

      {/* Only one dashboard exists at a time */}
      <div className="w-full overflow-x-auto">
        <div key={activeTab} className="dashboard-fade">
          {activeTab === "leetcode" ? <HeatmapGrid /> : <GithubHeatmap />}
        </div>
      </div>
    </section>
  );
}
