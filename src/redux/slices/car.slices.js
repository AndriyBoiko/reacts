import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";


const initialState = {
    cars: [],
    status: null,
    formErrors: {}

}

const getAll = createAsyncThunk(
    'carSlices/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data

    }
);

const deleteById = createAsyncThunk(
    'carSlices/deleteById',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCarById({id}))

        } catch (e) {
            return rejectWithValue({status: e.message})
        }
    }
)

const createAsync = createAsyncThunk(
    'create',
    async ({car}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            dispatch(create({car: data}))
        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data})
        }

    }
)
const carSlices = createSlice({
    name: 'carSlices',
    initialState,
    reducers: {
        create: (state, action) => {
            state.cars.push(action.payload.car)
        },
        deleteCarById: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars.splice(index, 1)
        }

    },

    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.status = 'completed'
                state.cars = action.payload
            })
            .addCase(createAsync.fulfilled, (state, action) => {
                console.log('completed')
            })
            .addCase(createAsync.rejected, (state, action) => {
                const {status, formErrors} = action.payload;
                state.status = status
                state.formErrors = formErrors

            })
    }
})


const {reducer: carReducer, action:{create, deleteCarById}} = carSlices;
const carActions = {
    getAll,
    createAsync,
    deleteById

}
export {
    carReducer,
    carActions
}