import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './TodoSlice';

const AppStore = configureStore({
    reducer: {
        todo: todoReducer,
    },
});

export default AppStore;