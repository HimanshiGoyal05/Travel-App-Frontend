import { DateSelector } from "../DateSelector/DateSelector";
import "./SearchStayWithDate.css";
import { useDate, useCategory } from "../../context";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchStayWithDate = () => {
  const { destination, guests, isSearchResultOpen, dateDispatch } = useDate();
  const { hotelCategory } = useCategory();
  const navigate= useNavigate()

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } =
          hotelCategory === "All"
            ? await axios.get(
                "https://breeze-travel-planner-app.onrender.com/api/hotels",
              )
            : await axios.get(
                `https://breeze-travel-planner-app.onrender.com/api/hotels?category=${hotelCategory}`,
              );
        setHotels(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [hotelCategory]);

  const destinationOptions = hotels.filter(
    ({ address, state, city }) =>
      address.toLowerCase().includes(destination.toLowerCase()) ||
      city.toLowerCase().includes(destination.toLowerCase()) ||
      state.toLowerCase().includes(destination.toLowerCase())
  );

  const handleDestinationChange = (event) => {
    dateDispatch({
      type: "DESTINATION",
      payload: event.target.value,
    });
  };

  const handleGuestsChange = (event) => {
    dateDispatch({
      type: "GUESTS",
      payload: event.target.value,
    });
  };

  const handleSearchResultClick = (address) => {
    dateDispatch({
      type: "DESTINATION",
      payload: address,
    });
  };

  const handleDestinationFocus=()=>{
    dateDispatch({
      type: "SHOW_SEARCH_RESULT"
    });
  }

  const handleSearchButtonClick=()=>{
    dateDispatch({
      type: "CLOSE_SEARCH_MODAL"
    })
    navigate(`/hotels/${destination}`)
  }

  return (
    <div className="destination-container">
      <div className="destination-options flex items-center absolute">
        <div className="location-container">
          <label className="label">Where</label>
          <input
            value={destination}
            onChange={handleDestinationChange}
            onFocus={handleDestinationFocus}
            className="input"
            type="text"
            placeholder="Search Destination"
            autoFocus
          />
        </div>
        <div className="location-container">
          <label className="label">CheckIn</label>
          <DateSelector checkInType="in" />
        </div>
        <div className="location-container">
          <label className="label">CheckOut</label>
          <DateSelector checkInType="out" />
        </div>
        <div className="location-container">
          <label className="label">No. of Guests</label>
          <input
            value={guests}
            className="input"
            type="text"
            placeholder="Add Guests"
            onChange={handleGuestsChange}
          />
        </div>
        <div className="search-container flex items-center cursor-pointer" onClick={handleSearchButtonClick}>
          <span className="search material-icons-outlined">search</span>
          <span>Search</span>
        </div>
      </div>
      {isSearchResultOpen && (
        <div className="search-result-container absolute">
          {destinationOptions &&
            destinationOptions.map(({ address, city }) => (
              <p
                className="p cursor-pointer"
                onClick={() => handleSearchResultClick(address)}
              >
                {address}, {city}
              </p>
            ))}
        </div>
      )}
    </div>
  );
};
