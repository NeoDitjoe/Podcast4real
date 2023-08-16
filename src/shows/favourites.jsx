import { useStateContext } from "../UseContext/UseContext"
import { Link } from "react-router-dom"
import Shows from "./Shows";

export default function SlideSho({mapOver}){

    const { setPlayAudioTitle, setPlayAudio } = useStateContext()

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
                            <Link to={show.id} key={show.id} className="each-show" onClick={() => {
                                        setPlayAudio(null)
                                        setPlayAudioTitle(null)

                                        setTimeout(() => {
                                            setPlayAudioTitle(show.title)
                                            setPlayAudio(show.audio)
                                        }, 200);
                                    }}>
                                
                                <img className="img-show" src={show.image}></img>
                                <p>{show.shows} <br></br>{new Date(show.created_at).toString().slice(3, 21)}</p>
                                <h6 style={{paddingTop: "0"}}>{truncateText(show.title , 15)}</h6>
                            </Link>
                        )
                    })
                }

            </div>
        </>
    )
}