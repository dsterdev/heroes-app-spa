import queryString from "query-string"
import { useLocation, useNavigate } from "react-router-dom"
import { getHeroByName } from "../heroes"
import { useForm } from "./useForm"
import { FormEvent } from "react"

export const useSearch = () => {
  
    const navigate = useNavigate()
    const { search } = useLocation()
    
    //obtencion del heroe por la query
    const { q  = '' } = queryString.parse( search )
    const heroes = getHeroByName(q as string)

    //Para metodos
    const showSearch = ( q?.length === 0 );
    const showError = ( q?.length as number  > 0 ) && heroes.length === 0;

    //custom hook para los eventos del input
    const { searchText, onInputChangue } = useForm({
        searchText: q as string
      })
  
      const onSubmit = (event : FormEvent) => {
        event.preventDefault();

        navigate(`?q=${ searchText }`)
      }

    return {
        showSearch,
        showError,
        q,
        heroes,
        searchText,
        onInputChangue,
        onSubmit
    }
}
