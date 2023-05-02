import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsThunk } from "../store/slices/pokemons.slice";
import PokeCard from "../components/PokeCard";
import "./styles/PokeapiPages.css"
const PokeapiPages = () => {
  const { pokemons } = useSelector((reducer) => reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(getPokemonsThunk());
    }
  }, [dispatch, pokemons]);

  console.log(pokemons);

  return (
    <div className="pokeApi">
      <div className="container_pokemon">
        {pokemons?.map((pokemon) => (
          <PokeCard key={pokemon.url} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokeapiPages;
