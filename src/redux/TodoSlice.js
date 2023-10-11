import {createSlice} from '@reduxjs/toolkit';

const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: [],
  },
  reducers: {
  },
});

export const {addUser, editUser, deleteUser} = TodoSlice.actions;
export default TodoSlice.reducer;
