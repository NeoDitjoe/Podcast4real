import { useState } from "react"
import { useStateContext } from "../UseContext/UseContext"
import supabase from "./supabase"

export default function LoginIn(){

    const { user } = useStateContext()

    const login = async() => {
        await supabase.auth.signInWithOAuth({
          provider: "github"
        })
      }
    
    return (
        <>
            { user ? <button type="button" className="btn btn-danger" onClick={() => supabase.auth.signOut()}>logout</button> : <button type="button" className="btn btn-success" onClick={login}> login with Github</button>}
        </>   
    )
}