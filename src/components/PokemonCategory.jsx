import React, { createElement, useEffect, useState } from 'react'
import "./styles/PokemonCategory.css"
import { useForm } from 'react-hook-form'
import axios from 'axios'
const PokemonCategory = ({setSelect}) => {
const [category, setCategory] = useState(null)
  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/type/"
    axios.get(url)
    .then(res => setCategory(res.data.results))
    .catch(err => console.log(err))
  },[])
 
  const handlechange = (e) =>{
    setSelect(e.target.value)
  }
  const urltype = (string) => {
   return string.slice(26)
  }

  
  

  return (
    <div className='container_category'>
     <form className='form_select'>
      <select className='select' onChange={handlechange} name="" id="">
        <option value="pokemon?limit=10&offset=0">all</option>
      {
      category?.map(category => (
      <option value={urltype(category.url)}>{category.name}</option>
      ))
     }
      </select>
     </form>
    </div>
  )
}

export default PokemonCategory