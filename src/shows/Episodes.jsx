import { Link, useLoaderData } from "react-router-dom"
import { useStateContext } from "../UseContext/UseContext"
import { useEffect, useState } from "react"
import logo from '../assets/logo.png'
import supabase from "../Auth/supabase"
import star from '../assets/star.png'
import starred from '../assets/starred.png'
import ScrollToTop from "../scrollToTop/ScrollToTop"

export default function Episodes(){

    // const episodee = useLoaderData()
    const { setAudioShow, userId, episodesContext, setPlayAudioImage, setPlayAudio, setPlayAudioTitle, showsContext, favouritesState } = useStateContext()
    const [ openedSeason, setOpenedSeason ] = useState(null)

    function HandleAddingToFavourites(favEpisode) {  
        return (
                favouritesState && favouritesState.some((episode) =>  episode.title === favEpisode)
        )
    }

    useEffect(() => {
        if(userId){
            const fetchData = async () => {
                try {
                    const {data, error } = await supabase
                        .from('recentSeason')
                        .select()
                        .eq('user_id', userId)

                        if(error){
                            console.log(error)
                            setOpenedSeason(null)
                        }else{
                            setOpenedSeason(data)
                        }
                }catch(error){
                    console.log(error)
                }
            }
            fetchData()
            
        }
    }, [openedSeason])

    return (

        <>
        
            { userId ? episodesContext && 
            
                <>
                    <ScrollToTop/>
                    {   episodesContext ?
                        <>

                            <div className="image-titles">
                                <div className="episode-top"><img src={episodesContext.image} alt="cover-art" className="img-blur"/><img src={episodesContext.image} alt="cover-art" className="img-episode" /></div>

                                <div className="content">
                                    <h1 className="episode-title-s">{episodesContext.title}</h1>
                                    <p style={{ background:'transparent', color:'white', fontSize:'80%'}}><img src={logo} style={{ background:'transparent', width:'19%'}}></img> podcast4real</p>
                                </div>
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
                                                        setPlayAudioImage(null)
                                                        setAudioShow(null)

                                                        setTimeout(() => {
                                                            setPlayAudioTitle(episode.title)
                                                            setPlayAudio(episode.file)
                                                            setPlayAudioImage(episodesContext.image)
                                                            setAudioShow(episodesContext.title)
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
                                                                .upsert({
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
                                                            .eq('user__id', userId)
                                                            .eq('title', episode.title)
                                            
                                                            if(error){
                                                            console.error(error)
                                                            } else{
                                                            console.log(data)
                                                            }
                                                        }

                                                        HandleAddingToFavourites(episode.title) ?  removeFavs()  : addfavourite() 
                                                    }}

                                                    >{  starColor ?  <img src={starred} style={{ width: '20px',backgroundColor:'transparent' }}/> : HandleAddingToFavourites(episode.title)  ? <img src={starred} style={{ width: '20px', backgroundColor:'transparent'}} /> : <img src={star} style={{ width: '20px', backgroundColor:'transparent'}}/> } 
                                            </button>
                                        </div>
                                    )
                                })
                            }
                        
                        </> : <Link to='.'>Back</Link>
                    }
                </> : <Link to='/login'>User not found Please Log in</Link> }
        </>
 
    )
}