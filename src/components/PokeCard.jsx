import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./styles/PokeCard.css";
import { useNavigate } from "react-router-dom";
const PokeCard = ({ pokemon }) => {
  const [pokemonCard, setPokemonCard] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    const url = pokemon.url;
    axios
      .get(url)
      .then((res) => setPokemonCard(res.data))
      .catch((err) => console.log(err));
  }, []);
  
  
  const handleClick = (id) => {
    if(pokemonCard.id)
    navigate(`/pokemon/${id}`)
  }

  return (
    <div className={`poke_card b-${pokemonCard?.types[0].type.name}`} onClick={() => handleClick(pokemonCard?.id)}>
      <div className="body_card">
        <div className={`card_color d-${pokemonCard?.types[0].type.name}`}>
          <img
            className="card_image"
            src={pokemonCard?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </div>
        <div className="card_presentation">
          <h2 className={`card_name c-${pokemonCard?.types[0].type.name}`}>
            {pokemonCard?.name}
          </h2>
          <h3 className="cardType">
            {pokemonCard?.types.map((type) => {
              if (type.slot == 1) {
                return type.type.name;
              } else if (type.slot == 2) {
                return `/${type.type.name}`;
              }
            })}
          </h3>

          <p className={`name_stat`}>tipo</p>
        </div>
      </div>
      <div className="footer_card">
        {pokemonCard?.stats.map((stat) => {
          if (["hp", "attack", "defense", "speed"].includes(stat.stat.name))
            return (
              <div className="footer_stat">
                <p className="name_stat">{stat.stat.name}</p>
                <p
                  className={`stat_points c-${pokemonCard?.types[0].type.name}`}
                >
                  {stat.base_stat}
                </p>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default PokeCard;
