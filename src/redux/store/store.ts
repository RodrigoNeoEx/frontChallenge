// src/redux/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';  // Para combinar os reducers
import cepReducer from '../slices/cepSlice';


const rootReducer = combineReducers({
  cep: cepReducer,  // Combine o reducer do usuário
});

export const store = configureStore({
  reducer: rootReducer,  // Passa o rootReducer para o store
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
