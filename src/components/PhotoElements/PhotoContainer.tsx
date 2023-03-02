import React, { useState } from 'react'
import { baseUrlApi } from '../../utils/baseUrlApi'
import { photo } from '../../utils/types/ElementsInterface'
import { AiFillEye } from 'react-icons/ai'
import ModalPhoto from './ModalPhoto'
import { api } from '../../services/axiosConfig'

interface PhotoContainerProps {
  photos: photo[]
}

const PhotoContainer = ({ photos }: PhotoContainerProps) => {

  const [photoCurrent, setPhotoCurrent] = useState<photo | null>(null)

  async function PhotoClickEventddView(photo: photo){
    if(!photo) return

    setPhotoCurrent(photo)
    await api.put('/photo/view', {
      photo_id: photo.id
    })
  }

  return (
    <div className='grid md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 p-4 w-full justify-center items-center'>

      {photoCurrent && (
        <ModalPhoto setPhotoCurrent={setPhotoCurrent}
        photo={photoCurrent} />
      )}

      {photos.map(photo => (
        <button className='cursor-pointer'
          onClick={() => PhotoClickEventddView(photo)}>
          <img src={`${baseUrlApi}${photo.photo}`}
            className="rounded-lg" />
          <span className='absolute ml-[420px] mt-[-3%] md:ml-[20%] flex font-bold'>
            <AiFillEye className='md:text-4xl text-4xl' />
            {photo.views}
          </span>
        </button>
      ))}
    </div>
  )
}

export default PhotoContainer