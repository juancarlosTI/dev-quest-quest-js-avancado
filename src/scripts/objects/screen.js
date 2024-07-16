const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML =  `<div class="info">
                         <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                         <div class="data">
                             <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                             <p>${user.bio ?? 'Não possui bio cadastrada'}</p>
                             <p><br>Seguindo ${user.following} <br> Seguidores ${user.followers}</p> 
                         </div>
                      </div>
                     `
        let reposItens = ''
        user.repositories.forEach(repo => reposItens += `<li>
            <a href="${repo.html_url}" target="_blank">${repo.name}
            <div class="repo-info">
                <p>🍴${repo.forks_count}</p>
                <p>⭐${repo.stargazers_count}</p>
                <p>👀${repo.watchers_count}</p>
                <p>👩‍💻${repo.language}</p>
            </div>
            </a>
            </li>`)
        
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${reposItens}</ul>
                                           </div>`
        }


        let eventsItens = ''
        for( let i=0 ; i < user.events.length; i++){
                        if (user.events[i].type === "PushEvent"){
                                eventsItens += `
                                <li><p><b>${user.events[i].repo.name}</b></p><p> -${user.events[i].payload.commits[0].message}</p></li>
                               `
            } else if(user.events[i].type === "CreateEvent"){
                eventsItens += `
                                <li><p><b>${user.events[i].repo.name}</b></p>  <p> - "Sem mensagem de commit"</p></li>
                               `
            }
        }
        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="eventos section">
                                            <h2><b>10 Últimos eventos</b></h2>
                                            <br>
                                            <ul>${eventsItens}</ul>
                                           </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }