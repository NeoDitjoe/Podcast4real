import { useLoaderData, Link } from "react-router-dom"

export default function Shows(){
    const shows = useLoaderData()

    return (
        <div className="show">
            {
                shows.map((show) => {
                    return(
                        <Link to='/' key={show.id}>
                            <h6>{show.title}</h6>
                            <img className="img-show" src={show.image}></img>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export const Showsloader = async () => {
    const res = await fetch('https://podcast-api.netlify.app/shows')
    return res.json()
}