import React from "react";
import { Card } from "./Card";
import { render } from "@testing-library/react";

test("Renders Card component", () => {
  render(
    <Card
      forks_count={1}
      id={123}
      language={"Javascript"}
      name={"Repo"}
      stargazers_count={1}
    />
  );
});
