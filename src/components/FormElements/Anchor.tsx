import React, { AnchorHTMLAttributes, ReactNode } from 'react'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

const Anchor = ({children, ...rest}: LinkProps) => {
  return (
    <a className='text-xl font-bold text-white text-start w-full cursor-pointer'
    {...rest}>
      {children}
    </a>
  )
}

export default Anchor