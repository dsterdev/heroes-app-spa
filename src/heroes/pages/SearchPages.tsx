import { HeroForm } from "../components/HeroForm"
import { HeroResults } from "../components/HeroResults"

export const SearchPages = () => {


    return (
      <>
        <h1>Search</h1>
        <hr />
        <div className="row">
            
            <HeroForm/>

            <HeroResults/>

        </div>
        
      </>
    )
}
