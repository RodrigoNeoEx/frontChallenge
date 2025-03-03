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
  [key: string]: string;
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
      state.list.push(action.payload);
    },
    hydrateCeps: (state, action) => {
      state.list = action.payload; 
    },
  },
});

export const { addCep, hydrateCeps } = cepSlice.actions;

export default cepSlice.reducer;
