import { useEffect, useState } from "react"
import { NavLink, useLoaderData, useParams } from "react-router-dom"
import { useStateContext } from "../UseContext/UseContext"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ShowDetails() {
    const { setEpisodesContext } = useStateContext()
    const [ collapseDescription, setCollapseDescription] = useState(false)
    const [ showMore, setShowMore] = useState(false)

    const shows = useLoaderData()
    const seasons = shows.seasons

    return (
        <>
            <h3>Description</h3>

            <p className="show-description">{showMore ? shows.description : shows.description.substring(0, 250)}
                    <NavLink onClick={() => setShowMore(!showMore)}>{showMore ? 'showless' : 'showmore'} </NavLink>
            </p>

            <h3>Seasons</h3>
            
            {
                seasons.map((season) => {
                    
                    return(
                        <div key={season.season}>
                            <NavLink to={'/shows/episode'} onClick={() => setEpisodesContext(season)}>
                                
                                <h4>{season.title}</h4>
                                <img className="img-season" src={season.image}/>
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