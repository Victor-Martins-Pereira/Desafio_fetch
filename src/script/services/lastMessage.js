async function getLastCommit(fullName) {
  const response = await fetch(
    `https://api.github.com/repos/${fullName}/commits`
  );
  const commits = await response.json();
  return commits[0]?.commit?.message || "Sem mensagem de commit";
}

export { getLastCommit };
