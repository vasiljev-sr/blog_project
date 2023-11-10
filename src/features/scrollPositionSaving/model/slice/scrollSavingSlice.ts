import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSavingSchema } from '../types/scrollSavingSchema';

const initialState: ScrollSavingSchema = {
  scroll: {},
};
export const scrollSavingSlice = createSlice({
  name: 'scrollSavingSlice',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      action: PayloadAction<{ path: string; position: number }>
    ) => {
      const { payload } = action;
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: scrollSavingSliceActions } = scrollSavingSlice;
export const { reducer: scrollSavingSliceReducer } = scrollSavingSlice;
