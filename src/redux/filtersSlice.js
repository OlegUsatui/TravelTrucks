import { createSlice } from '@reduxjs/toolkit';
import { VEHICLE_EQUIPMENT } from '@constants/filterEnums.js';


const initialFiltersState = {
  location: '',
  amenities: {
    [VEHICLE_EQUIPMENT.AC]: false,
    [VEHICLE_EQUIPMENT.KITCHEN]: false,
    [VEHICLE_EQUIPMENT.BATHROOM]: false,
    [VEHICLE_EQUIPMENT.TV]: false,
    [VEHICLE_EQUIPMENT.REFRIGERATOR]: false,
    [VEHICLE_EQUIPMENT.MICROWAVE]: false,
    [VEHICLE_EQUIPMENT.RADIO]: false,
    [VEHICLE_EQUIPMENT.GAS]: false,
    [VEHICLE_EQUIPMENT.WATER]: false,
  },
  transmission: '',
  form: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFiltersState,
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    }
  },
});

export const { setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;