import React, { SVGProps } from 'react'

 
 const HomeSvg=(props:SVGProps<SVGSVGElement>) =>{

  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fillRule="evenodd" clipRule="evenodd" d="M0 0V8.25H8.25V0H0ZM0 9.75V18H8.25V9.75H0ZM9.75 0V8.25H18V0H9.75ZM6.75 6.75H1.5V1.5H6.75V6.75ZM16.5 6.75H11.25V1.5H16.5V6.75ZM6.75 16.5H1.5V11.25H6.75V16.5Z" fill="#3E414D"/>
<path fillRule="evenodd" clipRule="evenodd" d="M9.75 18V9.75H18V18H9.75ZM16.5 16.5H11.25V11.25H16.5V16.5Z" fill="#224DFF"/>
</svg>

  )
}

export default HomeSvg