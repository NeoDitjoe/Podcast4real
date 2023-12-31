import { useStateContext } from "../UseContext/UseContext"
import { Link } from "react-router-dom"
import Shows from "./Shows";

export default function FavouritesShow({mapOver}){

    const { setAudioShow, setPlayAudioImage, setPlayAudioTitle, setPlayAudio } = useStateContext()

    /* these truncate the title */
    function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        }
        const truncated = text.substr(0, maxLength);
        return truncated.substr(0, Math.min(truncated.length, truncated.lastIndexOf(" "))) + " ";
    }

    return(
        <>
            <h5 className="most-played-opps">favourites</h5>
            <div className="show">
                
                {  
                    mapOver.map((show) => {
                        return (
                            <div key={show.id}>
                                <Link to={show.id} className="each-show" 
                                    onClick={() => {
                                        setPlayAudio(null)
                                        setPlayAudioTitle(null)
                                        setPlayAudioImage(null)
                                        setAudioShow(null)

                                        setTimeout(() => {
                                            setPlayAudioTitle(show.title)
                                            setPlayAudio(show.audio)
                                            setPlayAudioImage(show.image)
                                            setAudioShow(show.shows)
                                        }, 200);
                                    }}>
                                    <img className="img-show" src={show.image} loading="lazy"></img>
                                    <div className="shows-scroll">
                                        <p className="shows-scroll-text">{show.shows} </p> 
                                    </div>
                                    <p>{new Date(show.created_at).toString().slice(3, 21)}</p>
                                    <h6 style={{paddingTop: "0"}}>{truncateText(show.title , 15)}</h6>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}