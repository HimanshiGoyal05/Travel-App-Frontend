import "./Filter.css";
import {
  PriceRange,
  RoomsAndBeds,
  PropertyType,
  Ratings,
  FreeCancel,
} from "./index";
import { useFilter } from "../../context";
import { type } from "@testing-library/user-event/dist/type";

export const Filter = () => {
  const { filterDispatch } = useFilter();

  const handleFilterModalCloseClick = () => {
    filterDispatch({
      type: "SHOW_FILTER_MODAL",
    });
  };

  const handleClearFilterClick=()=>{
    filterDispatch({
        type: "CLEAR_ALL"
    })
  }

  return (
    <div className="filter-modal">
      <div className="filter-page shadow">
        <div className="flex justify-between items-center">
          <span className="filter-label">Filters</span>
          <button
            className="flex items-center justify-center btn-close cursor-pointer"
            onClick={handleFilterModalCloseClick}
          >
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
        <PriceRange />
        <RoomsAndBeds />
        <PropertyType />
        <Ratings />
        <FreeCancel />
        <div className="flex items-center justify-between">
          <button className="cursor-pointer rounded text-xl btn-clear" onClick={handleClearFilterClick}>
            Clear All
          </button>
          <button className="cursor-pointer rounded text-xl btn-apply" onClick={handleFilterModalCloseClick}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
