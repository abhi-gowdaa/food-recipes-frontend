import { MainNavigation } from "../components/MainNavigation"
import { Box } from "@mui/material" 


export function Error(){

    return <>
    <MainNavigation/>
    <main>
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
        bgcolor:"#fff",
        textAlign:"center",
       justifyContent:"center"
      }}
    >
        <h1>An Error Occured</h1>
        <p>could not find this page!</p>
        </Box>
    </main>
    </>
}