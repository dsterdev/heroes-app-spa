import { heroes } from "../data"

 export const getHeroByName = (name : string) => {

    name = name.toLocaleLowerCase().trim()
    
    if(name.length === 0){
        return []
    }

    return heroes.filter(hero => {
        if(hero.superhero.toLocaleLowerCase().trim().includes(name)){
            return hero
        }
    })

}
