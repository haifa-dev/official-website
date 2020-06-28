import React, { useEffect, useState } from "react";
import styles from "./projectCard.module.scss";
import Repo from "./Repo";
import { getHaifaDevRepos } from "../../services/github.service";

export default function ProjectCard() {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    const getRepos = async () => {
      const data = await getHaifaDevRepos();
      setRepos(data);
    };
    getRepos();
  }, []);

  const Repos = () => {
    if (!repos) {
      return <div>Loading...</div>;
    }
    return repos.map((repo, i) => {
      return <Repo key={i} repo={repo} />
    });
  };

  return (
    <div className="container">
      <h2>Projects</h2>
      <h3>Here are some of the projects we are working on at the moment:</h3>
      <Repos />
    </div>
  );
}
