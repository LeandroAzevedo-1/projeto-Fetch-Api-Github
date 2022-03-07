import {baseUrl} from '/src/scripts/variables.js'

// busca o perfil pelo nome do usuário 
async function  getUser(userName){
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
}

export {getUser}