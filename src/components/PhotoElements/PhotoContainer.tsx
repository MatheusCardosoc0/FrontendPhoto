import React from 'react'
import { baseUrlApi } from '../../utils/baseUrlApi'
import { photo } from '../../utils/types/ElementsInterface'
import { AiFillEye } from 'react-icons/ai'

interface PhotoContainerProps{
  photos: photo[]
}

const PhotoContainer = ({photos}: PhotoContainerProps) => {
  return (
    <div className='grid md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 p-4 w-full justify-center items-center'>
      {photos.map(photo => (
        <div className='cursor-pointer'>
          <img src={`${baseUrlApi}${photo.photo}`}
          className="rounded-lg" />
          <span className='absolute ml-[420px] mt-[-3%] md:ml-[20%] flex font-bold'>
            <AiFillEye className='md:text-4xl text-4xl' />
            {photo.views}
          </span>
        </div>
      ))}
    </div>
  )
}

export default PhotoContainer