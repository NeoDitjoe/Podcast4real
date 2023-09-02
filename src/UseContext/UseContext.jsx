import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../Auth/supabase";

const Context = createContext()

export function useStateContext(){
    return useContext(Context)
}

export default function StateContextProvider({ children }) {
    const [ episodesContext, setEpisodesContext ] = useState(null)//get episodes from seasons 
    const [ playAudio, setPlayAudio ] = useState(null)
    const [ playAudioTitle, setPlayAudioTitle ] = useState(null)
    const [ playAudioImage, setPlayAudioImage ] = useState(null)
    const [ collapseMenu, setCollapseMenu ] = useState(false)
    const [ user, setUser] = useState(null)
    const [ showsContext, setShowsContext] = useState(null)
    const [ favouritesState, setFavouritesState ] = useState(null)
    const [ userId, setUserId ] = useState(null)
    const [ loginContext, setLoginContext ] = useState(null)
    const [ audioShow, setAudioShow ] = useState(null)
    const [ audioLayout, setAudioLayout ] = useState(false)
    let [ nextAudio, setNextAudio ] = useState()

    return (
        <Context.Provider value = {{ audioLayout, setAudioLayout, audioShow, setAudioShow, playAudioImage, setPlayAudioImage, loginContext, setLoginContext , 
                userId, setUserId, favouritesState, setFavouritesState, showsContext, setShowsContext, user, setUser, collapseMenu ,setCollapseMenu ,episodesContext, setEpisodesContext, 
                playAudio, setPlayAudio, playAudioTitle, setPlayAudioTitle, nextAudio, setNextAudio
            }}>
            { children }
        </Context.Provider>
    )
}