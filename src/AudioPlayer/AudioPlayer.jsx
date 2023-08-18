import { useEffect, useState } from "react";
import useSound from "use-sound"; 
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; 
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; 
import { IconContext } from "react-icons";
import { useStateContext } from "../UseContext/UseContext";

export function MusicPlayer({audio, title, image, show}){

    const { audioLayout, setAudioLayout } = useStateContext()

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
                    

      return (
        <div className={ audioLayout ? "component" : "min-component"} onClick={() => { audioLayout ? '':setAudioLayout(!audioLayout)}}>
            <h2 className={ audioLayout? "playing-now" : "min-playing-now"} onClick={() => setAudioLayout(!audioLayout)}>Playing Now</h2>
            <img className={ audioLayout ? "musicCover" : "min-musicCover"} src={image}  />

            <div className={audioLayout ? "audio-title-subtitle" : "min-audio-title-subtitle"}>
                <h3 className={ audioLayout ? "audio-title" : "min-audio-title"} >{title}</h3>
                <p className= { audioLayout ? "subTitle" : "min-subTitle" }>{show}</p>
            </div>

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
                    <p style={{background: 'white'}}>{currTime.min}:{currTime.sec}</p>
                    <p style={{background: 'white'}}>{time.min}:{time.sec}</p>
                </div>
                
            </div>

            { audioLayout ? 
            
                <div className="play-buttons">

                    <button className="playButton">
                        <IconContext.Provider value={{ size: "3em", color: "white"}} >
                            <BiSkipPrevious />
                        </IconContext.Provider>
                    </button>
                    
                    {
                        !isPlaying ? (
                        <button className="playButton" onClick={playingButton}>
                            <IconContext.Provider value={{ size: "3em", color: "white" }}>
                                <AiFillPlayCircle />
                            </IconContext.Provider>
                        </button>

                        ) : 

                        (
                        <button className="playButton" onClick={playingButton}>
                            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                                <AiFillPauseCircle />
                            </IconContext.Provider>
                        </button>
                        )
                    }

                    <button className="playButton">
                        <IconContext.Provider value={{ size: "3em", color: "white" }}>
                            <BiSkipNext />
                        </IconContext.Provider>
                    </button>

                </div> :  
            
                <button className="playButton" onClick={playingButton}>
                    <IconContext.Provider value={{ size: "1.5em", color: "white" }}>
                        <AiFillPlayCircle />
                    </IconContext.Provider>
                </button>
            }

        </div>
    )
}

export default function Audioplayer({ audio, audiotitle}){
    return (
        <div className="audioplayer">
            <h4>{audiotitle}</h4>
            
            <audio controls autoPlay style={{ color: 'blue'}}>
                <source src={audio} />
            </audio>
        </div>
    )
}