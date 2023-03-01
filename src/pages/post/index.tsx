import Router from 'next/router'
import React, { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Form, Input, PhotoFile, Select } from '../../components/FormElements'
import { api, setupClient } from '../../services/axiosConfig'
import { canSSRAuth } from '../../utils/canSSRApp'
import { category, photoElements } from '../../utils/types/ElementsInterface'

interface postImageProps{
  categories: category[]
}

const index = ({categories}: postImageProps) => {

  const [image, setImage] = useState<any>(null)
  const [avatarUrl, setAvatarUrl] = useState('')
  const [categoryCurrent, setCategoryCurrent] = useState('')
  const [imageElements, setImageElements] = useState<photoElements>({
    description: '',
    title: ''
  })

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return

    const image = e.target.files[0]

    if (!image) return

    if (image.type == 'image/png' || image.type == 'image/jpeg') {
      setImage(image)
      setAvatarUrl(URL.createObjectURL(image))
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      if (!imageElements || !categoryCurrent || image == null) toast.warning("Preencha tdoso os campos")

      const { description, title } = imageElements

      const data = new FormData()

      data.append("description", description)
      data.append("title", title)
      data.append("categoryId", categoryCurrent)
      data.append("file", image)

      await api.post('/photo', data)

      Router.push('/dashboard')

    } catch (error: any) {
      toast.error('Erro ao postar imagem')
      console.log(error.message)
    }
  }

  function handleImageElements(name: 'title' | 'description', e: ChangeEvent<HTMLInputElement>){
    setImageElements({
      ...imageElements,
      [name]: e.target.value
    })
  }

  console.log(categoryCurrent)

  return (
    <div className='w-full h-screen flex justify-center items-center pb-40'>
      <Form title='Enviar imagem'
      onSubmit={handleSubmit}>
        <PhotoFile avatarUrl={avatarUrl}
          handleFile={handleFile}
          type="image" />
        <Select categories={categories}
        setCategoryCurrent={setCategoryCurrent} />

        <Input placeholder='Titulo da imagem...'
        onChange={e => handleImageElements('title', e)}
        value={imageElements.title}
        type="text"
        required />

        <Input placeholder='Descrição...'
        onChange={e => handleImageElements('description', e)}
        value={imageElements.description}
        type="text"
        required />

        <Button type='submit'>
          Postar
        </Button>
      </Form>
    </div>
  )
}

export default index

export const getServerSideProps = canSSRAuth(async (ctx) => {

  const api = setupClient(ctx)
  
  const response = await api.get('/categories')

  return {
    props: {
      categories: response.data
    }
  }
})