import "./SearchResults.css";
import { HotelCard, Navbar } from "../../components";
import { useDate } from "../../context";
import axios from "axios";
import { useEffect, useState } from "react";

export const SearchResults = () => {
  const { destination } = useDate();

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://breeze-travel-planner-app.onrender.com/api/hotels",
        );
        setHotels(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [destination]);

  const filteredSearchResults = hotels.filter(
    ({ city, address, state }) =>
      address.toLowerCase() === destination.toLowerCase() ||
      city.toLowerCase() === destination.toLowerCase() ||
      state.toLowerCase() === destination.toLowerCase(),
  );

  return (
    <>
      <Navbar />
      <section className="main flex items-center flex-wrap gap-8 ">
        {filteredSearchResults.length > 0 ? (
          filteredSearchResults.map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel} />
          ))
        ) : (
          <h3>No Results Found</h3>
        )}
      </section>
    </>
  );
};
