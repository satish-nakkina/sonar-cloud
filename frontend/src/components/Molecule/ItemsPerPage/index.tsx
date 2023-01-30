/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
import { FormControl, MenuItem, Select } from '@mui/material'
import React from 'react'
import Typography from '../../Atoms/Typography'
import styled from 'styled-components';

interface PageList{
  name:string,
  value:number
}
interface ItemsPerPageProps{
  perPage:number,
  pages:PageList[],
  handleChange:any
}
const ItemsPerPage = ({perPage,pages,handleChange}:ItemsPerPageProps) => {

  

  const Items=styled.div`
  
    display:flex;
    gap:20px;
  
  `;
  
  return (
    <Items>
      <Typography children={perPage+" out of 200 results"}  variant="body1" />
      
      <FormControl>
        <Select onChange={handleChange} >
          {pages.map((item)=><MenuItem value={item.value}>{item.name}</MenuItem>)}
        </Select>
      </FormControl>
    </Items>
  )
}

export default ItemsPerPage