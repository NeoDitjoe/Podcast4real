import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'

export default function ContactUs(){
    return(
        <div className='contact-us'>
                        <h3 style={{ color: 'orange', backgroundColor:'transparent'}}>get in touch:</h3>
            <a href='https://github.com/NeoDitjoe'><img src={github} alt='githubicon'></img>Github</a>
            <a href='https://www.linkedin.com/in/neo-ditjoe-26019b26a/'><img src={linkedin} alt='linkedInicon'></img>LinkedIn</a>
            <a href='mailto:ditjoeneo@gmail.com'><img src={gmail} alt='gmail'></img>Email</a>

            <h6 style={{background: "white", color: "black", marginTop: "15%"}}>Email:</h6>
            <p style={{background: "white", color: "black"}}> ditjoeneo@gmail.com</p>

            <h6 style={{background: "white", color: "black"}}>Phone & Whatsapp:</h6>
            <p style={{background: "white", color: "black"}}>+27 66 026 8606</p>

        </div>
    )
}