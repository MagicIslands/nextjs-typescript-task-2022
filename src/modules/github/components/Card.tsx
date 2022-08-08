import React from "react";
import styles from "./styles/Card.module.css";
import { Repo } from "./interfaces/Repo";

export const Card: React.FC<Repo> = (repo: Repo) => {
  return (
    <div className={styles.card}>
      <h2>{repo.name}</h2>
      <div>
        <span>{repo.stargazers_count} stars</span>
        <span>{repo.forks_count} forks</span>
        <span>{repo.language}</span>
      </div>
      {repo.license && (
        <div>
          <div>{repo.description}</div>
          <div>{repo.license}</div>
        </div>
      )}
    </div>
  );
};
