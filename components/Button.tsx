import * as React from 'react'

interface Props {
  text: string
}

export const Button = ({ text }: Props): JSX.Element => {
  return <button>{text}</button>
}
