import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import {OutlinedInput, TextField, Card, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SliderComponent from "./Slider";

const SearchBar = ({onSearchSubmit}) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [searchValue,setSearchValue]=useState('');
    const [sliderValue, setsliderValue] = useState('');
  
  const handleSubmit=(e)=>{
    e.preventDefault();
   
    onSearchSubmit({searchValue,selectedValue,sliderValue});
  }
  const handleSliderValueChange=(value)=>{
  setsliderValue(value);
   
  }
  
    const options = [
        "bread",
        "fall",
        "vegetable",
        "cheese",
        "fruit",
        "cookie",
      ];
  return (
     <Card
    sx={{
      borderRadius: "15px",
      m: "auto",
      padding: "5px",
      maxWidth: "600px",
      gap: "2rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <form onSubmit={ handleSubmit} style={{ display: "flex", alignItems: "center" }}>
    <Autocomplete
      options={options}
      freeSolo
      onChange={(event, newValue) => {
        setSelectedValue(newValue);  
      }}

      renderInput={(params) => (
        <TextField
          {...params}
          label="Catogories"
          sx={{
            width: "100px",
            "& .MuiInputBase-root": { height: "40px" },
          }}
        />
      )}
      sx={{ width: "120px" }}
    />
     <SliderComponent onSliderValueChange={handleSliderValueChange}/>
    <OutlinedInput

      type="text"
      onChange={(e) => {
        setSearchValue(e.target.value); 
      }}

      sx={{ height: "40px", maxWidth: "400px", borderRadius: "15px" }}
    />
    <Button type="submit">
      <SearchIcon sx={{ fontSize: "40px" ,ml:"15px"}} />
    </Button>
    </form>
  </Card>
  )
}

export default SearchBar