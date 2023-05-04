import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const pokemonsSlice = createSlice({
    name:"pokemons",
    initialState: [],
    reducers: {
        setPokemons: (state, action) => {
            return action.payload;
        }
    }
});

export const { setPokemons } = pokemonsSlice.actions;

export const getPokemonsThunk = (filter) => (dispatch) => {
       if(filter == "pokemon?limit=10&offset=0"){
        axios.get(`https://pokeapi.co/api/v2/${filter}`)
        .then(res => dispatch(setPokemons(res.data.results)))
        .catch(err => console.log(err))
       } else {
        axios.get(`https://pokeapi.co/api/v2/${filter}`)
       .then(res => dispatch(setPokemons(res.data.pokemon.map(e => e.pokemon))))
       .catch(err => console.log(err))
       }
       

      
       
    
    
    
    
}

export default pokemonsSlice.reducer;