/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, Pagination as MuiPagination} from "@mui/material";
import React from "react";

interface PaginationProps{
  count:number,
  handleChange:any,
  pageNumber:number
}
const Pagination = ({count,handleChange,pageNumber}:PaginationProps) => {
  

  return (
    <Stack spacing={2}>
       <MuiPagination count={count}  onChange={handleChange} page={pageNumber}/> 
      
    </Stack>
  );
};

export default Pagination;
