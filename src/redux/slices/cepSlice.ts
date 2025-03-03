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
  name: 'CEP',
  initialState,
  reducers: {
    addCep: (state, action: PayloadAction<CepData>) => {
      state.list.push(action.payload); // Adiciona o novo CEP à lista
    },
    hydrateCeps: (state, action) => {
      state.list = action.payload;  // Sobrescreve a lista com o que está no localStorage
    },
  },
});

export const { addCep, hydrateCeps } = cepSlice.actions;

export default cepSlice.reducer;
