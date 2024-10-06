import React from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Card,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import "../globalStyles/styles.css";
import Rating from "@mui/material/Rating";

const theme = createTheme({
  typography: {
    h4: {
      fontFamily: "Sacramento",
      fontWeight: 700,
      fontStyle: "normal",
      marginTop: "10px",
    },
    h5: {
      fontFamily: "Homemade Apple",
      fontWeight: 700,
      fontStyle: "normal",
      marginTop: "10px",
      marginLeft: "10px",
    },
    h7: {
      fontWeight: 500,
      marginLeft: "10px",
      marginRight: "10px",
    },
    h8: {
      
      marginLeft: "10px",
      marginRight: "10px",
    },
  },
});

const Details = () => {
  const location = useLocation();
  const { data } = location.state || {};
  const recipeData = data[0]["_source"];

  return (
    <Box
      className="data-card"
      component="section"
      sx={{
        p: 2,
        m: "auto",
        mt: "20px",
        overflow: "hidden",
        mb: "10px",
        maxWidth: "60rem",
        height: "540px",
        borderRadius: "25px",
        color: "#000",
      }}
    >
      <ThemeProvider theme={theme}>
        <Card sx={{ mb: "10px", width: "100%", height: 90 }}>
          <Typography variant="h4" sx={{ margin: "8px", mb: 0 }}>
            {recipeData.title}
          </Typography>
          <Typography variant="h7">{recipeData.desc}</Typography>
        </Card>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div className="imgRating">
            <Card sx={{ width: 260, height: 250, mb: 1.5, p: 1 }}>
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src="/food.jpg"
                alt="food"
              />
            </Card>
            <Card sx={{ width: 275, height: 90, mb: 1.5, textAlign: "center" }}>
              <Typography variant="h5">Rating</Typography>
              <hr width="100%" size="1"></hr>
              <Rating name="read-only" value={recipeData.rating} readOnly />
            </Card>
            <Card sx={{ width: 275, height: 60, textAlign: "center" }}>
              <Typography variant="h5">
                calories : {recipeData.calories}{" "}
              </Typography>
            </Card>
          </div>
          <div>
            <Card
              sx={{
                width: 300,
                height: 300,
                mb: 1.5,
                overflow: "scroll",
                overflowX: "hidden",
                padding: "5px",
              }}
            >
              <Typography variant="h5">Ingredients</Typography>
              <hr width="100%" size="1"></hr>

              {recipeData.ingredients.map((text, index) => (
                <Typography variant="h8" key={index}>
                  {text}
                </Typography>
              ))}
            </Card>
            <Card
              sx={{
                width: 310,
                height: 120,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h5">Nutients </Typography>
              <hr width="100%" size="1"></hr>
              <Typography variant="h7">
                Protein : {recipeData.protein}
              </Typography>
              <Typography variant="h7">fat : {recipeData.fat}</Typography>
              <Typography variant="h7">sodium : {recipeData.sodium}</Typography>
            </Card>
          </div>
          <Card
            sx={{
              width: 400,
              height: 432,
              overflow: "scroll",
              overflowX: "hidden",
              padding: "5px",
            }}
          >
            <Typography variant="h5">Directions</Typography>
            <hr width="100%" size="1"></hr>

            {recipeData.directions.map((text, index) => (
              <Typography variant="h8" key={index}>
                {text}
              </Typography>
            ))}
          </Card>
        </div>
      </ThemeProvider>
    </Box>
  );
};

export default Details;
