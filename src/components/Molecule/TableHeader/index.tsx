/* eslint-disable react/jsx-key */
import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";


 interface ItemProps{
  name:string
}
 interface TableHeaderProps{
  heading:ItemProps[],
  width:string
}
const TableHeader = ({heading,width}:TableHeaderProps) => {
  return (
    <TableHead>
      <TableRow>
        {heading.map((item)=>
          <TableCell width={width}>{item.name}</TableCell>
        )}
      </TableRow> 
    </TableHead>
  );
};

export default TableHeader;
