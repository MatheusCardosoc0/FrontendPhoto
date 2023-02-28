import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  stylish?: string
}

const Input = ({stylish, ...rest}: InputProps) => {
  return (
    <input className={`w-full bg-gradient-to-tr from-[#00ffd584] via-[#005eff8c] to-[#25ffff75] p-3 drop-shadow-[-3px_-3px_0px_black]  rounded-md ${stylish && stylish} text-black outline-none placeholder:text-gray-700 font-bold text-xl`}
    {...rest} />
  )
}

export default Input