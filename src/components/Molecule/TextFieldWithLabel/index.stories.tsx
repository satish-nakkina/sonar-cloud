/* eslint-disable react/react-in-jsx-scope */
import { Meta, Story } from "@storybook/react";
import TextFieldWithLabel, { TextFieldWithLabelProps } from ".";



export default{
  title:'MOLECULES/TextFieldWithLabel',
  component:TextFieldWithLabel
}as Meta<typeof TextFieldWithLabel>

// eslint-disable-next-line react/react-in-jsx-scope
const TextFieldWithLabelTemplate:Story<TextFieldWithLabelProps>=(args)=><TextFieldWithLabelTemplate {...args}/>

const Default=TextFieldWithLabelTemplate.bind({})

Default.args={
    label:'label',
    type:'text'
    // textfield:<InputField variant={"filled"} size={"small"}/>
}

export {Default}