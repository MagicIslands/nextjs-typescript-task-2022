import Link from "next/link";
import MainHead from "@/common/components/MainHead";
import MainMenu from "@/common/components/MainMenu";
import React from "react";
import styles from "./bookmarks.module.css";
import { readStorage } from "@/common/Storage";
import type { NextPage } from "next";

const Bookmarks: NextPage = () => {
  const repos: string[] = Array.from(readStorage());

  const listRepos =
    repos.length !== 0 ? (
      repos.map((id: string) => (
        <li key={id}>
          <Link href={`/repo/${id}`}>
            <a>{id}</a>
          </Link>
        </li>
      ))
    ) : (
      <li>No bookmarks</li>
    );

  return (
    <div>
      <MainHead />
      <main className={styles.bookmarks}>
        <MainMenu />
        <ul>{listRepos}</ul>
      </main>
    </div>
  );
};

export default Bookmarks;
