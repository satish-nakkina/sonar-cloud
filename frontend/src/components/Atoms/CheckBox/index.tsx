import React from "react";
import { Checkbox as MuiCheckBox, FormGroup, FormControlLabel, CheckboxProps } from "@mui/material";
export interface CheckBoxCompProps extends CheckboxProps {
  label: string;
  onChange?:(event:React.ChangeEvent<HTMLInputElement>)=>void;
  checked?:boolean;
  CheckBoxCompStyle?: React.CSSProperties;
}

const CheckBox= ({label,checked,onChange,...props}: CheckBoxCompProps) => {
  return (
    <MuiCheckBox  checked={checked} onChange={onChange} inputProps={{ 'aria-label': label }}  {...props}/> 
    
  );
};

export default CheckBox;
