import React from "react";
import type { NextPage } from "next";
import MainHead from "@/common/components/MainHead";
import MainMenu from "@/common/components/MainMenu";
import { Github } from "@/github/components";

const Home: NextPage = () => {
  return (
    <div>
      <MainHead />
      <main>
        <MainMenu />
        <Github />
      </main>
    </div>
  );
};

export default Home;
