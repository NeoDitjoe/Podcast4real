import { NavLink, useLoaderData } from "react-router-dom"
import { useStateContext } from "../UseContext/UseContext"
import ScrollToTop from "../scrollToTop/ScrollToTop"
import './StyleHome.css'
import firstImag from '../assets/firstImg.jpg'
import ErrorMessage from "../ErrorMessage/ErrorMessage"

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
                                
                                        <img className="img-show" src={show.image}></img>
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
                <h1 style={{color:'white', backgroundColor:'rgb(255, 160, 78)', textAlign:'center'}}>Welcome to Podcast4real</h1> 
                <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 2, sm: 2, md: 8 }}>
                
                    <Grid  xs={2} sm={4} md={4} style={{backgroundColor:'rgb(255, 160, 78)'}}>
                        <Item style={{backgroundColor:'rgb(255, 160, 78)', boxShadow:'none'}}>
                            <h1 /* style={{backgroundColor:'rgb(255, 160, 78)', fontSize:'400%', color:'black'}} */>Lorem ipsum, dolor consectetur adipisicing elit!</h1>
                            <p>We have to ensure our way to the top</p>

                            <p>{ user ? <NavLink to={'shows'} >Go to Shows</NavLink>  :   <NavLink to={"/login"} > Log in</NavLink>}</p>
                        </Item>
                    </Grid>

                    <Grid  xs={2} sm={4} md={4} style={{backgroundColor:'rgb(255, 160, 78)'}}>
                        <Item style={{backgroundColor:'rgb(255, 160, 78)' ,boxShadow:'none'}}>
                            <img src={firstImag} alt="image" className="firstImag" />
                        </Item>
                    </Grid>

                    <Grid  xs={2} sm={4} md={4} style={{backgroundColor:'powderblue'}}>
                        <Item style={{backgroundColor:'powderblue',boxShadow:'none'}}>
                            <div style={{ border:'solid 2px white', borderRadius:'10px', padding:'2%', backgroundColor:'powderblue', margin:'10%'}}>
                                <h1 style={{background: 'transparent', color: "white"}}>Lorem ipsum dolor sit amet consectetur.</h1>
                                {slideShow()}
                                <p style={{width:'80%', padding: '4.4%', color: "white", marginLeft:'10%', fontSize:'120%'}}> nesciunt mollitia nam? , voluptate cupiditate?</p>
                                <NavLink style={{ background:'rgb(255, 160, 78)', color: 'white'}} to={user? "shows" : "login"}>{user? 'View Shows' : 'Login to view shows'}</NavLink>
                            </div>
                        </Item>
                    </Grid>
                    
                    <Grid  xs={2} sm={4} md={4} style={{backgroundColor:'powderblue'}}>
                        <Item style={{backgroundColor:'powderblue'}}>
                            <div style={{ border:'solid 2px white', borderRadius:'10px', padding:'2%', backgroundColor:'powderblue', margin:'10%', boxShadow:'none'}}>
                                <h1 style={{background: 'transparent', color: "white"}}>Lorem ipsum dolor sit amet consectetur.</h1>
                                <p style={{width:'80%', padding: '5%', color: "white", marginLeft:'10%', fontSize:'120%'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur illum architecto ducimus nam temporibus nihil pariatur suscipit distinctio eos? Blanditiis nostrum deserunt, harum nesciunt mollitia nam? Sequi consequatur quia pariatur quas eum quidem minus dicta delectus voluptatum consectetur quis adipisci tenetur, excepturi est praesentium porro quod blanditiis illo, voluptate cupiditate?</p>
                                <NavLink to={'more/contact_us'} style={{ background:'rgb(255, 160, 78)', color: 'white'}}>Get in Touch</NavLink>
                            </div>
                        </Item>
                    </Grid>
                    
                </Grid>
            </Box>
        </div>
    )
}