import { getLastCommit } from "../services/lastMessage.js";

const screen = {
  userProfile: document.querySelector(".profile-data"),
  async renderUser(userInfo) {
    this.userProfile.innerHTML = `
    <div class= "info">
        <img src="${userInfo.avatarUrl}"/>
           <div class="data">
               <h1>${
                 userInfo.name ??
                 "Usuario não possui Nome cadastrado no GitHub! 🙁"
               }</h1>
               <p>${
                 userInfo.bio ?? "Usuário não possui uma Bio no GitHub! 🙁"
               }</p>
               <p>Seguidores: ${userInfo.userFollowers} 👥</p>
               <p>Seguindo: ${userInfo.userFollowing} 👤</p>
           </div>
    </div>`;

    let repositoriesItens = "";
    userInfo.repositories.forEach(
      (repo) =>
        (repositoriesItens += `
        <li>
            <div class="itemRepositorio">
              <a href="${repo.html_url}" target="_blank">
                ${repo.name}
                <ul class="infos">
                    <li>🍴 ${repo.forks_count}</li>
                    <li>⭐ ${repo.stargazers_count}</li>
                    <li>👀 ${repo.watchers_count}</li>
                    <li>👨‍💻 ${repo.language ?? "N/D"}</li>
                </ul>
              </a>
            </div>
        </li>
        `)
    );
    if (userInfo.repositories.length > 0) {
      this.userProfile.innerHTML += `   <div class="repositories section ">
                                             <h2>Repositorios</h2>
                                             <ul>${repositoriesItens}
                                             </ul>
                                        </div>`;
    }

    const eventsFilter = userInfo.events.filter(
      (event) => event.type === "PushEvent" || event.type === "CreateEvent"
    );

    let itensEvent = "";

    for (const event of eventsFilter) {
      if (event.type === "PushEvent") {
        const fullName = event.repo.name;
        const message = await getLastCommit(fullName);

        itensEvent += `<div class="event">
                           <p>${event.repo.name} - ${message}</p>
                           <div class="line"></div>
                           </br>
                       </div>`;
      } else if (event.type === "CreateEvent") {
        itensEvent += `<p>${event.repo.name} - Sem mensagem de commit</p>
                       </br>
                      <div class="line"></div>`;
      }
    }

    this.userProfile.innerHTML += `<div class="events">
                                    <h2>Ultimos Eventos:</h2>
                                      ${itensEvent}
                                  </div>`;
  },
};

export { screen };
