import React from 'react'
import { category } from '../../utils/types/ElementsInterface'

interface SelectProps{
  categories: category[]
  setCategoryCurrent: React.Dispatch<React.SetStateAction<string>>
}

const Select = ({categories,setCategoryCurrent}: SelectProps) => {
  return (
    <select className='text-xl rounded-lg p-2 bg-red-500 text-white font-bold w-[264px]'
    onChange={e => setCategoryCurrent(e.target.value)}>
      <option value={""}>
        Selecione a categoria
      </option>
      {categories && categories.map(category => (
        <option key={category.id} value={category.id}>
          {category.title}
        </option>
      ))}
    </select>
  )
}

export default Select