import { initialState, State } from "../../types"

export const init = () : State => {
    const userFromLocal = localStorage.getItem( 'user' )
    
    if( userFromLocal ) {
        const user = JSON.parse( userFromLocal ) 

        return {
            logged : true,
            user
        }
    } else {
        return initialState
    }
}