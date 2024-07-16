import { baseUrl , quantidadeDeRepositorios } from "/src/scripts/variables.js";

async function loadRepos(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${quantidadeDeRepositorios}`);

    if (!response.ok){
        throw new Error(`GitHub API retornou o status ${response.status}`);
    }
    
    return await response.json();

}

export { loadRepos }