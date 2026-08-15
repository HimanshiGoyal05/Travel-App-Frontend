import { useContext, createContext, useReducer } from "react";
import { filterReducer } from "../reducer";

const initialValue={
  isFilterModalOpen: false,
  priceRange: [300, 20000],
  noOfBedrooms: "Any",
  noOfBeds: "Any",
  noOfBathrooms: "Any",
  propertyType: "Any",
  traveloRating: 1,
  isCancellable: true
}

const FilterContext = createContext(initialValue);

const FilterProvider = ({ children }) => {

  const [{priceRange, isFilterModalOpen, noOfBedrooms, noOfBeds, noOfBathrooms, propertyType, traveloRating, isCancellable}, filterDispatch]=useReducer(filterReducer, initialValue);

  return <FilterContext.Provider value={{priceRange, isFilterModalOpen,noOfBedrooms , noOfBeds, noOfBathrooms, propertyType, traveloRating, isCancellable, filterDispatch}}>{children}</FilterContext.Provider>;
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
