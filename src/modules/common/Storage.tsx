// NOTE: storing just id's

const myStorage = "githubRepos";

const initStorage = () => {
  if (localStorage.getItem(myStorage) === null) {
    const githubRepos: string[] = [];
    localStorage.setItem(myStorage, JSON.stringify(githubRepos));
  }
};

export const readStorage = () => {
  if (typeof Storage !== "undefined") {
    initStorage();
    return JSON.parse(localStorage.getItem(myStorage) || "{}");
  } else {
    return false;
  }
};

export const addToStorage = (id: string) => {
  if (
    typeof Storage !== "undefined" &&
    id !== null &&
    typeof id !== "undefined" &&
    id.length > 0
  ) {
    initStorage();

    let githubRepos = JSON.parse(localStorage.getItem(myStorage) || "{}");
    const githubReposSet = new Set(githubRepos);
    githubReposSet.add(id);

    // NOTE: I am not using this:
    // githubRepos = [...githubReposSet];
    // Because will have to use compiler option '--downlevelIteration' to allow iterating of iterators.

    githubRepos = Array.from(githubReposSet);
    localStorage.setItem(myStorage, JSON.stringify(githubRepos));
  }
};

export const removeFromStorage = (id: string) => {
  if (typeof Storage !== "undefined") {
    initStorage();
    let githubRepos = JSON.parse(localStorage.getItem(myStorage) || "{}");
    const githubReposSet = new Set(githubRepos);
    githubReposSet.delete(id);
    githubRepos = Array.from(githubReposSet);
    localStorage.setItem(myStorage, JSON.stringify(githubRepos));
  }
};

export const hasInStorage = (id: string) => {
  if (typeof Storage !== "undefined") {
    initStorage();
    const githubRepos = JSON.parse(localStorage.getItem(myStorage) || "{}");
    const githubReposSet = new Set(githubRepos);
    return githubReposSet.has(id) ? true : false;
  }
};
