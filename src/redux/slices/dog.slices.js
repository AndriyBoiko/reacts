import {createSlice} from "@reduxjs/toolkit";

const initialState = {dogs: [], dogForUpdate: null}

const dogSlice = createSlice({
    name: 'dogSlice',
    initialState,
    reducers: {
        addDog: (state, action) => {
            const {name} = action.payload
            const newDog = {id: new Date().getTime(), name}
            state.dogs.unshift(newDog)

        },
        deleteDog: (state, action) => {
            const {id}= action.payload
            const index = state.dogs.findIndex((dog) => dog.id === id)
            state.dogs.splice(index, 1)
        },
        setDogUpdate: (state, action) => {
            state.dogForUpdate = action.payload.dog;
        },
        updateDog: (state, action) => {
            const {id, name} = action.payload;
            const index = state.dogs.findIndex((cat) => cat.id === id)
            state.dogs[index].name = name;
            state.dogForUpdate = false
        }


    }
});

const {reducer: dogReducer, actions: {addDog, deleteDog, setDogUpdate, updateDog}} = dogSlice;

export default dogReducer

export const actionsDog = {
    addDog,
    deleteDog,
    setDogUpdate,
    updateDog
}