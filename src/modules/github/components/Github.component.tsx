import React, { useState } from "react";
import { SearchResults } from "./SearchResults";
import styles from "./styles/Github.component.module.css";

interface GithubProps {}

export const Github: React.FC<GithubProps> = () => {
  const [searchInput, setSearchInput] = useState("");
  const [repos, setRepos] = useState("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (searchInput !== "") {
      try {
        fetch(`https://api.github.com/users/${searchInput}/repos`)
          .then((res) => res.json())
          .then((data) => {
            setRepos(filterJSON(data));
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const filterJSON = (jsonRaw: any) => {
    return jsonRaw.map((e: any) => {
      return {
        id: e.id,
        name: e.name,
        stargazers_count: e.stargazers_count,
        forks_count: e.forks_count,
        language: e.language,
        description: e.description,
        license: e.license?.name,
      };
    });
  };

  return (
    <div className={styles.repo}>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search"
            value={searchInput}
            onChange={handleChange}
          />
          <button>Search</button>
        </form>
      </div>
      <SearchResults repos={repos} />
    </div>
  );
};
