import React from "react";
import "./statistics.css";

const Statistics = () => {
  return (
    <div className="statistics">
      <div>
        <h1 className="heading" style={{ color: "white" }}>
          GITHUB STATS
        </h1>
      </div>
      <div className="github_stats_div">
        <p>
          &nbsp;
          <img
            // align="center"
            src="https://github-readme-stats.vercel.app/api?username=pushpjain009&show_icons=true&locale=en"
            alt="pushpjain009"
            width={400}
            id="github_stats"
          />
        </p>

        <p>
          <img
            // align="left"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=pushpjain009&show_icons=true&locale=en&layout=compact"
            alt="pushpjain009"
            width={400}
            // height={195}
            id="github_mostUsedLanguage"
          />
        </p>

        <p>
          <img
            // align="right"
            src="https://github-readme-streak-stats.herokuapp.com/?user=pushpjain009&"
            alt="pushpjain009"
            width={400}
            id="github_streak"
          />
        </p>
      </div>
    </div>
  );
};

export default Statistics;
