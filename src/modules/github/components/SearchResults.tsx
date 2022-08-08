import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles/SearchResults.module.css";
import { Card } from "./Card";

interface SearchResultsProps {
  [key: string]: any;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  repos,
}: SearchResultsProps) => {
  const listRepos =
    repos.length !== 0 ? (
      repos.map((item: any) => (
        <li key={item.id}>
          <Link href={`/repo/${item.id}`}>
            <a>
              <Card
                forks_count={item.forks_count}
                id={item.id}
                language={item.language}
                name={item.name}
                stargazers_count={item.stargazers_count}
              />
            </a>
          </Link>
        </li>
      ))
    ) : (
      <li></li>
    );

  return <ul className={styles.results}>{listRepos}</ul>;
};
