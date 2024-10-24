import { createSlice } from '@reduxjs/toolkit';

const initialFiltersState = {
    location: '',
    priceRange: [0, 20000],
    transmission: '',
    engine: '',
    amenities: {
        AC: false,
        kitchen: false,
        bathroom: false,
        TV: false,
        refrigerator: false,
        microwave: false,
    },
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState: initialFiltersState,
    reducers: {
        setFilters: (state, action) => {
            return { ...state, ...action.payload };
        },
        clearFilters: () => initialFiltersState,
    },
});

export const { setFilters, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;