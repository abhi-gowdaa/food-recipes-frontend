import { Box } from "@mui/material";
import '../globalStyles/styles.css';
import SearchBar from "../components/SearchBar";
import { useState,useEffect } from "react";
import axios from "axios";
import DataList from "./DataList";
import CircularProgress from '@mui/material/CircularProgress';  


const Search = () => {
    const [search, setSearch] = useState({
        searchValue:"",
        selectedCat:"",
        sliderValue:0
    });

    const [resData, setResData] = useState();
    const [loading,setLoading]=useState(false)


    const handleSearchData =(data)=>{
        localStorage.removeItem('searchData');
        setSearch(data)
   
    }


    useEffect(() => {

      const fetchData = async () => {
        try {
           setLoading(true)
            const response = await axios.post("http://localhost:5000/" ,search
            );
             console.log("Fetched Data: ", response.data);
            // const data=response.data
            setResData(response.data.hits.hits);
            setLoading(false)
            localStorage.setItem('searchData', JSON.stringify(response.data.hits.hits));
            
             

        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };
    const saveData = localStorage.getItem('searchData');
        console.log(search);
        if (saveData) {
          setResData(JSON.parse(saveData));   
        } else if (search.searchValue || search.selectedCat || search.sliderValue) {
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
        overflow:"hidden",
        borderRadius: "25px",
      }}
    >
  <SearchBar onSearchSubmit={handleSearchData} />
  {loading &&  <div style={{margin:"50px",marginLeft:"440px"}}><CircularProgress/></div> }
 {resData && <DataList data={resData}/>}
    </Box>
  );
};

export default Search;
