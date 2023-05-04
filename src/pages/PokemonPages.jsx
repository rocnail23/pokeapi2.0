import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/PokemonPages.css";
import pikachu from "../assets/pikachu.png";
import SearchPokemon from "../components/SearchPokemon";
const PokemonPages = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  
  const [isFound, setisFound] = useState(false);
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    axios
      .get(url)
      .then((res) => {setPokemon(res.data)
      setisFound(false)})
      .catch((err) => {
        if (err.response.data == "Not Found") {
          setisFound(true);
        }
      });
  }, [id]);
  console.log(isFound);
  return (
    <div className="pokemonPages">
      {isFound ? (
        
        <div className="pokemon_notFound">
          <div className="top_notfound">
          <SearchPokemon style="search_container-100" />
          <img src={pikachu} alt="" />
          </div>
          
          <div className="line"></div>
          <p>pokemon no encontrado verifica que el nombre este escrito correctamente</p>
        </div>
      ) : (
        <img
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      )}
    </div>
  );
};

export default PokemonPages;
