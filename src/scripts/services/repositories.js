import {baseUrl, repositoriesQuantity} from '/src/scripts/variables.js'

// Busca os repositórios 
async function  getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}

export{ getRepositories }