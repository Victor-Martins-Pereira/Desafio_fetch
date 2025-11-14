import { getUser } from "./services/user.js";
import { getRepos } from "./services/repositories.js";
import { getEvent } from "./services/event.js";
import { userInfo } from "./objects/user.js";
import { screen } from "./objects/screen.js";

document.getElementById("btn-search").addEventListener("click", () => {
  const userName = document.getElementById("input-search").value;
  if (validarInput(userName)) return;
  getUserData(userName);
});

function validarInput(userName) {
  if (userName.length === 0) {
    alert("Preencha o campo com o nome do Usuário do GitHub");
    return true;
  }
}

document.getElementById("input-search").addEventListener("keyup", (e) => {
  const userName = e.target.value;
  const key = e.which || e.keyCode;
  const isEnterKeyPressed = key === 13;
  if (isEnterKeyPressed) {
    if (validarInput(userName)) return;
    getUserData(userName);
  }
});

async function getUserData(userName) {
  const userResponse = await getUser(userName);
  const repositoriesResponse = await getRepos(userName);
  const eventResponse = await getEvent(userName);

  userInfo.setInfo(userResponse);
  userInfo.setRepositories(repositoriesResponse);
  userInfo.setEvent(eventResponse);

  screen.renderUser(userInfo);
}
