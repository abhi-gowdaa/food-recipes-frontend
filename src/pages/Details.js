import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Box ,Card} from '@mui/material';
import "../globalStyles/styles.css"

const Details = () => {
    const {id}=useParams();
    const location=useLocation();
    const {rowData}=location.state || {};
    console.log(location.pathname);  
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
        height: "540px",
        borderRadius: "25px",
      }}
    >
        <Card className='car'>hi</Card>
        <Card sx={{width:100, height:200}}>hi</Card>
        <Card sx={{width:200,height:300}}>hi</Card>
        </Box>
  )
}

export default Details