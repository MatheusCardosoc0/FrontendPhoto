import React from 'react'
import { category } from '../../utils/types/ElementsInterface'
import { Button } from '../FormElements'

interface categoriesProps{
  categories: category[]
  setCategoryCurrent: React.Dispatch<React.SetStateAction<string>>
}

const Categories = ({categories, setCategoryCurrent}: categoriesProps) => {
  return (
    <div className='flex justify-between w-full overflow-x-scroll'>
      <Button onClick={() => setCategoryCurrent('')}>
        Todos
      </Button>
      {categories.map(category => (
          <Button onClick={() => setCategoryCurrent(category.id)} >
            {category.title}
          </Button>
        ))}
    </div>
  )
}

export default Categories