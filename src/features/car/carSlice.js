import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cars: ["Model S", "Model 3", "Model x", "Model Y" ]
}

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {}
})

export const selectCars = state => state.car.cars

export const carReducer = carSlice.reducer