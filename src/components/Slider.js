import React, { useState } from "react";
import { Button, Slider, Box } from "@mui/material";

const SliderComponent = ({ onSliderValueChange }) => {
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

 
  const toggleSlider = () => {
    setIsSliderVisible(!isSliderVisible);
  };

 
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    onSliderValueChange(newValue);   
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>  
      <Button
        variant="outlined"
        onClick={toggleSlider}
        sx={{ height: "40px", mr: 2 }}  
      >
        {isSliderVisible ? "Hide" : "Protein"}
      </Button>

     
      {isSliderVisible && (
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          min={0}
          max={100}
          valueLabelDisplay="auto"
          sx={{ width: "100px",mr:"15px" ,mt:'20px'}}   
        />
      )}
    </Box>
  );
};

export default SliderComponent;
