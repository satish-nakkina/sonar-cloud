/* eslint-disable react/no-children-prop */
import React from "react";
import Typography from "../../Atoms/Typography";
import TextFieldWithLabel from "../../Molecule/TextFieldWithLabel";
import CheckBox from "../../Atoms/CheckBox";
import Button from "../../Atoms/Button";
import GithubSvg from "../../Atoms/Icons/Github";
import GoogleSvg from "../../Atoms/Icons/GoogleSvg";
import {  Box, ThemeProvider } from "@mui/material";
// import Link from "../../Atoms/Link";
import EyeSvg from "../../Atoms/Icons/Eye";
import { makeStyles } from "@mui/styles";
import { FormTheme,InnerTheme } from "../../../Themes/Themes";



export interface FormCompProps{
  name?:string,
}

const Form = ({name}:FormCompProps)=> {

  const useStyles = makeStyles(  {
    
    form:{
      width:"35%",
      height:"87%",
      minHeight:"672px",
      maxWidth:"380px",
      boxShadow:"0px 4px 28px",
      padding:"30px",
      margin:"auto",

      

    },
    header:{
      marginBottom:"10px",
      "@media (max-width: 850px)": {
        fontSize:"1px",
      }
    },
    credentials:{
      display:"flex",
      flexDirection:"column",
      gap:"20px",
      marginBottom:"20px"
    },
    checkBox:{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      marginBottom:"20px"
    },
    signUp:{
      display:"flex",
      justifyContent:"center",
      alignItems:"baseline",
      marginTop:"20px"
    },
    thirdParty:{
      display:"flex",
      flexDirection:"column",
      gap:"20px",
      alignItems:"center",
      marginTop:"20px"
    }

    }
  );
  
  const classes=useStyles()
  return (
     <ThemeProvider theme={FormTheme}>
        <Box className={classes.form}>
            <Box className={classes.header}>
                <Typography children={"Sign in"} variant={"h5"} sx={{marginBottom:"5px"}}/>
                <Typography children={"Please enter your login credentials"} variant={"body2"} sx={{marginBottom:"5px"}}/>
            </Box>
            <Box className={classes.credentials}>
                <TextFieldWithLabel label={"Email"} type="text" />

                <TextFieldWithLabel label={"Password"} type="password" endAdornment={<EyeSvg/>} />
            </Box>
            <Box className={classes.checkBox}>
                <CheckBox label={"Remember me"}/>
                <Typography  children={"Forgot password?"} color={"#224dff"}/>
            </Box>

            <Button label={"Sign in"} variant={"contained"}  />
          
            <ThemeProvider theme={InnerTheme}>
                <Box className={classes.thirdParty}>
                    <Typography children={"or"} variant={"h5"}/>
                    <Button label={"Sign in with Google"} variant={"contained"} startIcon={<GoogleSvg/>} />
                    <Button label={"Sign in with  Github"} variant={"contained"} startIcon={<GithubSvg/>} />
                </Box>
            </ThemeProvider>
            <Box className={classes.signUp}>
                <Typography children={"Don't have an account?"} variant={"body2"}/>
                <Typography  children={"sign up"} color={"#224dff"}/>
            </Box>

        </Box>
     </ThemeProvider>
  );
};

export default Form;
