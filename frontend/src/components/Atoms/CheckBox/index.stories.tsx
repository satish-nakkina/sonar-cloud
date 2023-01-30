import React from "react";
import {Meta,Story} from "@storybook/react";

import CheckBox,{CheckBoxCompProps} from './index'


export default{
  title:'ATOMS/CheckBox',
  component:CheckBox

}as Meta<typeof CheckBox>


const CheckBoxTemplate: Story<CheckBoxCompProps> = (args) => <CheckBox {...args}/>

const Default=CheckBoxTemplate.bind({});



  
Default.args={
  label:"label"
}

export {Default}; 



