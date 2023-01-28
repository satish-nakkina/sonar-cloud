import React from "react";
import {Meta,Story} from "@storybook/react";
import FormComp,{FormCompProps} from ".";


export default{
  title:'MOLECULES/FormComp',
  component:FormComp

}as Meta<typeof FormComp>


const Template: Story<FormCompProps> = () => <FormComp />

const Default=Template.bind({});

// const FormCompStyle={
//   color:'white',
// }

  
// Default.args={
//   status:'Label',
//   FormCompStyle:FormCompStyle
// }

export {Default}; 



