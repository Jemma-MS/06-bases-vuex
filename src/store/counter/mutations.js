


export const increment = ( state ) => {
    state.count ++
    state.lastMutation = 'increment'
}

export const incrementBy = ( state, val ) => {
    state.count += val
    state.lastMutation = 'incrementBy ' + val
    state.lastRandomInt = val
}

//se encarga de activar o desactivar el botón
export const setLoading = ( state, val ) => {
    state.isLoading =  val
    state.lastMutation = 'setLoading' + val
}