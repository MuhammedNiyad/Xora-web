import clsx from 'clsx';
import React from 'react'

interface buttonProps {
    icon: string;
    children: string;
    href?: string
}
const Button = ({icon, children, href}: buttonProps) => {
  return href? (
    <a href="" className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group")}></a>
  ) : (
    <button className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group")}>Button</button>
  )
}

export default Button