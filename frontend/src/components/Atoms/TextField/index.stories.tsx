import React from "react";
import {Meta,Story} from "@storybook/react";

import TextField,{TextFieldCompProps} from './index'


export default{
  title:'ATOMS/TextField',
  component:TextField

}as Meta<typeof TextField>


const TextFieldTemplate: Story<TextFieldCompProps> = (args) => <TextField {...args}/>

const Filled=TextFieldTemplate.bind({});

Filled.args={
  variant:'filled',
  size:'small',
}
export {Filled}; 

const Outlined=TextFieldTemplate.bind({});

Outlined.args={
  variant:'outlined',
  size:'small'
}
export {Outlined};
