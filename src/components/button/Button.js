import React from 'react'
import s from "./Button.module.scss"

const Button = ({text='', type }) => {
  return (
    <button className={s.button} type={type}><span>{text}</span></button>
  )
}

export default Button