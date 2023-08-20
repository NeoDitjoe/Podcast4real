import { useLoaderData, Link } from "react-router-dom"
import supabase from "../Auth/supabase"
import { useEffect, useState } from "react"
import { useStateContext } from "../UseContext/UseContext"
import FavouritesShow from "./favourites"
import ErrorMessage from "../ErrorMessage/ErrorMessage"

export default function Shows(){

    const [ fetchError, setfetchError ] = useState(null)
    const [ sortAphabetically, setSortAphabetically] = useState(false)
    const { userId, user, setFavouritesState, favouritesState } = useStateContext()

    const shows = useLoaderData()

    function sliceShows(){
        try {
            return{ 
                mostPlayed: shows.slice(40, 50),
                favourites: favouritesState,
                recommended: shows.slice(40, 60),
                sortAZ : shows.sort((a, b) => a.title.localeCompare(b.title)),
                sortZA : shows.sort((a, b) => b.title.localeCompare(a.title))
            }
            
        } catch (error) {
            return <ErrorMessage/>
        }
    }

    function sortAZ(){
        try {
            return{ 
                sortAZ : shows.sort((a, b) => a.title.localeCompare(b.title))
            }
        } catch (error) {
            return <ErrorMessage/>
        }
    }
    function sortZA(){
        try {
            return{ 
                sortZA : shows.sort((a, b) => b.title.localeCompare(a.title))
            }
        } catch (error) {
            return <ErrorMessage/>
        }
    }


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
                    return <ErrorMessage/>
                }
            }
            fetchData()
        }
    })

    function slideShow(title, mapOver ,titleStyle){
        try {
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
        } catch (error) {
            return <ErrorMessage/>
        }
    }


        return (
            <>
                {
                    user ? <div>
                        {slideShow("Most Played", sliceShows().mostPlayed, "most-played" )}
    
                        {sliceShows().favourites && <FavouritesShow
                            mapOver = {sliceShows().favourites}
                        />}
    
                        {slideShow("Recommended", sliceShows().recommended, "most-played-opps" )}
    
                        {slideShow(<button style={{color:'white'}} onClick={() => {setSortAphabetically(!sortAphabetically) }}>{sortAphabetically ?  'Arrange from A-Z': ' Arrange from Z-A'}</button>, sortAphabetically ? sortZA().sortZA  : sortAZ().sortAZ, "most-played-opps" )}
    
    
    
                    </div> : <Link to='/login'>User not found Please Log in</Link>
                }
            </>
        )

}

export const Showsloader = async () => {
    try {
        const res = await fetch('https://podcast-api.netlify.app')
        return res.json()
    } catch (error) {
        return <ErrorMessage/>
    }
}