//Criar as propriedades que vem no github
 //inicializar como vazio, porque vou buscar da api Github
const user = {
    avatarUrl:'', 
    name:'',
    bio:'', 
    userName:'', 
    repositories: [], 

    //1º metedo, vai pegar as informções e setar no lugar vazios
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
    },
    //2º meteto para setar os repositórios
    setRepositories(repositories){
        this.repositories = repositories
    }

}

export { user } //exportar para o arquivo index.js