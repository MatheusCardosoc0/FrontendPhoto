import React from 'react'
import { category } from '../../utils/types/ElementsInterface'
import { Button } from '../FormElements'

interface categoriesProps {
  categories: category[]
  setCategoryCurrent: React.Dispatch<React.SetStateAction<string>>
}

const Categories = ({ categories, setCategoryCurrent }: categoriesProps) => {
  return (
    <div className='flex justify-between w-full overflow-x-scroll'>
      <Button onClick={() => setCategoryCurrent('')}
        stylish={"px-2 py-0 bg-gradient-to-tr from-yellow-500 via-yellow-400 to-yellow-300 w-[100px] hover:brightness-75"}>
        Todos
      </Button>
      {categories.map(category => (
        <Button onClick={() => setCategoryCurrent(category.id)}
          stylish={"px-2 py-0 bg-gradient-to-tr from-yellow-500 via-yellow-400 to-yellow-300 w-[100px] hover:brightness-75"}>
          {category.title}
        </Button>
      ))}
    </div>
  )
}

export default Categories