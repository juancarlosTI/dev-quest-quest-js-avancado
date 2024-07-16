import { baseUrl } from "/src/scripts/variables.js";

async function loadUser(userName){
    const response = await fetch(`${baseUrl}/${userName}`)

    if (!response.ok){
        throw new Error(`GitHub API retornou o status ${response.status}`);
        
    }
    
    return await response.json();

}

export { loadUser }