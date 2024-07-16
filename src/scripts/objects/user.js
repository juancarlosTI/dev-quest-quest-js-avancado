const user = {
    avatarUrl:'',
    name:'',
    userName:'',
    following:'',
    followers:'',
    repositories:[],
    events:[],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.userName = gitHubUser.login
        this.bio = gitHubUser.bio
        this.following = gitHubUser.following
        this.followers = gitHubUser.followers
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
    setEvents(events){
        this.events = events
    }
}

export { user }