import React, { useState } from "react";
import styles from "./projectCard.module.scss";
import { getRepoContributersAsync } from "../../services/github.service";

export default function Repo({ repo }) {
  const [contributors, setContributors] = useState(null);
  const [reveal, setReveal] = useState();

  const handleClick = async () => {
    const data = await getRepoContributersAsync(repo.name);
    console.log(data);
    setContributors(data);
  };

  return (
    <div>
      <h4 onClick={handleClick}>{repo.name}</h4>
      {contributors &&
        contributors.map((contributor, i) => {
          return (
            <div key={i}>
              <span>{contributor.login}</span>
              <a href={contributor.html_url} target="_blank">
                <img src={contributor.avatar_url} />
              </a>
              <span>Contributions: {contributor.contributions}</span>
            </div>
          );
        })}
    </div>
  );
}
