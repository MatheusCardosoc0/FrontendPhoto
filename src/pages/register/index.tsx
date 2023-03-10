import Router from 'next/router'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { Anchor, Button, Form, Input, PhotoFile } from '../../components/FormElements'
import { api } from '../../services/axiosConfig'
import { canSSRGuest } from '../../utils/canSSRGuest'

interface userInformations {
  name: string
  email: string
  password: string
}

const Register = () => {

  const [userInformations, setUserInformations] = useState<userInformations>({
    email: '',
    name: '',
    password: ''
  })
  const [avatarImage, setAvatarImage] = useState<any>(null)
  const [imageUrl, setImageUrl] = useState('')

  function handleUserInformations(e: ChangeEvent<HTMLInputElement>, atribute: 'email' | 'name' | 'password') {
    setUserInformations({
      ...userInformations,
      [atribute]: e.target.value
    })
  }

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return

    const image = e.target.files[0]

    if (!image) return

    if (image.type === 'image/jpeg' || image.type === 'image/png') {
      setAvatarImage(image)
      setImageUrl(URL.createObjectURL(image))
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      if (!userInformations) toast.warning("Preencha tdoso os campos")

      const { email, name, password } = userInformations

      const data = new FormData()

      data.append("name", name)
      data.append("password", password)
      data.append("email", email)
      data.append("file", avatarImage)

      await api.post('/register', data)

      Router.push('/')

    } catch (error: any) {
      toast.error('Erro ao cadastrar')
      console.log(error.message)
    }
  }

  return (
    <section className='flex h-screen w-full justify-center flex-col items-center mb-40'>
      <Form title='Cadastre-se' onSubmit={handleSubmit}>
        <PhotoFile handleFile={handleFile} avatarUrl={imageUrl}
        type="avatar" />
        <Input placeholder='Seu Nome...'
          onChange={e => handleUserInformations(e, 'name')}
          value={userInformations.name} />
        <Input placeholder='Seu Email...'
          onChange={e => handleUserInformations(e, 'email')}
          value={userInformations.email} />
        <Input placeholder='Sua Senha...'
          onChange={e => handleUserInformations(e, 'password')}
          value={userInformations.password} />
        <Anchor href='/'>
          J?? possui uma conta?
        </Anchor>
        <Button type='submit'>
          Cadastrar
        </Button>
      </Form>
    </section>
  )
}

export default Register

export const getServerSideProps = canSSRGuest(async ctx => {
  return{
    props: {}
  }
})