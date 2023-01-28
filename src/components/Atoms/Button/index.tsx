import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";
 export interface ButtonCompProps extends ButtonProps  {
  label :string;
  onClick?:()=>void
  startIcon?:JSX.Element
  variant?:'text'|'contained'|'outlined';
  propertyA?:string;

  buttonStyles?:React.CSSProperties;
  
}

const Button = ({label,onClick,startIcon,variant,...props}:ButtonCompProps) =>{


  
  return (
    <MuiButton onClick={onClick} variant={variant} startIcon={startIcon}   {...props} fullWidth>
      {label} 
    </MuiButton>
  ) 

}
Button.defaultProps={
  backgroundColor:'blue'
}
export default Button