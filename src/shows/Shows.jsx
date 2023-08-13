import { useLoaderData, Link } from "react-router-dom"
import { moviesData } from "../../data/movies"


export default function Shows(){

    const shows = useLoaderData()


    return (
        <div className="show">
            
            {  
                shows.splice(0, 10).map((show) => {
                    return (
                        <Link to={show.id} key={show.id} >
                            
                            <img className="img-show" src={show.image}></img> 
                            <h6>{show.title}</h6> 
                        </Link>
                    )
                })
            }
        </div>
    )
}

export const Showsloader = async () => {
    const res = await fetch('https://podcast-api.netlify.app')
    return res.json()
}


// export const Showsloader = async () => {
//     const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=water';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'bcab56d998msh7be713c40b2497cp19c81djsn0a000895d3d0',
//             'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
//         }
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result)
//         return result;
//     } catch (error) {
//         console.error(error);
//     }
// }
// Showsloader()
