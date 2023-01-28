/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface IconsProps{

  svg:any;
}
const  Icons=({svg}:IconsProps)=> {
  return (
   <div>{svg}</div>
  )
}

export default Icons