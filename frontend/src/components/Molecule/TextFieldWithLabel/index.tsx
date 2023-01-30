/* eslint-disable react/no-children-prop */


import React from 'react'
import TextField from '../../Atoms/TextField'
import Typography from '../../Atoms/Typography'


export interface TextFieldWithLabelProps{

   label:string,
   type:'text'|'password',
   textfield?:string,
   endAdornment?:React.ReactNode

}
const TextFieldWithLabel=({label,type,endAdornment}:TextFieldWithLabelProps)=>{


  return (
     <div>
        <Typography children={label} />
        <TextField  variant={'outlined'} size={'small'} type={type} endAdornment={endAdornment}/>
     </div>
  )
}

export default TextFieldWithLabel