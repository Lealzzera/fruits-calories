import React from 'react'

type Props = {
  text: string,
  handleClick: any,
}
const Button = ({ text, handleClick }: Props) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

export default Button