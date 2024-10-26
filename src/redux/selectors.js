import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = (state) => state.campers.items;

export const selectFilters = (state) => state.filters;
export const selectFilteredCampers = createSelector(
  [selectFilters, selectCampers],
  (filters, campers) => {
    return campers.filter((camper) => {
      const matchesLocation = filters.location === '' || camper.location.includes(filters.location);
      const matchesAmenities = Object.keys(filters.amenities).every(
        (amenity) => !filters.amenities[amenity] || camper[amenity]
      );
      return matchesLocation && matchesAmenities;
    });
  }
);