/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
import { TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import styled from "styled-components";

export interface ItemProps {
  name: string;
  adjudication: string | null;
  status: string;
  location: string;
  date: string;
}
export interface TableDataProps {
  data: ItemProps[];
  width?: string;
  
}
const TableData = ({
  data,
  width,
  
}: TableDataProps) => {
  // {item.status === "CLEAR" ? (
  //   <StyledStatusCell>{array.status}</StyledStatusCell>
  // ) : (
  //   <StyledConsiderCell>{array.status}</StyledConsiderCell>
  // )}
  
  const TableClearCell=styled.div`
  
    color: #17A076;
    border: 1px solid #F2FCFB;
    border-radius: 4px;
  `;

  const TableConsiderCell=styled.div`
  
    color: #A08817;
    border: 1px solid #FAF8EB;
    border-radius: 4px;
  `;
  
  const CellColor=styled.div`
  
    color: #224DFF;
  `
  return (
    <>
      <TableBody>
        {data.map((item) => (
          <TableRow>
            <TableCell width="24%"><CellColor>{item.name}</CellColor></TableCell>
            <TableCell width={width}>{"-"}</TableCell>
            <TableCell width={width}>
              {item.status === "CLEAR" ? (
                <TableClearCell>{item.status}</TableClearCell>
              ) : (
                <TableConsiderCell>{item.status}</TableConsiderCell>
              )}
            </TableCell>
            <TableCell width={width}>{item.location}</TableCell>
            <TableCell width={width}>{item.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default TableData;
