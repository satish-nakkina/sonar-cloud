import React from "react";
import {Meta,Story} from "@storybook/react";
import Filter,{FilterProps} from ".";


export default{
  title:'MOLECULES/Filter',
  component:Filter

}as Meta<typeof Filter>


const Template: Story<FilterProps> = (args) => <Filter />

const Default=Template.bind({});

// const FilterStyle={
//   color:'white',
// }

  
// Default.args={
//   status:'Label',
//   FilterStyle:FilterStyle
// }

export {Default}; 



