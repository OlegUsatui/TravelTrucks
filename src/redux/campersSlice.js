import {createSlice} from '@reduxjs/toolkit';
import { fetchCampers } from './campersOps.js';


const initialCampersState = {
  items: [],
  total: 0,
  status: 'idle',
  error: null,
  camperDetails: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: initialCampersState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default campersSlice.reducer;