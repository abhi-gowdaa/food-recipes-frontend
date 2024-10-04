import { Box } from "@mui/material";
import '../globalStyles/styles.css';
import SearchBar from "../components/SearchBar";
import { useState,useEffect } from "react";
import axios from "axios";



const Search = () => {
    const [search, setSearch] = useState({
        searchValue:"",
        selectedCat:"",
        sliderValue:""
    });
    const handleSearchData =(data)=>{
        setSearch(data)
       
        
    }


    useEffect(() => {

      const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/" ,search
            );
            console.log("Fetched Data: ", response.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };
        console.log(search);
        if (search.searchValue || search.selectedCat || search.sliderValue) {
            fetchData();   
        }
    }, [search]);

      
  

  return (
    <Box
    className="data-card"
      component="section"
      sx={{
        p: 2,
        m: "auto",
        mt: "50px",
        mb:"10px",
        maxWidth: "60rem",
        height: "500px",
        borderRadius: "25px",
      }}
    >
  <SearchBar onSearchSubmit={handleSearchData} />
    </Box>
  );
};

export default Search;
