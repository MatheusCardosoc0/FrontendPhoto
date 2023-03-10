import axios from 'axios'
import type { NextPage } from 'next'
import { FormEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Form, Input, Anchor } from '../components/FormElements'
import { LoginUser } from '../context/fetchFunctionsContext/LoginUser'
import { api } from '../services/axiosConfig'
import { canSSRGuest } from '../utils/canSSRGuest'

const Home: NextPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    dispatch(LoginUser({
      email,
      password
    }))
  }

  return (
    <section className='flex h-screen w-full justify-center flex-col items-center'>
      <Form title='Login' onSubmit={handleSubmit}>
        <Input placeholder='Seu email...' onChange={e => setEmail(e.target.value)}
          type="email" required />
        <Input placeholder='Sua senha...' onChange={e => setPassword(e.target.value)}
          type="password" required />
        <Anchor href='/register'>
          Não possui uma conta?
        </Anchor>
        <Button type='submit'>
          Login
        </Button>
      </Form>
    </section>
  )
}

export default Home

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {}
  }
})
