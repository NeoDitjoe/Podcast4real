import ErrorMessage from "../ErrorMessage/ErrorMessage"
import { useStateContext } from "../UseContext/UseContext"
import supabase from "../Auth/supabase"
import { useState, useEffect, useMemo } from "react"

const History = (title, file, showtitle) => {

    const [ fetchError, setfetchError ] = useState(null)
    const [ history, setHistory ] = useState(null)
    const [ qq, q ] = useState(null)
    const { userId } = useStateContext() 


    useEffect(() => {
        if(userId){
            const fetchData = async () => {
                try {
                    const {data, error } = await supabase
                        .from('podcast4realHistory')
                        .select()
                        .eq('user_id', userId)

                        if(error){
                            setfetchError(error)
                            setHistory(null)
                        }else{
                            setHistory(data)
                            setfetchError(null)
                        }
                }catch(error){
                    return <ErrorMessage/>
                }
            }
            fetchData()
        }
    })

    return (
        <div className="history" style={{padding:'2%'}}>
        
            <h1 style={{ color: ' white'}}>Coming soon...</h1>
            <h6 style={{ color: ' white'}}>user will be able to keep track of which podcast they have played</h6>
        </div>
    );
}

export default History;