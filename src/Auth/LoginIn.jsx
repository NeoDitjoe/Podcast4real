import { useEffect } from "react"
import { useStateContext } from "../UseContext/UseContext"
import supabase from "./supabase"
import ScrollToTop from "../scrollToTop/ScrollToTop"

export default function LoginIn(){

    const { user } = useStateContext()

    const login = async() => {
        await supabase.auth.signInWithOAuth({
          provider: "github"
        })
    }
    
    return (
        <>
            <ScrollToTop/>
            { user ? <button type="button" className="btn btn-danger" onClick={() => supabase.auth.signOut()}>logout</button> : <button type="button" className="btn btn-success" onClick={login}> login with Github</button>}
        </>   
    )
}