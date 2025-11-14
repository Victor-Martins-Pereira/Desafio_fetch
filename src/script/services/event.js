import { baseUrl, quantity } from "../variables.js";

async function getEvent(userName) {
  const response = await fetch(
    `${baseUrl}/${userName}/events?per_page=${quantity}&sort=created`
  );
  return await response.json();
}

export { getEvent };
