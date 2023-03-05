import React, { FormHTMLAttributes, ReactNode } from 'react'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
  title: string
}

const Form = ({ children, title, ...rest }: FormProps) => {
  return (
    <form className='w-[90%] sm:w-[500px] flex flex-col justify-center items-center p-4 rounded-xl gap-5 bg-gradient-to-tr from-[#ffd90084] via-[#d5d5008c] to-[#fbff0075] drop-shadow-[-3px_-3px_0px_black] mt-40'
      {...rest}>

      <h2 className='text-5xl font-bold text-white mb-5'>
        {title}
      </h2>
      {children}

    </form>
  )
}

export default Form