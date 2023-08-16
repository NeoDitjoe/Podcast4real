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
    const [ collapseMenu, setCollapseMenu ] = useState(false)
    const [ user, setUser] = useState(null)
    const [ showsContext, setShowsContext] = useState(null)

    useEffect(() => {
        const session = supabase.auth.getSession()
        setUser(session?.user)
    
        const unsubscribe = () => supabase.auth.onAuthStateChange((event, session) => {
          switch(event) {
            case 'SIGNED_IN':
              setUser(session?.user)
    
              /**
               * store the user id in a usestate then, the state is used to get spicific 
               * users data and to also store the id to the database
               */
            //   setUserId(session.user.id)
              
              break;
            case 'SIGNED_OUT':
              setUser(null)
              break;
            default:  
          }
        })
    
        return () => {
          unsubscribe()
        }
      }, [])

    return (
        <Context.Provider value = {{ showsContext, setShowsContext, user, setUser, collapseMenu ,setCollapseMenu ,episodesContext, setEpisodesContext, playAudio, setPlayAudio, playAudioTitle, setPlayAudioTitle }}>
            { children }
        </Context.Provider>
    )
}