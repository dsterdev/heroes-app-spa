import { useContext } from "react"
import { Props } from "../types"
import { AuthContext } from "../auth"
import { Navigate } from "react-router-dom"

 

 
 export const PublicRouter = ({children} : Props) => {

    const { state } = useContext( AuthContext )

   return (!state.logged) 
   ? children 
   : <Navigate to= "/dc"/>
 }
 