import { createSlice } from '@reduxjs/toolkit'

export const userlistSlice = createSlice({
  name: 'userList',
  initialState: {
    value: [],
  },
  reducers: {
    deleteUser: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { deleteUser } = userlistSlice.actions


export default userlistSlice.reducer
