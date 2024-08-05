import { useState } from "react"
import { Input, Value } from "../types"

export const useForm = (initialValue : Value) => {
    
    const [formState, setFormState] = useState(initialValue)
    const { searchText } = formState

    const onInputChangue = ({target} : Input) => {
        const {name, value} = target;
        setFormState ({
            ...formState,
            [name] : value
        })

    }

    const resetForm = ()=>{
        setFormState(initialValue)
    }

    return {
        formState,
        onInputChangue,
        resetForm,
        searchText
        
    }
}