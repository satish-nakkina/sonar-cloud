/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { render, fireEvent } from '@testing-library/react'
import Button from "."


describe('Button',()=>{
  test('should call onClick prop when clicked',()=>{
    const handleClick = jest.fn()
    const { getByText } = render(<Button onClick={handleClick} label={"click me"}/>)
    
    const customButton=getByText(/click me/i)
    fireEvent.click(customButton)
     expect(handleClick).toHaveBeenCalled()
  })
  test('should have text "Click me"', () => {
    const { getByText } = render(<Button label={"click me"}/>)
    const button = getByText(/Click me/i)
    expect(button).toBeDefined()
  })
})