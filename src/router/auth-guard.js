
const isAuthenticatedGuard = (to, from, next) => {
    //console.log({to, from, next})
    return new Promise(() => {
        const random = Math.random() * 100

        if(random > 50){
            console.log('esta autenticado')
            next()
        }else{
            console.log('bloqueado por es isAuthenticatedGuard', random)
            next({name: 'pokemon-home'})
        }
    })
}

export default isAuthenticatedGuard