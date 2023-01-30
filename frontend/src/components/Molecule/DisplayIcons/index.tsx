/* eslint-disable react/jsx-key */
import React from 'react'

export interface IconsType{

  name:string;
  element:JSX.Element;
 
}
export interface DisplayIconsProps{

  icons:IconsType[];
  
  DisplayIconStyle:React.CSSProperties;

}
const DisplayIcons:React.FC<DisplayIconsProps>=({icons,DisplayIconStyle} )=> {
  return (
    <div>
    {icons.map((item)=>{
      return(
      <div style={{display:"flex",marginBottom:"30px",...DisplayIconStyle}}>
        <div style={{marginRight:"30px"}}>
          {item.element}
        </div>
        <div>
          
          {item.name}
        </div>
      </div>
      )
    })}
    </div>
  )
}

export default DisplayIcons