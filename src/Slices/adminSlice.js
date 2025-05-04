import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')):null,
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userInfo: (state, action) => {
        console.log(state);
        state.userInfo = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { userInfo } = counterSlice.actions

export default counterSlice.reducer