import React, { useState } from "react";
import styles from "../pages/Projects/projects.module.scss";
import {
  getRepoContributers,
  getRepoIssues,
} from "../../services/github.service";

export default function Repo({ repo }) {
  const [reveal, setReveal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [contributors, setContributors] = useState(null);
  const [issues, setIssues] = useState(null); //not used yet

  const handleClick = async () => {
    if (!contributors) setLoading(true);
    const contributersData = await getRepoContributers(repo.name);
    setContributors(contributersData);
    const issuesData = await getRepoIssues(repo.name);
    setIssues(issuesData);
    setReveal(!reveal);
    setLoading(false);
  };

  const RepoInfo = () => {
    return (
      <div className={styles.repoInfo}>
        <div className={styles.repoTitle}>
          <span>{repo.name}</span>
          {loading && <span className={styles.loading}>Loading...</span>}
        </div>
        {reveal && (
          <div className={styles.repoDesc}>
            <div>
              <span>About the project: {repo.description}</span>
            </div>
            <div className={styles.repoDates}>
              <span>
                Created: {new Date(repo.created_at).toLocaleDateString("en-il")}
                {" | "}
              </span>
              <span>
                Last update:{" "}
                {new Date(repo.updated_at).toLocaleDateString("en-il")}
              </span>
            </div>
            <div></div>
          </div>
        )}
      </div>
    );
  };

  const Contributors = () => {
    return (
      <div className={styles.contributorsContainer}>
        {reveal &&
          contributors &&
          contributors.map((contributor, i) => {
            return (
              <a
                key={i}
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.contributor}>
                  <img src={contributor.avatar_url} alt="avatar" />
                  <span>{contributor.login}</span>
                  <span>Contributions: {contributor.contributions}</span>
                </div>
              </a>
            );
          })}
      </div>
    );
  };

  return (
    <div className={styles.repo} onClick={handleClick}>
      <RepoInfo />
      <Contributors />
    </div>
  );
}
