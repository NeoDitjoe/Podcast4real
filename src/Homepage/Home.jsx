import { useStateContext } from "../UseContext/UseContext"

export default function Home(){

    const { user } = useStateContext()

    return(
        <>
            { user ? <p>Lorem ipsum dolor sit amet.</p> : "please loggin"}
        </>
    )
}