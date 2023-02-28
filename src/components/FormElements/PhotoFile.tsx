import React, { ChangeEvent } from 'react'

interface PhotoFileProps{
  avatarUrl: string
  handleFile: (e: ChangeEvent<HTMLInputElement>) => void
}

const PhotoFile = ({avatarUrl, handleFile}: PhotoFileProps) => {
  return (
    <>
      <h3 className='text-2xl text-white font-bold'>
        Adicionar foto de perfil
      </h3>

      <label className='w-[200px] h-[200px] bg-black cursor-pointer rounded-full overflow-hidden'>
        <input
          type={"file"}
          className="hidden"
          onChange={handleFile}
          accept={"image/png, image/jpeg"} />

        <img className='w-full h-full'
          src={avatarUrl? avatarUrl : `https://i1.sndcdn.com/avatars-000437232558-yuo0mv-t500x500.jpg`} />
      </label>

    </>
  )
}

export default PhotoFile