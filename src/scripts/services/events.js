import { baseUrl , quantidadeDeEventos } from "/src/scripts/variables.js";

async function loadEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${quantidadeDeEventos}`);

    if (!response.ok){
        throw new Error(`GitHub API retornou o status ${response.status}`);
    }
    
    return await response.json();

}

export { loadEvents }