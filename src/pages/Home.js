import React from 'react'
import { Box,Button } from '@mui/material';
import { MainNavigation } from '../components/MainNavigation';
import { useNavigate } from 'react-router-dom';

const Home = () => {
const navigate=useNavigate()
  const handleClick=()=>{
    console.log("hi");
   navigate("search")
  }

  return (
    <Box
    className="data-card"
      component="section" 
      sx={{
        p: 2,
        m: "auto",
        mt: "20px",
        overflow:"hidden",
        mb:"10px",
        maxWidth: "80rem",
        height: "640px",
        borderRadius: "25px",
       
      }}
    > 
    <div className="homeNav">
    <MainNavigation />
    </div>
    <div className='mainContainer'>

    <div className='tContainer'>
    <h1 className="title">Cooking with fun made easy accessible</h1>
    <p className="desc">its easy to use and offers a variety of irresistable recipes that appeal to beginners and experts alike .Ready to get cooking?</p>
     <Button  onClick={handleClick} sx={{backgroundColor:"#FF7856",color:"#fff",padding:"13px" ,borderRadius:"25px", width:"200px",fontSize:"0.7rem",marginTop:"20px",marginLeft:"200px"}}>Get Started</Button>
    </div>
    <div className="homeimg">
      <img src='/pizza.png' alt='pizza' style={{width:"100%",height:"100%"}}/>
    </div>
    </div>
     
    </Box>
  )
}

export default Home