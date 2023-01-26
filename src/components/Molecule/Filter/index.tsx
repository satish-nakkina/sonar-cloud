/* eslint-disable react/jsx-key */
import React from 'react';
import CheckBox from '../../Atoms/CheckBox';


export interface FilterProps{
  status:string[],
  Adjudication:string[],
}
const Filter=()=> {
  const status=['All status','Clear','Consider']

  const Adjudication=['All','Engaged','Pre adverse action']

  return (
    <div className='filters'>
      <h1>Filters</h1>
      <div className="status">
        <h2>status</h2>
        {
          status?.map((item)=>{
            return(
              <CheckBox label={item}/>
            )
          })
        }
      </div>
      <div className="adjudication">
        <h2>Adjudication</h2>
        {
          Adjudication?.map((item)=>{
            return(
              <CheckBox label={item}/>
            )
          })
        }
      </div>
       
    </div>

    
  )
}

export default Filter;
