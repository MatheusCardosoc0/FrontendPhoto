import React, { ReactNode } from 'react'

const Navbar = ({children}: {children: ReactNode}) => {
  return (
    <nav className='flex justify-between w-full p-4 bg-gradient-to-tr from-blue-400 via-purple-400 to-violet-600'>
      {children}
    </nav>
  )
}

export default Navbar