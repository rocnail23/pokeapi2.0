import React from 'react'
import { useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import "./styles/HomePages.css"
import iconCenter from "../assets/iconCenter.png"
import { useForm } from 'react-hook-form'
import { setTrainerName } from '../store/slices/trainerName.slice'
const HomePages = () => {
 
  const {register,handleSubmit} = useForm()
  
  const dispatch = useDispatch()
 const navigate = useNavigate()
  const submit = (data) =>{
    dispatch(setTrainerName(data.name))
    localStorage.setItem("name1",data.name )
    navigate("/pokeapi")
  }
  return (
    <div className='HomePages'>
      <div className='Welcome'>
      <img src={iconCenter} alt="" />
      <div className='Welcome_phrase'>
        <h1>¡Hola entrenador!</h1>
        <p>inserta tu nombre para acceder a la pokedex</p>
      </div>
      <form className='form_name' onSubmit={handleSubmit(submit)}>
        <input type="text" {...register("name")} />
        <button>continuar</button>
      </form>
      </div>
      <div className='Footer'>
    <div className='bar-red'></div>
    <div className='bar-black b'>
      <div className='circle1-b'><div className='circle2'>
        <div className='circle3'>
          <div className='circle4'></div></div></div></div>
    </div>
      </div>
    </div>
  )
}

export default HomePages