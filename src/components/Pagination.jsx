import React, { useState } from 'react'
import "./styles/Pagination.css"
import { set } from 'react-hook-form'
const Pagination = ({totalPokemons,pages,pokemonPerPages, currentPages}) => {
    
const totalPagination = []


console.log(currentPages)



for(let i = 1; i < totalPokemons / pokemonPerPages; i++){
    totalPagination.push(i)
}





  return (
    <div className='container_pagination'>
    <ul className='pagination_list'>
    {
        totalPagination.map(number => {
            return <li onClick={() => pages(number)} className={`pagination_button ${currentPages == number && "button_select"}`} key={number}>
                {number}
            </li>
        })
    }
    
    
    
            
        </ul>
        
    </div>
  )
}

export default Pagination