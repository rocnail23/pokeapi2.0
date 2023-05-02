import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slices/trainerName.slice";
import pokemons from "./slices/pokemons.slice";

export const store = configureStore({
    reducer:{
      trainerName,
      pokemons,
      
    }
})