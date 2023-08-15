import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'

export default function ContactUs(){
    return(
        <div className='contact-us'>
            <a href='https://github.com/NeoDitjoe'><img src={github} alt='githubicon'></img></a>
            <a href='https://www.linkedin.com/in/neo-ditjoe-26019b26a/'><img src={linkedin} alt='linkedInicon'></img></a>
            <a href='mailto:ditjoeneo@gmail.com'><img src={gmail} alt='gmail'></img></a>

            <h6 style={{background: "white", color: "black", marginTop: "15%"}}>Email:</h6>
            <p style={{background: "white", color: "black", marginTop: "-3%"}}> ditjoeneo@gmail.com</p>

            <h6 style={{background: "white", color: "black", marginTop: "5%"}}>Phone & Whatsapp:</h6>
            <p style={{background: "white", color: "black", marginTop: "-3%"}}>066 026 8606</p>

        </div>
    )
}