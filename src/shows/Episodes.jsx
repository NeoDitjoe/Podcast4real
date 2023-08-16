import { useLoaderData } from "react-router-dom"
import { useStateContext } from "../UseContext/UseContext"
import { useEffect } from "react"
import logo from '../assets/logo.png'
import supabase from "../Auth/supabase"

export default function Episodes(){

    const episode = useLoaderData()
    const { episodesContext, setPlayAudio, setPlayAudioTitle, showsContext } = useStateContext()
    {console.log(Object.entries(episodesContext.episodes))}
   
    return (
        <>
            
            <div style={{background: 'transparent',padding:'3%', zIndex:'40px', textAlign:'center'}}>
                <img src={episodesContext.image} alt="cover-art" style={{filter: "blur(40px)", width: '60%', zIndex:'-10px'}}/>

                <img src={episodesContext.image} alt="cover-art" style={{ width: '42%'}}/>
                <h2 style={{color:"white", background: 'transparent'}}>{episodesContext.title}</h2>
                <p style={{ background:'transparent', color:'white', fontSize:'80%'}}><img src={logo} style={{ background:'transparent', width:'13%'}}></img> podcast4real</p>
            </div>

            {
                episodesContext.episodes.map((episode) => {
                    return (    
                        <div key={episode.episode} className="episodes">
                            <div className="episode-title" 
                                    onClick={() => {
                                        setPlayAudio(null)
                                        setPlayAudioTitle(null)

                                        setTimeout(() => {
                                            setPlayAudioTitle(episode.title)
                                            setPlayAudio(episode.file)
                                        }, 1000);
                                    }}>

                                <p>{episode.episode}</p>
                                <p>{episode.title}</p>
                            </div>

                            <button 
                                style={{background:'orange'}} 
                                onClick={() => {

                                    const addfavourite = async () => {
                                        const { data, error} = await supabase
                                            .from('podcast4real')
                                            .insert({
                                                title: episode.title,
                                                audio: episode.file,
                                                image: episodesContext.image,
                                                shows: showsContext.title,
                                                // user__id:
                                            })
                                    }

                                    addfavourite()
                                }}

                            ><svg style={{background:'orange'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path></svg></button>
                        </div>
                    )
                })
            }
        </>
    )
}