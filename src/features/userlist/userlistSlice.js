import { createSlice } from '@reduxjs/toolkit'

export const userlistSlice = createSlice({
  name: 'userList',
  initialState: {
    value: [],
  },
  reducers: {
    deleteUser: (state, action) => {
      state.value = state.value.filter(user => user.id !== action.payload)
    },
    addUser: (state, action) => {
        state.value = action.payload
    }
  },
})

export const userList = (state) => state.userList.value

export const { deleteUser, addUser } = userlistSlice.actions


export default userlistSlice.reducer
