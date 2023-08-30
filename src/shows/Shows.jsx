import { useLoaderData, Link } from "react-router-dom"
import supabase from "../Auth/supabase"
import { useEffect, useState, useMemo } from "react"
import { useStateContext } from "../UseContext/UseContext"
import FavouritesShow from "./favourites"
import ErrorMessage from "../ErrorMessage/ErrorMessage"

export default function Shows(){

    const [ fetchError, setfetchError ] = useState(null)
    const { userId, user, setFavouritesState, favouritesState } = useStateContext()

    const shows = useLoaderData()

    const sliceShows = useMemo (() => {
        try {
            return{ 
                mostPlayed: shows.slice(40, 50),
                favourites: favouritesState,
                recommended: shows.slice(10, 20),
                sortAZ : shows.sort((a, b) => a.title.localeCompare(b.title)),
                sortZA : shows.sort((a, b) => b.title.localeCompare(a.title))
            }
            
        } catch (error) {
            return <ErrorMessage/>
        }
    }, [shows, favouritesState])

    const sortLatest = useMemo (() => {
        try {
            return{ 
                latest : shows.sort((a, b) => b.updated.localeCompare(a.updated)).slice(0, 15)
            }
        } catch (error) {
            return <ErrorMessage/>
        }
    }, [shows])

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
    }, [])

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
                                        
                                        <img className="img-show" src={show.image} loading="lazy"></img>
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

    const [ results , setResults ] = useState(null)
    const [ resultsSlide , setResultSlide ] = useState(false)

    
    const [value, setValue] = useState("");

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();

      setResultSlide(true)
      const filtered = shows.filter((item) => {
          return (
              item.title
              .toLowerCase()
              .includes(
                value
                .toLowerCase()
              ))
      })

      setResults(filtered)
      setValue('')
    };

    const search = useMemo(() => {
        return (
            <>
            <form onSubmit={handleSubmit}>

                <input value={value} required onChange={handleChange} style={{ border:'solid 1px gray', color:'white'}}/>
                <input type="submit" value="Submit"  style={{background: 'gray', color:' white', paddingLeft: '5px', paddingRight: '5px'}}/>
            </form>
          
          </>
        )
    })

    return (
        <>
            {
                user ? 
                <div>
                    {search}    
                    {results && resultsSlide && <> <button onClick={() => setResultSlide(false)} style={{background: 'gray', color:' white' , paddingLeft: '5px', paddingRight: '5px'}}>Close search</button> { slideShow(`Search results ${value}`, results, "most-played" )} </> }

                    {slideShow("Most Played", sliceShows.mostPlayed, "most-played" )}

                    {sliceShows.favourites && <FavouritesShow
                        mapOver = {sliceShows.favourites}
                    />}

                    {slideShow("Recommended", sliceShows.recommended, "most-played-opps" )}

                    {slideShow("Recents",  sortLatest.latest , "most-played-opps" )}

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

