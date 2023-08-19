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
        HandleAddingToFavourites()
    })

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

                                                    >{  starColor ?  <img src={starred} style={{ width: '70%'}}/> : HandleAddingToFavourites(episode.title)  ? <img src={starred} style={{ width: '70%'}} /> : <img src={star} style={{ width: '70%'}}/> } 
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