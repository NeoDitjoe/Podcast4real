import { useEffect, useState } from "react";
import useSound from "use-sound"; // for handling the sound
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons";

export function MusicPlayer({audio, title, image, show}){

    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound(audio);

    const playingButton = () => {
        if (isPlaying) {
          pause(); // this will pause the audio
          setIsPlaying(false);
        } else {
          play(); // this will play the audio
          setIsPlaying(true);
        }
      }

      return (
        <div className="component" /* style={{ background: `url(${image})`  , backdropFilter:'blur(10px)' }}*/>
          <h2 style={{ background: 'white'/* `url(${image})` */}}>Playing Now</h2>
          <img className="musicCover" src={image}  />

          <div>
            <h3 className="title" style={{ background: "white"/* `url(${image})` */}}>{title}</h3>
            <p className="subTitle" style={{ background: 'white'/* `url(${image})` */}}>{show}</p>
          </div>

          <div /* style={{ background: `url(${image})`}} */>
            <button className="playButton">
                <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                    <BiSkipPrevious />
                </IconContext.Provider>
            </button>
            
            {
                !isPlaying ? (
                <button className="playButton" onClick={playingButton}>
                    <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
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
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <BiSkipNext />
              </IconContext.Provider>
            </button>

          </div>

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