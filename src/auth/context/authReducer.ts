import { Action, State } from "../../types";


export const authReducer = ( state : State, action : Action ) => {

    switch (action.type) {
        case '[Auth] Login':
            return {
                ...state,
                logged : true,
                user : action.payload
            }
        
        case '[Auth] Logout':
            return {
               ...state,
               logged : false
            }
    
        default:
            return state;
    }
}