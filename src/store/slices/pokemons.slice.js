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

export const getPokemonsThunk = () => (dispatch) => {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=15&offset=0')
        .then(res => dispatch(setPokemons(res.data.results)))
        .catch(err => console.log(err));
}

export default pokemonsSlice.reducer;