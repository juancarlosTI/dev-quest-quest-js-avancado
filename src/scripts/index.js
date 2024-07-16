import { loadUser } from "./services/user.js";
import { loadRepos } from "./services/repositories.js";

import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";
import { loadEvents } from "./services/events.js";

//Variáveis

const botaoBuscar = document.getElementById('btn-search');
botaoBuscar.addEventListener('click', () => {
    const nomeUsuario = document.getElementById('input-search').value;
    if(validadeEmptyInput(nomeUsuario)) return
    getUserData(nomeUsuario);
});

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed){
        if(validadeEmptyInput(userName)) return
        getUserData(userName);
    }
});


//Funções

function validadeEmptyInput(userName){
    if (userName.length === 0){
        alert('Preencha o campo com o nome do usuário do GitHub')
        return true
    }
}



async function getUserData(userName){
    const usuario = await loadUser(userName)
    const repoUsuario = await loadRepos(userName)
    const eventsUsuario = await loadEvents(userName)

    

    // if (usuario.message === "Not Found"){
    //      screen.renderNotFound()
    //      return

    //      //O GitHub não retorna mais o objeto com a propriedade message: "Not Found"
    
    //if (!usuario){
        //screen.renderNotFound()
    //}
            //Tentei utilizar o "!usuario" para tentar acionar um gatilho que possibilitasse que a tela "Usuário não encontrado" aparecesse.
    // }

    user.setInfo(usuario)
    user.setRepositories(repoUsuario)
    user.setEvents(eventsUsuario)
    
    screen.renderUser(user)


}



