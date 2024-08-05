import { useSearch } from "../../hook"
import { HeroCard } from "./HeroCard"


export const HeroResults = () => {

    const {showError, showSearch, q, heroes} = useSearch()

    return (
        <div className="col-7">
            <h4>Results</h4>
            <hr />
            
            <div className="alert alert-primary  animate__animated animate__fadeIn"
                style={ { display : showSearch ? '' : 'none' } }>
                Search a hero
            </div>    

            <div className="alert alert-danger animate__animated animate__fadeIn"
                style={ { display : showError ? '' : 'none' } }>
                No hero found with <b>{ q }</b> 
            </div>

            {
            heroes.map(hero => (
                <HeroCard key={ hero.id } hero={ hero }/>                    
            ))
            }

        </div>
    )
}
