import { useMemo } from "react"
import { Publlisher } from "../../types"
import { getHeroByPublicher } from "../helpers"
import { HeroCard } from "./index"

export const HeroLIst = ({publisher} : Publlisher) => {

    const heroes =  useMemo( ()=> getHeroByPublicher( publisher ), [ publisher ] ) 


    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(hero => (
                    <HeroCard hero={ hero } key={hero.id}/>
                ))
            }
        </div>
    )
}
