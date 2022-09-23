import React from 'react'
import './Button.css'

type Props = {
  text: string,
  handleClick?: any,
}
const Button = ({ text, handleClick }: Props) => {
  return (
    <button className='button' onClick={handleClick}>{text}</button>
  )
}

export default Button