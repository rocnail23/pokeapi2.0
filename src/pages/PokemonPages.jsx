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
      .then((res) => {
        setPokemon(res.data);
        setisFound(false);
      })
      .catch((err) => {
        if (err.response.data == "Not Found") {
          setisFound(true);
        }
      });
  }, [id]);
    
  console.log(pokemon)
  if (isFound) {
    return (
      <div className="pokemonPages">
        <div className="pokemon_notFound">
          <div className="top_notfound">
            <SearchPokemon style="search_container-100" />
            <img src={pikachu} alt="" />
          </div>
          <div className="line"></div>
          <p>
            pokemon no encontrado verifica que el nombre este escrito
            correctamente
          </p>
        </div>
      </div>
    );
  } else {
    return (
    <div className="pokemonPages">
      <div className="pokemon_presentation">
      <div className={`background_Pokemon d-${pokemon?.types[0].type.name}`}>
        <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
      </div>
      <p className={`pokemon_num c-${pokemon?.types[0].type.name}`}>#{pokemon?.id}</p>
      <div className="Title">
      <div className="bar"></div>
      <h3>{pokemon?.name}</h3>
      <div className="bar"></div>
      </div>
      <div className="weight_height">
        <div className="weight">
        <h4>peso</h4>
        <p className={`c-${pokemon?.types[0].type.name}`}>{pokemon?.weight}</p>
        </div>
        <div className="height">
        <h4>tamaño</h4>
        <p className={`c-${pokemon?.types[0].type.name}`}>{pokemon?.height}</p>
        </div> 
      </div>
      <div className="type_abilities">
      <div className="types">
      <h4>tipo</h4>
      <div className="type">
        {pokemon?.types.map(type => (
          <p className={`type_display d-${type.type.name}`}>{type.type.name}</p>
        ))}
      </div>
      </div>
      <div className="habilities">
          <h4>habilidades</h4>
          <div className="ability">
            {pokemon?.abilities.map(ability => (
              <p className="ability_display">{ability.ability.name}</p>
            ))}
          </div>
      </div>
      </div>
      <div className="stats_title">
        <h4>Stats</h4>
        <div></div>
      </div>
      <div className="bar_stats_container">
              {
                pokemon?.stats.map(stat => {
                  if(["hp","attack","defense","speed"].includes(stat.stat.name)){
                   return <div>
                        <div className="bar_name">
                          <h4>{stat.stat.name}</h4>
                          <h5>{`${stat.base_stat} / 150`}</h5>
                          </div>     
                          <div className="bar_percent">
                            <div style={{width: `${stat.base_stat / 1.5}%` }}>

                            </div>
                            </div>              
                   </div>
                  }
                })
              }
      </div>
      </div>
      
    </div>)
  }
};

export default PokemonPages;
