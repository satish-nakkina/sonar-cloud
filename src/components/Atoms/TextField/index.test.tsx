/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render } from "@testing-library/react"
import TextField from "."
import { text } from "stream/consumers"




describe('TextField',()=>{

  test('TextField should call onChange prop when text is entered',()=>{
    const handleChange = jest.fn()
  const { getByLabelText } = render(
    <TextField label="Name" onChange={handleChange} value="" />
  )
  const textField = getByLabelText('Name')
  fireEvent.change(textField, { target: { value: 'satish' } as HTMLInputElement })
  expect(handleChange).toHaveBeenCalled()

  // const event=handleChange.mock.calls[0][0]
  // expect(event.target.value).toBe('satish')
  
})
})