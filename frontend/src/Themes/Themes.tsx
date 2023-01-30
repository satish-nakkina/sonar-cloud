import { createTheme } from "@mui/material";

export const FormTheme=createTheme({
  palette:{
    primary:{
      main: "#224dff"
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});

export const InnerTheme=createTheme({
  palette:{
    primary:{
      main: "#FFFFFF"
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});



