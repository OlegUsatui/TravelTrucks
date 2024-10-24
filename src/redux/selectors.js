import { createSelector } from '@reduxjs/toolkit';

export const selectAllCampers = (state) => state.campers.items;
export const selectCamperById = (state, id) => state.campers.items.find((camper) => camper.id === id);
export const selectCampersStatus = (state) => state.campers.status;
export const selectCampersTotal = (state) => state.campers.total;
export const selectCampersError = (state) => state.campers.error;

export const selectFilters = (state) => state.filters;
export const selectFilteredLocation = (state) => state.filters.location;
export const selectFilteredPriceRange = (state) => state.filters.priceRange;
export const selectFilteredAmenities = (state) => state.filters.amenities;

export const selectFilteredCampers = createSelector(
  [selectAllCampers, selectFilters],
  (campers, filters) => {
    return campers.filter((camper) => {
      const matchesLocation = filters.location ? camper.location.toLowerCase().includes(filters.location.toLowerCase()) : true;
      const matchesPrice = camper.price >= filters.priceRange[0] && camper.price <= filters.priceRange[1];
      const matchesTransmission = filters.transmission ? camper.transmission === filters.transmission : true;
      const matchesEngine = filters.engine ? camper.engine === filters.engine : true;
      const matchesAmenities = Object.keys(filters.amenities).every((amenity) => {
        return !filters.amenities[amenity] || camper[amenity] === filters.amenities[amenity];
      });
      return matchesLocation && matchesPrice && matchesTransmission && matchesEngine && matchesAmenities;
    });
  }
);