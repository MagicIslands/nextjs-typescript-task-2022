## The task

Your task is to build an app which displays public GitHub repositories for a specified user. When visiting the index page (`/`), there should be a text field in which you can enter any GitHub username and a button to trigger the search.

A list of repositories should then be returned, displaying:

- The repo title
- Number of stars
- Number of forks
- Programming language used

Clicking on the repository should take you to a detail view containing a description of the repository and license information. Users should also be able to 'bookmark' repositories, displayed when visiting `/bookmarks`. These bookmarks should be stored locally in the browser, persisting across refreshes.

- [The API endpoint you'll need is here](https://developer.github.com/v3/repos/#list-repositories-for-a-user). An API key should not be required.