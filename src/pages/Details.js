import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Box ,Card, Typography} from '@mui/material';
import "../globalStyles/styles.css"
import Rating from '@mui/material/Rating';
 

const Details = () => {
    const {id}=useParams();
    const location=useLocation();
    const {data}=location.state || {};
    console.log(location.pathname); 
    const recipeData=data[0]['_source']
    console.log(recipeData);
    console.log(recipeData.title)
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
        maxWidth: "60rem",
        height: "540px",
        borderRadius: "25px",
       
      }}
    >   
    <Card sx={{mb:"20px",width:"100%", height:80}}>
        <Typography variant="h5">{recipeData.title}</Typography>
        <Typography variant="subtitle2">{recipeData.desc}</Typography>
        </Card>
    <div style={{display:"flex",gap:"1rem" }}>
        <div className='imgRating'>
        <Card sx={{width:260,height:250,mb:1.5,p:1}}><img style={{width:"100%",height:"100%",objectFit: "cover"}} src="/food.jpg" alt="food" /></Card>
        <Card sx={{width:275, height:90,mb:1.5,textAlign:"center"}}>
            <h3>Rating</h3>
            <Rating name="read-only" value="5" readOnly />
        </Card>
        <Card sx={{width:275, height:55,textAlign:"center"}}>
        <h4>calories</h4>
        </Card>
        </div>
        <div>

        <Card sx={{width:300,height:300,mb:2,overflow:"scroll",overflowX:"hidden"}}>
            {recipeData.ingredients.map((text)=><p>{text}</p>)}
            </Card>
        <Card sx={{width:300,height:120}}>
        <p>Nutients</p>
            <p>Protein : {recipeData.protein}</p>
            <p>fat : {recipeData.fat}</p>
            <p>sodium : {recipeData.sodium}</p>
        </Card>
        </div>
        <Card sx={{width:400,height:435}}>
        {recipeData.directions.map((text)=><p>{text}</p>)}
        </Card>
        </div>
        </Box>
  )
}

export default Details