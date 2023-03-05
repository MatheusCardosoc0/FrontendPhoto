import React from 'react'
import { Input } from '../FormElements'

interface SearchbarProps{
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

const Searchbar = ({setQuery}: SearchbarProps) => {
  return (
    <div>
      <Input type={"search"}
        placeholder="buscar..."
        onChange={e => setQuery(e.target.value)} />
    </div>
  )
}

export default Searchbar