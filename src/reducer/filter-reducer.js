export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "SHOW_FILTER_MODAL":
      return {
        ...state,
        isFilterModalOpen: !state.isFilterModalOpen,
      };
    case "MINIMUM_PRICE":
      return {
        ...state,
        priceRange: [
          Math.min(payload.newValue[0], payload.priceRange[1] - payload.minDifference),
          payload.priceRange[1],
        ],
      };
    case "MAXIMUM_PRICE":
      return {
        ...state,
        priceRange: [
            payload.priceRange[0],
          Math.max(payload.newValue[1], payload.priceRange[0] + payload.minDifference),
        ],
      };
    case "BATHROOMS":
        return{
            ...state,
            noOfBathrooms: payload
        }
    case "BEDS":
        return{
            ...state,
            noOfBeds: payload
        }
    case "BEDROOMS":
        return{
            ...state,
            noOfBedrooms: payload
        }
    case "PROPERTY_TYPE":
        return{
            ...state,
            propertyType: payload
        }
    case "RATING":
        return{
            ...state,
            traveloRating: Number(payload)
        }
    case "CANCELLABLE":
        return{
            ...state,
            isCancellable: payload
        }
    case "CLEAR_ALL":
        return{
            ...state,
            priceRange: [300, 20000],
            noOfBedrooms: "Any",
            noOfBeds: "Any",
            noOfBathrooms: "Any",
            propertyType: "Any",
            traveloRating: 1,
            isCancellable: true
        }
    default:
      return state;
  }
};
