import MainHead from "@/common/components/MainHead";
import MainMenu from "@/common/components/MainMenu";
import React, { useEffect, useState } from "react";
import { Card } from "@/github/components/Card";
import { Repo } from "@/github/components/interfaces/Repo";
import { useRouter } from "next/router";

import type { NextPage } from "next";
import styles from "./[id].module.css";
import {
  hasInStorage,
  addToStorage,
  removeFromStorage,
} from "@/common/Storage";

const Bookmarks: NextPage = () => {
  const { query } = useRouter();
  const id: string = query["id"] as string;
  const [bookmark, setBookmark] = useState<boolean>(false);
  const [repo, setRepo] = useState<Repo | null>(null);

  useEffect(() => {
    hasInStorage(id) ? setBookmark(true) : setBookmark(false);

    try {
      fetch(`https://api.github.com/repositories/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setRepo(filterJSON(data));
        });
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  const filterJSON = (jsonRaw: any) => {
    return {
      id: jsonRaw.id,
      name: jsonRaw.name,
      stargazers_count: jsonRaw.stargazers_count,
      forks_count: jsonRaw.forks_count,
      language: jsonRaw.language,
      description: jsonRaw.description,
      license: jsonRaw.license?.name,
    };
  };

  const handleBookmarkInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const target = event.target;
    const isChecked: boolean = target.checked;
    setBookmark(isChecked);
    isChecked ? addToStorage(id) : removeFromStorage(id);
  };

  return (
    <div>
      <MainHead />
      <main>
        <MainMenu />
        {repo !== null && (
          <div className={styles.repo}>
            <Card
              description={repo?.description}
              forks_count={repo?.forks_count}
              id={repo?.id}
              language={repo?.language}
              license={repo?.license}
              name={repo?.name}
              stargazers_count={repo?.stargazers_count}
            />
            <div className={styles.heart}>
              <input
                type="checkbox"
                id="like"
                checked={bookmark}
                onChange={handleBookmarkInputChange}
              />
              <label htmlFor="like">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z" />
                </svg>
              </label>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Bookmarks;
