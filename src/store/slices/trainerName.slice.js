import { createSlice } from "@reduxjs/toolkit";

export const trainerName = createSlice({
    name: "trainerName",
    initialState: "",
    reducers:({
        setTrainerName: (estate,action) => action.payload
    }),
    

})

export default trainerName.reducer
export const {setTrainerName} = trainerName.actions