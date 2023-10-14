import {createSlice} from '@reduxjs/toolkit';

const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    editTodo: (state, action) => {
      let {todoList} = state;
      state.todoList = todoList.map(item =>
        item.id === action.payload.id ? action.payload : item,
      );
    },
    deleteTodo: (state, action) => {
      let {todoList} = state;
      state.todoList = todoList.filter(item => item.id !== action.payload);
    },
  },
});

export const {addTodo, editTodo, deleteTodo} = TodoSlice.actions;
export default TodoSlice.reducer;
