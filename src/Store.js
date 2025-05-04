import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './Slices/adminSlice'

export const store = configureStore({
  reducer: {
    userDetails : adminSlice
  },
})