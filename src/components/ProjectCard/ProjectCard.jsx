import React, { useEffect, useState } from "react";
import styles from "./projectCard.module.scss";
import Repo from "./Repo";
import { getAllRepos } from "../../services/github.service";

export default function ProjectCard() {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    const getRepos = async () => {
      const data = await getAllRepos();
      console.log(data)
      setRepos(data);
    };
    getRepos();
  }, []);

  const Repos = () => {
    if (!repos) {
      return <span className={styles.loading}>Loading...</span>;
    }
    return repos.map((repo, i) => {
      return <Repo key={i} repo={repo} />;
    });
  };

  return (
    <div className="container">
      <div className={styles.projectCard}>
        <h3>Projects</h3>
        <p>Here are some of the projects we are working on at the moment:</p>
        <Repos />
      </div>
    </div>
  );
}
