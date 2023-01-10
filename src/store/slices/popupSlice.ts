import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PopupState {
  isActive: boolean;
}

const initialState: PopupState = {
  isActive: false,
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setIsActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
  },
});

export const { setIsActive } = popupSlice.actions;

export default popupSlice.reducer;
