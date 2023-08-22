import { useEffect, useState } from "react";
import useSound from "use-sound"; 
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; 
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; 
import { IconContext } from "react-icons";
import { useStateContext } from "../UseContext/UseContext";
import starred from '../assets/starred.png'
import star from '../assets/starblack.png'
import supabase from "../Auth/supabase";

export function MusicPlayer({audio, title, image, show}){

    const { audioLayout, setAudioLayout, favouritesState, userId } = useStateContext()
    const [ starColor, setStarColor ] = useState(false)

    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound(audio);

        const playingButton = () => {
            if (isPlaying) {
                pause();
                setIsPlaying(false);
            } else {
                play();
                setIsPlaying(true);
            }
        }

        useEffect(() => {
            play();
            setIsPlaying(true);
    
            return () => {
                pause();
                setIsPlaying(false);
            };
        }, [play]);

        const [currTime, setCurrTime] = useState({
            min: "",
            sec: "",
        });
        
        const [seconds, setSeconds] = useState()

            const sec = duration / 1000;
            const min = Math.floor(sec / 60);
            const secRemain = Math.floor(sec % 60);
            const time = {
            min: min,
            sec: secRemain
        }
        

        useEffect(() => {
            const interval = setInterval(() => {
              if (sound) {
                setSeconds(sound.seek([]));
                const min = Math.floor(sound.seek([]) / 60);
                const sec = Math.floor(sound.seek([]) % 60);
                setCurrTime({
                  min,
                  sec,
                });
              }
            }, 1000);
            return () => clearInterval(interval);
          }, [sound]);

        function HandleAddingToFavourites(favEpisode) {  
            return (
                    favouritesState && favouritesState.some((episode) =>  episode.title === favEpisode)
            )
        }
        useEffect(() => {
            HandleAddingToFavourites()
        }, [])
                    

    return (
        <div>
            { audioLayout ? <img className= "blur" src={image}  /> : ''}
            <div className={ audioLayout ? "component" : "min-component"}>
                <h3 className={ audioLayout? "playing-now" : "min-playing-now"} onClick={() => setAudioLayout(!audioLayout)}>Playing Now</h3>
                <img className={ audioLayout ? "musicCover" : "min-musicCover"} src={image} loading="lazy" />

                <div className={audioLayout ? "audio-title-subtitle" : "min-audio-title-subtitle"} onClick={() => { audioLayout ? '':setAudioLayout(!audioLayout)}}>
                    <h3 className={ audioLayout ? "audio-title" : "min-audio-title"}>{title}</h3>
                    <p className= { audioLayout ? "subTitle" : "min-subTitle" }>{show}</p>
                </div>

                <button onClick={() => {
                    setStarColor(!starColor)

                    const addfavourite = async () => {
                        const { data, error} = await supabase
                            .from('podcast4real')
                            .upsert({
                                title: title,
                                audio: audio,
                                image: image,
                                shows: title,
                                user__id: userId
                            })
                    }

                    const removeFavs = async() => {
                        const { data, error } = await supabase
                        .from('podcast4real')
                        .delete()
                        .eq('user__id', userId)
                        .eq('title', title)
        
                        if(error){
                        console.error("what are doing error")
                        } else{
                        console.log(data)
                        }
                    }

                    HandleAddingToFavourites(title) ?  removeFavs()  : addfavourite() 
                    
                    }} style={{ background: "transparent", border: 'none', margin:'2%'}}>{ starColor ?  <img src={starred} style={{ width: '25px' , background: "transparent"}} /> : HandleAddingToFavourites(title)  ? <img src={starred} style={{ width: '25px%', background: "transparent"}} /> : <img src={star} style={{ width: '25px', background: "transparent"}}/> }
                </button>

                <div className={ audioLayout ? "time-adjust" : "min-time-adjust" }>

                    <input
                            type="range"
                            min="0"
                            max={duration / 1000}
                            default="0"
                            value={seconds}
                            className="timeline"
                            onChange={(e) => {
                            sound.seek([e.target.value]);
                        }}
                    />

                    <div className="time">
                        <p style={{background: 'transparent', color:'white'}}>{currTime.min}:{currTime.sec}</p>
                        <p style={{background: 'transparent', color:'white'}}>{time.min}:{time.sec}</p>
                    </div>
                    
                </div>

                { audioLayout ? 
                
                    <div className="play-buttons">

                        <button className="playButton">
                            <IconContext.Provider value={{ className: "custom-icon" , size: "3em"}} >
                                <BiSkipPrevious />
                            </IconContext.Provider>
                        </button>
                        
                        {
                            !isPlaying ? (
                            <button className="playButton" onClick={playingButton}>
                                <IconContext.Provider value={{ size: "3em",className: "custom-icon"}}>
                                    <AiFillPlayCircle />
                                </IconContext.Provider>
                            </button>

                            ) : 

                            (
                            <button className="playButton" onClick={playingButton}>
                                <IconContext.Provider value={{ size: "3em", color: "#27AE60" ,className: "custom-icon" }}>
                                    <AiFillPauseCircle />
                                </IconContext.Provider>
                            </button>
                            )
                        }

                        <button className="playButton">
                            <IconContext.Provider value={{ size: "3em", className: "custom-icon"}}>
                                <BiSkipNext />
                            </IconContext.Provider>
                        </button>

                    </div> :  


                    !isPlaying ? (
                    <button className="playButton" onClick={playingButton}>
                        <IconContext.Provider value={{ size: "2.5em",className: "custom-icon" ,color: "gray" }}>
                            <AiFillPlayCircle />
                        </IconContext.Provider>
                    </button>

                    ) : 

                    (
                    <button className="playButton" onClick={playingButton}>
                        <IconContext.Provider value={{ size: "2.5em", color: "#27AE60" ,className: "custom-icon" }}>
                            <AiFillPauseCircle />
                        </IconContext.Provider>
                    </button>
                    )
                }
            </div>
        </div>
    )
}