import { useEffect, useState } from "react"
import { NavLink, Outlet, useLoaderData, useParams } from "react-router-dom"
import { useStateContext } from "../UseContext/UseContext"
import 'bootstrap/dist/css/bootstrap.min.css'
import supabase from "../Auth/supabase"

export default function ShowDetails() {
    const { setEpisodesContext, setShowsContext, userId } = useStateContext()
    const [ showMore, setShowMore] = useState(false)

    const shows = useLoaderData()
    const seasons = shows.seasons
    const m= "season.episodes"

    return (
        <>

            <h5 style={{color: 'white'}}>Genres</h5>

                <p>{shows.genres.slice(2).join(', ')}</p>
            <h5 style={{color: 'white'}}>Description</h5>

            <p className="show-description">{showMore ? shows.description : shows.description.substring(0, 250)}
                    <NavLink onClick={() => setShowMore(!showMore)}>{showMore ? 'showless' : 'showmore'} </NavLink>
            </p>

            

            <h5 style={{color: 'white'}}>Seasons</h5>
            
            {
                seasons.map((season) => {
                    
                    return(
                        <div key={season.season}>
                            <NavLink to={/* userId ?  */"episodes" /* : '/' */} style={{textDecoration: 'none'}}>
                                
                                {/* {console.log(season.episodes)} */}
                                <h6 style={{color:'orange', textDecoration: 'none'}}>{season.title}</h6>
                                <img className="img-season" src={season.image} onClick={() => {
                                    setEpisodesContext(season)
                                    setShowsContext(shows)}}/>
                            </NavLink> 

                        </div>
                    )
                })
            }
        </>
    )
}

export  const ShowsDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch(`https://podcast-api.netlify.app/id/${id}`)
    return res.json()
}