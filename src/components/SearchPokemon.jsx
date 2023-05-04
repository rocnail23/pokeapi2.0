import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import "./styles/SearchPokemon.css"
const SearchPokemon = ({style}) => {
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()

    const submit = (data) => {
      let id;

        if(data.pokemon == ""){
         id = 1
          return navigate(`/pokemon/${id}`)
        }
         id = data.pokemon.trim().toLowerCase() 
        navigate(`/pokemon/${id}`)
    }

  return (
    <div className={style}>
        <form className='form_search' onSubmit={handleSubmit(submit)}>
        <input className="input_pokemon"  {...register("pokemon")} type="text"  />
        <button>buscar</button>
        </form>
    </div>
  )
}

export default SearchPokemon