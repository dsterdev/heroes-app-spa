import { Link } from "react-router-dom"
import { Hero, Charter } from "../../types"


const HeroByBio = ( { alter_ego, characters } : Charter ) =>{
  return (alter_ego === characters) 
    ? <></>
    : <p>{ characters }</p> 
}

export const HeroCard = ({hero} : Hero) => {


  const img = `/${hero.id}.jpg`

  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">
          <div className="row no gutters">

                <div className="col-4 " >
                  <img src= { img } alt={ hero.superhero } className="card-img"/>
                </div>

                <div className="col-8">
                  <div className="car-body">
                        <h5>{ hero.superhero }</h5>
                        <p className="card-text">{ hero.alter_ego }</p>

                        
                        <HeroByBio alter_ego={ hero.alter_ego } characters={ hero.characters }/>

                        <p className="card-text">
                           <small className="text-muted">{ hero.first_appearance }</small>
                        </p>

                        <Link to={`/hero/${ hero.id }`}>
                            Mas...                        
                        </Link>
                  </div>
                </div>
          </div>
        </div>
    </div>

  )
}
