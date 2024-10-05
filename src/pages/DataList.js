
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import "../globalStyles/styles.css"
import Rating from '@mui/material/Rating';
import { Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const columns = [
  {
    field: 'title',
    headerName: 'title',
    width: 250,
    editable: false,
  },
  {
    field: 'desc',
    headerName: 'description',
    minwidth: 410,
    flex:1,
    editable: false,
  },
  {
    field: 'rating',
    headerName: 'rating',
    type: 'number',
    minwidth: 300,
    flex:2,
    renderCell: (params) => (
      <Rating name="read-only" value={params.value} readOnly />),
    editable: false,
  },
   
];

 
export default function DataList({data}) {
  const navigate=useNavigate()
   if(data.length ===0){
    return <Card sx={{ textAlign:"center",mt:"25px",alignContent:"center",height: 200, width: '100%', overflow:"auto",borderRadius: "10px"}}><p>No recipes found, please refine your search</p></Card>
   }
       const rows = data.map((item) => ({
      id: item._id,
      title: item._source['title'],
      desc: item._source['desc'],
      rating: item._source['rating'],
  }));

 const handleClick=(params)=>{
   const rowID=params.row.id;
   console.log(rowID);
   const rowData=data.filter((item)=>item._id===rowID)
   if(rowData){
    navigate(`details/${params.row.id}`,{state:{data:rowData}})
   }
 }
    return (
    <Box sx={{ mt:"25px",height: 410,border:"none", width: '100%', overflow:"auto",borderRadius: "10px"}}>
      <DataGrid
       sx={{
        '.MuiDataGrid-columnSeparator': {
          display: 'none',
        },
        '&.MuiDataGrid-root': {
          border: 'none',
          bgcolor:"rgba(250,250,250,0.1)",
        },
        '& .MuiDataGrid-cell:hover': {
          color: 'inherit',  
        },
        maxWidth:"100%",
        overflow:"auto",
       
      

      }}
 
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 3,
            },
          },
        }}
        pageSizeOptions={[3,5,10]}
        autoHeight
        getRowClassName={() => "custom-row"}
        rowHeight={100}
        onRowClick={(params)=> handleClick(params)}
        disableRowSelectionOnClick
        
      />
    </Box>
  );
}
