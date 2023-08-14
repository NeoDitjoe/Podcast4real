import { createContext, useContext, useState } from "react";

const Context = createContext()

export function useStateContext(){
    return useContext(Context)
}

export default function StateContextProvider({ children }) {
    const [ episodesContext, setEpisodesContext ] = useState(null)//get episodes from seasons 
    const [ playAudio, setPlayAudio ] = useState(null)
    const [ playAudioTitle, setPlayAudioTitle ] = useState(null)
    const [ collapseMenu, setCollapseMenu ] = useState(false)
    
    return (
        <Context.Provider value = {{ collapseMenu ,setCollapseMenu ,episodesContext, setEpisodesContext, playAudio, setPlayAudio, playAudioTitle, setPlayAudioTitle }}>
            { children }
        </Context.Provider>
    )
}