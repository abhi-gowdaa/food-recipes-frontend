import React from 'react'
import { Box } from '@mui/material';

const Home = () => {
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
        maxWidth: "90rem",
        height: "820px",
        borderRadius: "25px",
       
      }}
    > 
      <img src='/pizza' alt='pizza' style={{width:"100%",height:"100%"}}/>
    </Box>
  )
}

export default Home