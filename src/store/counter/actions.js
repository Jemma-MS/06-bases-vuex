import getRandomInt from "../../helpers/getRandomInt"

export const incrementRandomInt = async ({ commit }) => {
            
    //desactiva el boton por dos segundos
    commit('setLoading', true )

    const randomInt = await getRandomInt()

    commit('incrementBy', randomInt)
    //activa el boton
    commit('setLoading', false )

}