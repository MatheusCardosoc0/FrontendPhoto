import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Searchbar, UserIcon } from '../../components/NavbarElements'
import Categories from '../../components/NavbarElements/Categories'
import { PhotoContainer } from '../../components/PhotoElements'
import { stateDataContext } from '../../context/AuthContext'
import { GetDataUserAuthenticated } from '../../context/fetchFunctionsContext/GetDataUserAuthenticated'
import { api, setupClient } from '../../services/axiosConfig'
import { canSSRAuth } from '../../utils/canSSRApp'
import { category, photo } from '../../utils/types/ElementsInterface'


interface DashboardProps {
  categories: category[]
  photos: photo[]
}

const Dashboard = ({ categories, photos }: DashboardProps) => {

  const [categoryCurrent, setCategoryCurrent] = useState('')
  const [photosCurrent, setPhotosCurrent] = useState<photo[]>([])
  const [query, setQuery] = useState("");
  const filteredFotos = photos.filter(
    (foto) =>
      foto.title.toLowerCase().includes(query.toLowerCase()) ||
      foto.description.toLowerCase().includes(query.toLowerCase())
  );

  const dispatch = useDispatch()

  async function GetPhotosById(){
    const response  = await api.get(`/photos/${categoryCurrent}`)

    setPhotosCurrent(response.data)
  }

  useEffect(() => {
    dispatch(GetDataUserAuthenticated())
  }, [])
  useEffect(() => {
    GetPhotosById()
  },[categoryCurrent])

  return (
    <main className='w-full overflow-x-hidden'>
      <Navbar>
        <Searchbar setQuery={setQuery} />
        <UserIcon />
      </Navbar>
      <Categories categories={categories} setCategoryCurrent={setCategoryCurrent} />
      <PhotoContainer photos={query? filteredFotos : photosCurrent} />
    </main>
  )
}

export default Dashboard

export const getServerSideProps = canSSRAuth(async (ctx) => {

  const apiClient = setupClient(ctx)

  const categories = await apiClient.get('/categories')

  const photos = await apiClient.get('/photos')

  return {
    props: {
      categories: categories.data,
      photos: photos.data
    }
  }
})