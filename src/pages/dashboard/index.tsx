import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stateDataContext } from '../../context/AuthContext'
import { GetDataUserAuthenticated } from '../../context/fetchFunctionsContext/GetDataUserAuthenticated'
import { setupClient } from '../../services/axiosConfig'
import { canSSRAuth } from '../../utils/canSSRApp'

const Dashboard = () => {

  const dispatch = useDispatch()
  const {user} = useSelector(stateDataContext)

  useEffect(() => {
    dispatch(GetDataUserAuthenticated())
  },[])

  return (
    <div>Dashboard { user.name}</div>
  )
}

export default Dashboard

export const getServerSideProps = canSSRAuth(async (ctx) => {
  /**
   * const apiClient = setupClient(ctx)

  const response = await apiClient.get('/order/list')
   */

 // console.log(response.data)

  return {
    props: {}
  }
})