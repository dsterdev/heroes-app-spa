import { createContext } from "react";
import { State } from "../../types";


export const AuthContext = createContext<
{
    state : State,
    login : (name : string) => void
    logout : () => void 
}>
(
    {
    state : {
        logged : false
    },
        login : () => {},
        logout : () => {}
    }
)