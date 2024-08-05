import { useSearch } from "../../hook"

export const HeroForm = () => {

    const {onInputChangue, onSubmit, searchText} = useSearch()

    return (
        <div className="col-5">
            <h4>Searching</h4>
            <hr />
            
            <form onSubmit={ onSubmit }>
                <input 
                type="text"
                placeholder="Search a hero" 
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChangue }
                />
                
                <button
                className="btn btn-outline-primary mt-2"
                >
                Search
                </button>
                
            </form>
        </div>
    )
}
