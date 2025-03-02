// src/redux/slices/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GenericState {
  generic: string | null;
}

const initialState: GenericState = {
  generic: null,
};

const genericSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<string>) {
      state.generic = action.payload;
    },
  },
});

export const { setUser } = genericSlice.actions;
export default genericSlice.reducer;
