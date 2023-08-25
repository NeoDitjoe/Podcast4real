import { NavLink, useLoaderData } from "react-router-dom"
import { useStateContext } from "../UseContext/UseContext"
import ScrollToTop from "../scrollToTop/ScrollToTop"
import './StyleHome.css'
import firstImag from '../assets/firstImg.jpg'
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import casset from '../assets/casset.png'
import logo from '../assets/logo.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'


/* material UI */
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Home(){

    const { user } = useStateContext()
    let shows = useLoaderData()
    
    function sliceShows(){
        try {
            return{ 
                shows: shows.slice(40, 50),
            }
            
        } catch (error) {
            console.log(error)
            return <ErrorMessage/>
        }
    }

    function slideShow(title ,titleStyle){
        try {
            return(
                <>
                    {/* <h5 className={titleStyle}>{title}</h5> */}
                    <div className="show" style={{background:'transparent', gap:'0'}}>
                        
                        {  
                            sliceShows().shows.map((show) => {
                                return (
                                    <NavLink to={user ? '' : 'login'} key={show.id} style={{}}>
                                
                                        <img className="img-show" src={show.image} loading="lazy"></img>
                                    </NavLink>
                                )
                            })
                        }
                    </div>

                </>
            )
        } catch (error) {
            console.log(error)
            return <ErrorMessage/>
        }
    }

    return(
        <div >      <ScrollToTop/>
            {/* { user ? '' : <p style={{marginLeft: '2%'}}> please <NavLink to={"/login"} >Log in</NavLink> for better experience</p>} */}

            <Box sx={{ flexGrow: 1 }} className="home" style={{backgroundColor:'rgb(255, 160, 78)'}}>
                <h1 style={{color:'white', backgroundColor:'rgb(255, 160, 78)', textAlign:'center'}}>{ user ? "Welcome to Podcast4real" : "login to view shows"}</h1> 
                <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 2, sm: 2, md: 8 }}>
                
                    <Grid  xs={2} sm={4} md={4} style={{backgroundColor:'rgb(255, 160, 78)'}}>
                        <Item style={{backgroundColor:'rgb(255, 160, 78)', boxShadow:'none'}}>
                            <h1 /* style={{backgroundColor:'rgb(255, 160, 78)', fontSize:'400%', color:'black'}} */>Lorem ipsum, dolor consectetur adipisicing elit!</h1>
                            <p>We have to create our way to the top</p>

                            <p>{ user ? <NavLink to={'shows'} >Go to Shows</NavLink>  :   <NavLink to={"/login"} > Log in</NavLink>}</p>
                        </Item>
                    </Grid>

                    <Grid  xs={2} sm={4} md={4} style={{backgroundColor:'rgb(255, 160, 78)'}}>
                        <Item style={{backgroundColor:'rgb(255, 160, 78)' ,boxShadow:'none'}}>
                            <img src={firstImag} alt="image" className="firstImag" loading="lazy"/>
                        </Item>
                    </Grid>

                    <Grid  xs={2} sm={4} md={4} style={{backgroundColor:'powderblue'}}>
                        <Item style={{backgroundColor:'powderblue',boxShadow:'none'}}>
                            <div style={{ border:'solid 2px white', borderRadius:'10px', padding:'2%', backgroundColor:'powderblue', margin:'10%'}}>
                                <h2 style={{background: 'transparent', color: "white"}}>Lorem ipsum dolor sit amet consectetur.</h2>
                                {slideShow()}
                                <p style={{width:'80%', padding: '4.4%', color: "white", marginLeft:'10%', fontSize:'120%'}}> nesciunt mollitia nam? Lorem ipsum dolor sit., voluptate cupiditate?</p>
                                <NavLink style={{ background:'rgb(255, 160, 78)', color: 'white'}} to={user? "shows" : "login"}>{user? 'View Shows' : 'Login to view shows'}</NavLink>
                            </div>
                        </Item>
                    </Grid>
                    
                    <Grid  xs={2} sm={4} md={4} style={{backgroundColor:'powderblue'}}>
                        <Item style={{backgroundColor:'powderblue', boxShadow:'none'}}>
                            <div style={{ border:'solid 2px white', borderRadius:'10px', padding:'2%', backgroundColor:'powderblue', margin:'10%'}}>
                                <h2 style={{background: 'transparent', color: "white"}}>Lorem ipsum dolor sit amet consectetur.</h2>
                                <p style={{width:'80%', padding: '5%', color: "white", marginLeft:'10%', fontSize:'120%'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur illum architecto ducimus nam temporibus nihil pariatur suscipit distinctio eos? Blanditiis nostrum deserunt, harum nesciunt mollitia nam? Sequi consequatur quia pariatur quas eum quidem minus dicta delectus voluptatum consectetur quis adipisci tenetur, excepturi est praesentium porro quod blanditiis illo, voluptate cupiditate?</p>
                                <NavLink to={'more/contact_us'} style={{ background:'rgb(255, 160, 78)', color: 'white'}}>Get in Touch</NavLink>
                            </div>
                        </Item>
                    </Grid>
                    <Grid  xs={2} sm={4} md={4} style={{backgroundColor:'green'}}>
                        <Item style={{backgroundColor:'white',boxShadow:'none'}}>
                                <img style={{width:'100%', backgroundColor: "transparent"}} src={casset}  />
                        </Item>
                    </Grid>
                    
                    <Grid  xs={2} sm={4} md={4} style={{backgroundColor:'white'}}>
                        <Item style={{backgroundColor:'white', boxShadow:'none'}}>
                            <h2 style={{ backgroundColor:'transparent', color:'black', margin:'10%', marginTop:'30%'}}>Lorem ipsum dolor sit amet.</h2>
                            <p style={{ backgroundColor:'transparent', color:'black', margin:'10%', marginTop:'10%'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque similique illum praesentium soluta suscipit sit modi asperiores ab ex iure.</p>
                        </Item>
                    </Grid>

                    <Grid  xs={2} sm={4} md={4} style={{backgroundColor:'white'}}>
                        <Item style={{backgroundColor:'white',boxShadow:'none'}}>
                        <h2 style={{ backgroundColor:'transparent', color:'black', margin:'10%', marginTop:'30%'}}>Lorem ipsum dolor sit amet.</h2>
                        <p style={{ backgroundColor:'transparent', color:'black', margin:'10%', marginTop:'10%'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, voluptatum. Delectus fuga eligendi excepturi rem porro! Ipsa ut illum, dolorum impedit, earum, facere error sapiente in iure tempore sequi et.</p>


                        </Item>
                    </Grid>
                    
                    <Grid  xs={2} sm={4} md={4} style={{backgroundColor:'white'}}>
                        <Item style={{backgroundColor:'white', boxShadow:'none'}}>
                            <img style={{width:'70%', backgroundColor: "transparent"}} src={'https://i.pinimg.com/564x/92/3e/3d/923e3d0cf4c87d5447cc60f37e2c08a6.jpg'} />

                        </Item>
                    </Grid>

                    <Grid  xs={2} sm={4} md={4} style={{backgroundColor:'gray'}}>
                        <Item style={{backgroundColor:'gray',boxShadow:'none'}}>
                        <h2 style={{ backgroundColor:'transparent', color:'black', margin:'10%', marginTop:'30%'}}>Lorem ipsum dolor sit amet.</h2>
                        <p style={{ backgroundColor:'transparent', color:'black', margin:'10%', marginTop:'10%'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, voluptatum. Delectus fuga eligendi excepturi rem porro! Ipsa ut illum, dolorum impedit, earum, facere error sapiente in iure tempore sequi et.</p>


                        </Item>
                    </Grid>
                    
                    <Grid  xs={2} sm={4} md={4} style={{backgroundColor:'gray'}}>
                        <Item style={{backgroundColor:'gray', boxShadow:'none'}}>
                            <img style={{width:'80%', backgroundColor: "transparent"}} src={logo} />

                        </Item>
                    </Grid>
                    <Grid  xs={2} sm={4} md={4} style={{backgroundColor:'yellow'}}>
                        <Item style={{backgroundColor:'yellow', boxShadow:'none'}}>
                            <img style={{width:'80%', backgroundColor: "transparent"}} src={logo} />

                        </Item>
                    </Grid>
                    <Grid  xs={2} sm={4} md={4} style={{backgroundColor:'yellow'}}>
                        <Item style={{backgroundColor:'yellow', boxShadow:'none'}}>
                            <h1 style={{ backgroundColor:'transparent'}}> Get in Touch</h1>

                            <a href='https://github.com/NeoDitjoe' style={{ backgroundColor:'transparent'}}><img src={github} alt='githubicon' style={{ backgroundColor:'transparent'}}></img>Github</a>
                            <a href='https://www.linkedin.com/in/neo-ditjoe-26019b26a/' style={{ backgroundColor:'transparent'}}><img style={{ backgroundColor:'transparent'}} src={linkedin} alt='linkedInicon'></img>LinkedIn</a>
                            <a href='mailto:ditjoeneo@gmail.com' style={{ backgroundColor:'transparent'}}><img src={gmail} alt='gmail' style={{ backgroundColor:'transparent'}}></img>Email</a>

                            <h6 style={{background: "transparent", color: "black", marginTop: "15%"}}>Email:</h6>
                            <p style={{background: "transparent", color: "black"}}> ditjoeneo@gmail.com</p>

                            <h6 style={{background: "transparent", color: "black"}}>Phone & Whatsapp:</h6>
                            <p style={{background: "transparent", color: "black"}}>+27 66 026 8606</p>

                        </Item>
                    </Grid>


                </Grid>
            </Box>
        </div>
    )
}