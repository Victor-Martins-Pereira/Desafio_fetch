# 🔍 GitHub Fetch Explorer

Projeto desenvolvido durante o curso de Front-End com o objetivo de praticar o uso da **Fetch API** no JavaScript, explorando dados disponibilizados pela **API do GitHub**.  
A aplicação permite pesquisar um usuário e exibe suas principais informações de forma clara, organizada e visualmente agradável.

---

## 🚀 Funcionalidades

- Busca de usuário na API do GitHub
- Exibição de:
  - Foto de perfil
  - Nome
  - Biografia
  - Quantidade de seguidores
  - Lista de repositórios
  - Informações de cada repositório (forks, stars, views, linguagem principal e outros)
- Exibição dos **últimos commits** e eventos relevantes do usuário
- Componente “Últimos Eventos”, mostrando:
  - Nome do repositório
  - Mensagem do último commit
- Validações:
  - Verificar se o campo de busca não está vazio
  - Ação da tecla **Enter** para disparar a pesquisa

---

## 🧩 Aprendizados

Durante o desenvolvimento, aprofundei meu conhecimento em:

- ✔️ **Funções assíncronas (`async/await`)**
- ✔️ Trabalho com múltiplas requisições usando **Fetch API**
- ✔️ Manipulação de dados vindos da API
- ✔️ Refatoração de código para torná-lo mais limpo e legível
- ✔️ Boas práticas de validação de input do usuário
- ✔️ Lidar com eventos do teclado (`keydown`, tecla Enter)

O maior desafio foi construir o componente **“Últimos Eventos”**, pois envolveu:

- Fazer uma requisição para pegar os eventos do usuário
- Identificar o repositório do evento
- Fazer outra requisição para buscar o último commit daquele repositório
- Exibir tudo de forma organizada na interface

Essa parte exigiu bastante pesquisa, e me ajudou a entender melhor como estruturar requisições encadeadas.

---

## 📁 Repositório

🔗 **Acesse o código completo:**  
[https://github.com/Victor-Martins-Pereira/Desafio_fetch](https://github.com/Victor-Martins-Pereira/Desafio_fetch)

---

## 👨‍💻 Demonstração

Você pode ver uma versão online do projeto **aqui**: [Fetch GitHub - Desafio DevQuest](https://victor-martins-pereira.github.io/Desafio_fetch/)

---

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Fetch API
- API pública do GitHub

---

## 📌 Status do Projeto

- 💡 Abertos a melhorias e novas funcionalidades

---

## 💻 Autor

**Desenvolvido por [Victor Martins Pereira](https://www.instagram.com/victor_martins.p/)**

---

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/victor-martins-pereira-dev/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Victor-Martins-Pereira)
