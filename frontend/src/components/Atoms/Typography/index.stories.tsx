import React from "react";
import {Meta,Story} from "@storybook/react";

import Typography,{TypographyCompProps} from './index'


export default{
  title:'ATOMS/Typography',
  component:Typography

}as Meta<typeof Typography>


const TypographyTemplate: Story<TypographyCompProps> = (args) => <Typography {...args}/>

const Default=TypographyTemplate.bind({});

  
Default.args={
  children:'text',
}

export {Default}; 



