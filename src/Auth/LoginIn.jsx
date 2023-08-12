import { useState } from "react"

export default function LoginIn(){

    const [ user, setUser] = useState(true)
    
    return (
        <>
            { user ? <p>Login</p> : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, non?</p> } 

            <button onClick={() => setUser(!user)}>sign in With Github</button>
        </>   
    )
}