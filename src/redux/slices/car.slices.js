import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    formErrors:[]

}

const getAll = createAsyncThunk(
    'carSlices/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data

    }
);

const create = createAsyncThunk(
    'create',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.creat(car);
            return data
        } catch (e){
            return  rejectWithValue({status:e.message, formErrors:e.response.data})
        }

    }
)
const carSlices = createSlice({
    name: 'carSlices',
    initialState,
    reducers: {},
    extraReducers: {
        [getAll.pending]: (state, action) => {
            state.status = 'pending'
        },

        [getAll.fulfilled]: (state, action) => {
            state.status = 'completed'
            state.cars = action.payload
        },

        [getAll.rejected]: (state, action) => {
            state.status = 'rejected'
        },

        [create.fulfilled]: (state, action) => {
            state.cars.push(action.payload)
        },

        [create.rejected]: (state, action) => {
            const {status, formErrors} = action.payload;
            state.status =status
            state.formErrors = formErrors

        },

    }
})


const {reducer: carReducer, action} = carSlices;
const carActions = {
    getAll,
    create
}
export {
    carReducer,
    carActions
}