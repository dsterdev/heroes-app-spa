import { BaseSyntheticEvent } from "react"

export type Publlisher = {
    publisher : string
}

export type Hero = { 
    hero : {
        id: string
        superhero: string
        publisher: string
        alter_ego: string
        first_appearance: string
        characters: string
    } 
}

export type Charter = {
    alter_ego: string
    characters: string
}

export type Value = {
    searchText ?: string
    name ? : string
}

export type Input = BaseSyntheticEvent;

export type Props = {
    children : JSX.Element | JSX.Element []
}


export type User = string

export type State = {
    logged : boolean
    user ?: User | null;
}

export type Action = {
    type : string
    payload : string 
}

export const initialState : State = {
    logged : false,
    user : null
}



