import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = (state) => state.campers.items;
export const selectFilters = (state) => state.filters;


export const selectFilteredCampers = createSelector(
  [selectFilters, selectCampers],
  (filters, campers) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const filteredCampers = campers.filter((camper) => {
      const matchesLocation = filters.location === '' || camper.location.includes(filters.location);
      const matchesAmenities = Object.keys(filters.amenities).every(
        (amenity) => !filters.amenities[amenity] || camper[amenity]
      );
      const matchesTransmission = filters.transmission === '' || camper.transmission === filters.transmission;
      const matchesVehicleType = filters.form === '' || camper.form === filters.form;
      return matchesLocation && matchesAmenities && matchesTransmission && matchesVehicleType;
    });

    return [
      ...filteredCampers.filter((camper) => favorites.includes(camper.id)),
      ...filteredCampers.filter((camper) => !favorites.includes(camper.id)),
    ];
  }
);
