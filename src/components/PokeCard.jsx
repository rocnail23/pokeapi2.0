import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./styles/PokeCard.css"
const PokeCard = ({ pokemon }) => {
  const [pokemonCard, setPokemonCard] = useState(null);

  useEffect(() => {
    const url = pokemon.url;
    axios
      .get(url)
      .then((res) => setPokemonCard(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(pokemonCard);
  return (
    <div className="poke_card">
      
        <div className="body_card">
        <div className="card_color">
        <img
        className="card_image"
        src={pokemonCard?.sprites.other["official-artwork"].front_default}
        alt=""
      />
        </div>
        <div className="card_presentation">
      <h2 className="card_name">{pokemonCard?.name}</h2>
      <h3 card_type>
        {pokemonCard?.types.map((type) => {
          if (type.slot == 1) {
            return type.type.name;
          } else if (type.slot == 2) {
            return `/${type.type.name}`;
          }
        })}
      </h3>
      
      <p>tipo</p>
      </div>
        </div>
      <div className="footer_card">
        
        {pokemonCard?.stats.map(stat => {
            if(["hp","attack","defense","speed"].includes(stat.stat.name))
            return <div className="footer_stat">
                <p className="name_Stat">{stat.stat.name}</p>
                <p className="stat_points">{stat.base_stat}</p>
            </div>
        })}
        
        </div>
    </div>
  );
};

export default PokeCard;
