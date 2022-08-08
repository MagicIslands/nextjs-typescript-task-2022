import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import styles from "./MainMenu.module.css";

const MainMenu: NextPage = () => {
  return (
    <div className={styles.menu}>
      <nav>
        <Link href="/">
          <a>Main</a>
        </Link>
        <Link href="/bookmarks">
          <a>Bookmarks</a>
        </Link>
      </nav>
    </div>
  );
};

export default MainMenu;
