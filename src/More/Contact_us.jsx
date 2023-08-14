import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

export default function ContactUs(){
    return(
        <div className='contact-us'>
             <a href='https://github.com/NeoDitjoe'><img src={github} alt='githubicon'></img></a>
             <a href='https://www.linkedin.com/in/neo-ditjoe-26019b26a/'><img src={linkedin} alt='linkedInicon'></img></a>
             <a href=''>email</a>
        </div>
    )
}