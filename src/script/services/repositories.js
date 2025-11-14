import { baseUrl, quantity } from "../variables.js";

async function getRepos(userName) {
  const response = await fetch(
    `${baseUrl}/${userName}/repos?per_page=${quantity}&sort=created`
  );
  return await response.json();
}

export { getRepos };
