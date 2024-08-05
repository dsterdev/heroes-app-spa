import { Navigate, Route, Routes } from "react-router-dom"
import NavBar from "../../ui/components/NavBar"
import { MarvelPages, DCPages, SearchPages, HeroPages } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
        <NavBar/>

        <div className="container">
            <Routes>
                <Route path="dc" element = { <DCPages/> }/>
                <Route path="marvel" element = { <MarvelPages/> }/>

                <Route path="search" element = { <SearchPages/> }/>
                <Route path="hero/:heroId" element = { <HeroPages/> }/>
                
                <Route path="/" element = { <Navigate to="/dc"/> }/>

            </Routes>
        </div>
    
    </>
  )
}
