import { NavLink } from "react-router-dom"
import { useStateContext } from "../UseContext/UseContext"
import ScrollToTop from "../scrollToTop/ScrollToTop"
import './StyleHome.css'
import firstImag from '../assets/firstImg.jpg'

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
                        <Item style={{backgroundColor:'powderblue', boxShadow:'none'}}>
                            <p  style={{backgroundColor:'powderblue'}}>k</p>
                        </Item>
                    </Grid>

                    <Grid  xs={2} sm={4} md={4} style={{backgroundColor:'powderblue'}}>
                        <Item style={{backgroundColor:'powderblue', boxShadow:'none'}}>

                        </Item>
                    </Grid>
                    
            
                </Grid>
            </Box>
        </div>
    )
}