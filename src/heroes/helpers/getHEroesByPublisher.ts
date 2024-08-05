import { heroes } from "../data";



export const getHeroByPublicher = ( publisher : string) => {
    const validPublishers  = ['DC Comics', 'Marvel Comics']

    if (!validPublishers.includes( publisher )) {
        throw new Error (`${publisher} is not valid`)
    }
        
    return heroes.filter(hero => {
        if(hero.publisher === publisher){
            return hero
        }
    })
    

   
}

