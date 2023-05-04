import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsThunk } from "../store/slices/pokemons.slice";
import PokeCard from "../components/PokeCard";
import "./styles/PokeapiPages.css"
import SearchPokemon from "../components/SearchPokemon";
import PokemonCategory from "../components/PokemonCategory";
const PokeapiPages = () => {
  
  const { pokemons, trainerName } = useSelector((reducer) => reducer);
  const dispatch = useDispatch();
  const [select, setSelect] = useState("pokemon?limit=10&offset=0")
  
  
  
  useEffect(() => {
     
      dispatch(getPokemonsThunk(select));
      
  }, [dispatch,select]);

  console.log(pokemons)
  
  

  return (
    <div className="pokeApi">
      <div>
        <p className="hi_trainer">hola <span>{trainerName} </span> aqui podras encontrar tu pokemon favorito</p>
      </div>
      <div className="filter_container">
      <SearchPokemon style="search_container-60"/>
        <PokemonCategory setSelect={setSelect}/>
      </div>
        
      <div className="container_pokemon">
        {pokemons?.map((pokemon) => (
          <PokeCard key={pokemon.url} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokeapiPages;
