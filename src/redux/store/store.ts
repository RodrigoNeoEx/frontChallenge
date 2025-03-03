import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'; 
import cepReducer from '../slices/cepSlice';


const rootReducer = combineReducers({
  cep: cepReducer, 
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
