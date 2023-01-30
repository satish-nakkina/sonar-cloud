import React from "react";
import {TextField as MuiTextField, OutlinedInputProps, StandardTextFieldProps} from "@mui/material"

 export interface TextFieldCompProps  {

  /** variant to use */
  value?:string;
  label?:string;
  onChange?:(event: React.ChangeEvent<HTMLInputElement>)=>void;
  variant?:'filled'|'outlined';
  type?:'text'|'password';
  size?:'small'|'medium';
  endAdornment?:React.ReactNode;
}

/** special button */
 const TextField = ({value,label,onChange,variant,size,type,endAdornment,...props}:TextFieldCompProps ) =>{

  
  return (
    <MuiTextField id="standard-basic" value={value} label={label} onChange={onChange} variant={variant} size={size} type={type} InputProps={{endAdornment:endAdornment}} {...props} fullWidth/>
  )
}

export default TextField