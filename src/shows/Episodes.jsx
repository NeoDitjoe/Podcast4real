import { useLoaderData } from "react-router-dom"
import { useStateContext } from "../UseContext/UseContext"
import { useEffect, useState } from "react"
import logo from '../assets/logo.png'
import supabase from "../Auth/supabase"
import star from '../assets/star.png'
import starred from '../assets/starred.png'

export default function Episodes(){

    const episode = useLoaderData()
    const { userId, episodesContext, setPlayAudio, setPlayAudioTitle, showsContext, favouritesState } = useStateContext()


    function HandleAddingToFavourites(favEpisode) {
        return (
            favouritesState.some((episode) =>  episode.title === favEpisode)
        )
    }
    useEffect(() => {
        HandleAddingToFavourites()
    })
   
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
                  const [ starColor, setStarColor ] = useState(false)
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
                                style={{background:'transparent', border: "transparent"}} 
                                    onClick={() => {

                                        setStarColor(!starColor)
                                        const addfavourite = async () => {
                                            const { data, error} = await supabase
                                                .from('podcast4real')
                                                .insert({
                                                    title: episode.title,
                                                    audio: episode.file,
                                                    image: episodesContext.image,
                                                    shows: showsContext.title,
                                                    user__id: userId
                                                })
                                        }

                                        const removeFavs = async() => {
                                            const { data, error } = await supabase
                                              .from('podcast4real')
                                              .delete()
                                              .eq('id', userId)
                              
                                            if(error){
                                              console.error(error)
                                            } else{
                                              console.log(data)
                                            }
                                          }

                                          addfavourite()
                                    }}

                                    >{ starColor ?  <img src={starred} style={{ width: '70%'}}/> : HandleAddingToFavourites(episode.title)  ? <img src={starred} style={{ width: '70%'}} /> : <img src={star} style={{ width: '70%'}}/> } 
                            </button>
                        </div>
                    )
                })
            }
        </>
    )
}