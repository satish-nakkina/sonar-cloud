import React from "react";
import {Meta,Story} from "@storybook/react";

import DisplayIcons,{DisplayIconsProps}from '.'
import HomeSvg from "../../Atoms/Icons/Home";
import CandidateSvg from "../../Atoms/Icons/Candidate";
import LogsSvg from "../../Atoms/Icons/Logs";




export default{
  title:'MOLECULES/Icons',
  component:DisplayIcons

}as Meta<typeof DisplayIcons>


const DisplayIconTemplate: Story<DisplayIconsProps> = (args) => <DisplayIcons {...args}/>

const DisplayIconsComp=DisplayIconTemplate.bind({});

const DisplayIconStyle={
  backgroundColor:"wheat",
  width:"200px"
}

DisplayIconsComp.args={
  
  icons:[{
    name:'HomeSvg',
    element:<HomeSvg  />
  },
  {
    name:'Candidate',
    element:<CandidateSvg />
  },
  {
    name:'Logs',
    element:<LogsSvg />
  }
  ],
  DisplayIconStyle:DisplayIconStyle,
}
export {DisplayIconsComp}; 
