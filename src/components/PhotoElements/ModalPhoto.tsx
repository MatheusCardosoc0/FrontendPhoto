import React from 'react'
import { baseUrlApi } from '../../utils/baseUrlApi'
import { photo } from '../../utils/types/ElementsInterface'
import { Button } from '../FormElements'
import { AiFillCloseCircle, AiFillEye } from 'react-icons/ai'

interface ModalPhotoProps {
  setPhotoCurrent: React.Dispatch<React.SetStateAction<photo | null>>
  photo: photo
}

const ModalPhoto = ({ setPhotoCurrent, photo }: ModalPhotoProps) => {
  return (
    <div className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] z-10 bg-gray-100 rounded-lg flex flex-col p-2 gap-2'>

      <button className='text-6xl absolute ml-[500px] mt-[-40px] bg-teal-500 rounded-full hover:text-white'
      onClick={() => setPhotoCurrent(null)}>
        <AiFillCloseCircle />
      </button>

      <div className='flex justify-between items-center'>
        <span className='flex items-center gap-2'>
          <img src={`${baseUrlApi}${photo.User.banner}`}
            className="w-[100px] h-[100px] rounded-full" />
          <h2 className='text-2xl font-bold'>
            {photo.User.name}
          </h2>
        </span>

        <Button stylish='w-[130px] rounded-xl bg-gradient-to-tr from-yellow-500 via-amber-500 to-yellow-700'>
          Doar
        </Button>
      </div>
      <img src={`${baseUrlApi}${photo.photo}`}
        className="h-[320px] w-full" />
      <div className='flex flex-col gap-4'>
        <span className='text-center font-semibold'>
          {photo.description}
        </span>
        <span className='flex justify-between font-bold'>
          <p className='text-blue-500 drop-shadow-[1px_1px_0px_black] uppercase underline decoration-yellow-500 text-2xl'>
            Categoria: {photo.Category.title}
          </p>
          <p className='flex'>
            <AiFillEye className='text-3xl' />
            {photo.views}
          </p>
        </span>
      </div>
    </div>
  )
}

export default ModalPhoto