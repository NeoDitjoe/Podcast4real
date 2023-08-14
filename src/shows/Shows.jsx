import { useLoaderData, Link } from "react-router-dom"
import { moviesData } from "../../data/movies"


export default function Shows(){
    const shows = useLoaderData()

    /* These are the different options e.g most played.. */
    const mostPlayed = shows.slice(10, 20)
    const favourites = shows.slice(30, 40)

    /* shows.slice(Math.floor(Math.random() * (shows.length - 4)), Math.floor(Math.random() * (shows.length - 4)) + 10) */

    /* these truncate the title */
    function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
          return text;
        }
        const truncated = text.substr(0, maxLength);
        return truncated.substr(0, Math.min(truncated.length, truncated.lastIndexOf(" "))) + " ";
      }

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
            {slideShow("Most Played", mostPlayed, "most-played" )}
            {slideShow("Trending", favourites, "most-played")}
        </>
    )
}

export const Showsloader = async () => {
    const res = await fetch('https://podcast-api.netlify.app')
    return res.json()
}