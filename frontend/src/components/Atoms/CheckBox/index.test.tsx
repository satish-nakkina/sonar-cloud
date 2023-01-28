/* eslint-disable react/react-in-jsx-scope */

import { render, fireEvent } from '@testing-library/react'
import CheckBox from "."



describe('CheckBox',()=>{

  test('checkbox should call onChange prop when clicked',()=>{
    const handleChange=jest.fn()
    const {getByLabelText}=render(<CheckBox label="Remember me" onChange={handleChange} checked={false}/>)
    const customCheckBox=getByLabelText('Remember me')
    fireEvent.click(customCheckBox)
    expect(handleChange).toHaveBeenCalled()
  })
})