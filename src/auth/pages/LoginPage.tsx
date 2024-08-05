import {  useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context"
import { useForm } from "../../hook"

export const LoginPage = () => {
  
  const { formState , onInputChangue} = useForm({
    name : ''
  })

  const { name } = formState
  
  const navigate = useNavigate()
  const { login } = useContext( AuthContext )

  const onLogin = ()=>{

    navigate('/marvel', {
      replace : true 
    })

    login(name as string)
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />


      <form onSubmit={ onLogin }>
        <input 
        type="text"
        placeholder="Insert your username" 
        className="form-control"
        name="name"
        autoComplete="off"
        value={ name  }
        onChange={ onInputChangue }
        />
        
        <button
        className="btn btn-outline-primary mt-2"
        >
        Login
        </button>
      </form>

    </div>
  )
}
