import React from "react";
import {Meta,Story} from "@storybook/react";

import Button,{ButtonCompProps} from './index';
import GithubSvg from "../Icons/Github";

import {action,actions} from '@storybook/addon-actions'

export default{
  title:'ATOMS/ButtonComp',
  component:Button,
  argTypes: { 
    propertyA: {
      options: ['Item One', 'Item Two', 'Item Three'],
      control: { type: 'select' } // Automatically inferred when 'options' is defined
    },
    variantColor:{control:'text'},
    children:{control:'text'},
    onClick: { action: 'clicked' } ,
    onMouseOver:{action:'mouseOver'}
  },

}as Meta<typeof Button>


const ButtonTemplate: Story<ButtonCompProps> = (args) => <Button {...args}/>

const contained=ButtonTemplate.bind({});



contained.args={
  variant:'contained',
  label:'contained',
  propertyA:'Item One',
}
export {contained}; 

const Text=ButtonTemplate.bind({});
Text.args={
  variant:'text',
  label:'text',

}
export {Text};

const ButtonWithIcon=ButtonTemplate.bind({});
ButtonWithIcon.args={
  variant:'outlined',
  label:'Github',
  startIcon:<GithubSvg/>
  
}
export {ButtonWithIcon};
