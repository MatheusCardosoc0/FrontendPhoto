import React from 'react'
import { useSelector } from 'react-redux'
import { stateDataContext } from '../../context/AuthContext'
import { baseUrlApi } from '../../utils/baseUrlApi'
import { User } from '../../utils/types/AuthContextRequirements'

const UserIcon = () => {

  const { user } = useSelector(stateDataContext)

  return (
    <div>
      <img src={`${baseUrlApi}${user.banner}`}
      className="w-[60px] h-[60px] rounded-full" />
    </div>
  )
}

export default UserIcon