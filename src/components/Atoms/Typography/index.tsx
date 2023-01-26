/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Typography as MuiTypography, TypographyProps} from "@mui/material";
import { color } from "@mui/system";
import { string } from "prop-types";

export interface TypographyCompProps  {
  children: any;
  variant?: any;
 
  TypographyCompStyle?: React.CSSProperties;
  color?:string
}

const Typography = ({ children,variant ,color ,...props}: TypographyProps) => {
  return (
    <div data-testid={'typography-text'}>
      <MuiTypography variant={variant} sx={{color:{color}}}   {...props}>{children}</MuiTypography>
      
    </div>
  );
};

export default Typography;
