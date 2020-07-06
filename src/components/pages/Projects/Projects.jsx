import React, { useEffect, useState } from "react";
import styles from "./projects.module.scss";
import Repo from "../../ProjectCard/Repo";
import { getAllRepos } from "../../../services/github.service";

export default function ProjectCard() {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    const getRepos = async () => {
      const data = await getAllRepos();
      setRepos(data);
    };
    getRepos();
  }, []);

  const Repos = () => {
    if (!repos) {
      return <span className={styles.loading}>Loading...</span>;
    } else {
      return repos.map((repo, i) => <Repo key={i} repo={repo} />);
    }
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
