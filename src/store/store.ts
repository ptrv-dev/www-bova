import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import popupReducer from './slices/popupSlice';

export const store = configureStore({
  reducer: {
    popupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
