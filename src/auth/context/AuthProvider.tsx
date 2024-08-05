import { useReducer } from "react"
import { Action, Props} from "../../types"
import { AuthContext, authReducer } from "./"
import { init } from "../../heroes/helpers/ReducerInit";

export const AuthProvider = ({children} : Props) => {

    const [ state, dispatch ] = useReducer( authReducer, {}, init );
    

    const login = (name : string)  => {

        const action : Action = {
            type : '[Auth] Login',
            payload : name
        }
        
        localStorage.setItem( 'user', JSON.stringify( action.payload ) )

        dispatch(action)
    }

    const logout = () => {
        const action : Action = {
            type: '[Auth] Logout',
            payload : ''
            
        }

        localStorage.removeItem('user');
        dispatch(action)
    }

    return (
        <AuthContext.Provider value={{ 
            state,  
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
