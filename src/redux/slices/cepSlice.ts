// src/redux/slices/cepSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CepData {
  cep: string;
  logradouro: string;  
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  [key: string]: string; // Pode ter outras propriedades do objeto
}

interface CepState {
  list: CepData[];
}

const initialState: CepState = {
  list: [],
};

const cepSlice = createSlice({
  name: 'Lista de CEPs',
  initialState,
  reducers: {
    addCep: (state, action: PayloadAction<CepData>) => {
      state.list.push(action.payload); // Adiciona o novo CEP à lista
    },
  },
});

export const { addCep } = cepSlice.actions;

export default cepSlice.reducer;
