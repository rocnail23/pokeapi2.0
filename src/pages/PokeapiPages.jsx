import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsThunk } from "../store/slices/pokemons.slice";
import PokeCard from "../components/PokeCard";
import "./styles/PokeapiPages.css"
import SearchPokemon from "../components/SearchPokemon";
import PokemonCategory from "../components/PokemonCategory";
import Pagination from "../components/Pagination";
const PokeapiPages = () => {
  
  const { pokemons, trainerName } = useSelector((reducer) => reducer);
  const dispatch = useDispatch();
  const [select, setSelect] = useState("pokemon?limit=1000&offset=0")
  const [pokemonPerPages, setPokemonPerPages] = useState(10)
  const [currentPages, setCurrentPages] = useState(1)
  
  const pages = (number, set) => {
    setCurrentPages(number)
    set(number)
  }

  const pagesPlus = (set,currentPagination) => {
    setCurrentPages(currentPages + 1)
    set(currentPagination + 1)
  }
  
  useEffect(() => {
     
      dispatch(getPokemonsThunk(select));
      
  }, [dispatch,select]);

 
  
  
  let lastPokemon = currentPages * pokemonPerPages
  let firstPokemon = lastPokemon - pokemonPerPages
  let currentPokemons = pokemons?.slice(firstPokemon,lastPokemon)

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
        {currentPokemons.map((pokemon) => (
          <PokeCard key={pokemon.url} pokemon={pokemon} />
        ))}
      </div>
      <Pagination currentPages={currentPages} pagesPlus={pagesPlus} totalPokemons={pokemons?.length} pages={pages} pokemonPerPages={pokemonPerPages} />
    </div>
  );
};

export default PokeapiPages;
