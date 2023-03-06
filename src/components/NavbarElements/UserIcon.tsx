import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sigOut, stateDataContext } from '../../context/AuthContext'
import { baseUrlApi } from '../../utils/baseUrlApi'
import { User } from '../../utils/types/AuthContextRequirements'

const UserIcon = () => {

  const { user } = useSelector(stateDataContext)

  const [viewOptionsUser, setViewOptionsUser] = useState(false)
  const dispatch = useDispatch()

  return (
    <div className='flex flex-col'>
      <button onClick={() => setViewOptionsUser(prev => !prev)}>
        <img src={user.banner ? `${baseUrlApi}${user.banner}` : 'https://i1.sndcdn.com/avatars-000437232558-yuo0mv-t500x500.jpg'}
          className="w-[60px] h-[60px] rounded-full" />
      </button>
      {viewOptionsUser && (
        <>
          <Link className='absolute text-sm w-[120px] bg-blue-400 rounded-md  ml-[-44px] mt-[60px] z-10 font-bold px-2 hover:brightness-200 cursor-pointer'
            href='/post'>
            Postar imagem
          </Link>
          <button className='absolute text-sm w-[120px] bg-blue-400 rounded-md  ml-[-44px] mt-[90px] z-10 font-bold px-2 hover:brightness-200 cursor-pointer'
            onClick={() => dispatch(sigOut())}>
            Deslogar
          </button>
        </>
      )}
    </div>
  )
}

export default UserIcon