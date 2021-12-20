import { configureStore } from '@reduxjs/toolkit';
import layoutSlice from '../features/layout/layout.slice';

export const store = configureStore({
  reducer: {
    layout: layoutSlice
  },
});
