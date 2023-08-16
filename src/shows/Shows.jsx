import { useLoaderData, Link } from "react-router-dom"
import supabase from "../Auth/supabase"
import { useEffect, useState } from "react"
import { useStateContext } from "../UseContext/UseContext"
import FavouritesShow from "./favourites"

export default function Shows(){

    const [ fetchError, setfetchError ] = useState(null)
    const { userId, user, setFavouritesState, favouritesState } = useStateContext()

    const shows = useLoaderData()

    /* These are the different options e.g most played.. */
    const mostPlayed = shows.slice(10, 20)
    const favourites = favouritesState

    /* these truncate the title */
    function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
          return text;
        }
        const truncated = text.substr(0, maxLength);
        return truncated.substr(0, Math.min(truncated.length, truncated.lastIndexOf(" "))) + " ";
    }

    useEffect(() => {
        if(userId){
            const fetchData = async () => {
                try {
                    const {data, error } = await supabase
                        .from('podcast4real')
                        .select()
                        .eq('user__id', userId)

                        if(error){
                            setfetchError(error)
                            setFavouritesState(null)
                        }else{
                            setFavouritesState(data)
                            setfetchError(null)
                        }
                }catch(error){
                    console.log(error)
                }
            }
            fetchData()
        }
    })

    function slideShow(title, mapOver ,titleStyle){
        return(
            <>
                <h5 className={titleStyle}>{title}</h5>
                <div className="show">
                    
                    {  
                        mapOver.map((show) => {
                            return (
                                <Link to={show.id} key={show.id} className="each-show">
                                    
                                    <img className="img-show" src={show.image}></img>
                                    <p>{show.shows}</p>
                                    <h6 style={{paddingTop: "6%"}}>{truncateText(show.title , 15)}</h6>
                                </Link>
                            )
                        })
                    }
                </div>
            </>
        )
    }

    return (
        <>
            {
                user ? <div>
                    {slideShow("Most Played", mostPlayed, "most-played" )}
                    {favourites && <FavouritesShow
                        mapOver = {favourites.slice(0, 10)}
                    />}
                </div> : <Link to='/login'>User not found Please Log in</Link>
            }
        </>
    )
}

export const Showsloader = async () => {
    const res = await fetch('https://podcast-api.netlify.app')
    return res.json()
}