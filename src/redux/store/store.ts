// src/redux/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';  // Para combinar os reducers
import genericReducer from '../slices/genericSlice';


const rootReducer = combineReducers({
  generic: genericReducer,  // Combine o reducer do usuário
});

export const store = configureStore({
  reducer: rootReducer,  // Passa o rootReducer para o store
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
