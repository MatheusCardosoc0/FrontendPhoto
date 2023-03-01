import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode
  stylish?: string
}

const Button = ({children,stylish, ...rest}: ButtonProps) => {
  return (
    <button className={`w-full bg-gradient-to-tr from-[#26ff0084] via-[#00ff4c8c] to-[#25ff3075] p-4 drop-shadow-[-3px_-3px_0px_black] text-2xl font-bold text-white hover:bg-[#0aff53] hover:text-[#000]
    ${stylish && stylish}`}
    {...rest}>
      {children}
    </button>
  )
}

export default Button