import { Box } from "@mui/material";
import '../globalStyles/styles.css';
import SearchBar from "../components/SearchBar";
import { useState,useEffect } from "react";
import axios from "axios";
import DataList from "./DataList";



const Search = () => {
    const [search, setSearch] = useState({
        searchValue:"",
        selectedCat:"",
        sliderValue:0
    });

    const [data, setdata] = useState();
    const handleSearchData =(data)=>{
        setSearch(data)
       
        
    }


    useEffect(() => {

      const fetchData = async () => {
        try {
            const response = await axios.post("http://localhost:5000/" ,search
            );
            // console.log("Fetched Data: ", response.data);
            // const data=response.data
            setdata(response.data)
            console.log(response.data.hits.hits);
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
 {data && <DataList dataa={data}/>}
    </Box>
  );
};

export default Search;
