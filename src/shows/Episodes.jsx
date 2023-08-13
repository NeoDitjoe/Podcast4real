import { NavLink, useLoaderData } from "react-router-dom"
import { useStateContext } from "../UseContext/UseContext"
import { useEffect } from "react"

export default function Episodes(){

    const episode = useLoaderData()
    const { episodesContext, setPlayAudio, setPlayAudioTitle } = useStateContext()
    
    return (
        <>
            {
                episodesContext.episodes.map((episode) => {
                    return (
                        <div key={episode.episode}>
                            <p>{episode.title}</p>

                            <p onClick={() => {
                                setPlayAudio(null)

                                setTimeout(() => {
                                    setPlayAudioTitle(episode.title)
                                    setPlayAudio(episode.file)
                                }, 900);
                            }}>Play</p>
                        </div>
                    )
                })
            }
        </>
    )
}