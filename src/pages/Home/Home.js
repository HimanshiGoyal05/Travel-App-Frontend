import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import {
  Navbar,
  HotelCard,
  Categories,
  SearchStayWithDate,
  Filter,
  AuthModal
} from "../../components";
import { useCategory, useDate, useFilter, useAuth } from "../../context";
import {getHotelsByPrice, getHotelsByRoomsAndBeds, getHotelsByPropertyType, getHotelsByRating, getHotelsByCancellation} from "../../utils"

import "./Home.css";

export const Home = () => {
  const [hasMore, setHasMore] = useState(true);
  const [testData, setTestData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(16);
  const { hotelCategory } = useCategory();
  const { isSearchModalOpen } = useDate();
  const { isFilterModalOpen, priceRange, noOfBedrooms, noOfBeds, noOfBathrooms, propertyType, traveloRating, isCancellable } = useFilter();
  const {isAuthModalOpen}= useAuth()

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
        setTestData(data);
        setHotels(data ? data.slice(0, 16) : []);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [hotelCategory]);

  const fetchMoreData = () => {
    if (filterHotelsByCancellation.length >= testData.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      if (filterHotelsByCancellation && filterHotelsByCancellation.length > 0) {
        setHotels(
          filterHotelsByCancellation.concat(testData.slice(currentIndex, currentIndex + 16)),
        );
        setCurrentIndex((prev) => prev + 16);
      } else {
        setHotels([]);
      }
    }, 1000);
  };

  const filterDataByPrice= getHotelsByPrice(hotels, priceRange);
  const filterHotelsByRoomsAndBeds = getHotelsByRoomsAndBeds(filterDataByPrice, noOfBedrooms, noOfBeds, noOfBathrooms);
  const filterHotelsByPropertyType= getHotelsByPropertyType(filterHotelsByRoomsAndBeds, propertyType)
  const filterHotelsByRating= getHotelsByRating(filterHotelsByPropertyType, traveloRating)
  const filterHotelsByCancellation = getHotelsByCancellation(filterHotelsByRating, isCancellable)

  return (
    <div className="relative">
      <Navbar />
      <Categories />
      {filterHotelsByCancellation && filterHotelsByCancellation.length > 0 ? (
        <InfiniteScroll
          dataLength={filterHotelsByCancellation.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h3 className="alert-text">Loading...</h3>}
          endMessage={<p className="alert-text">You have seen it all</p>}
        >
          <main className="main flex items-center flex-wrap gap-8">
            {filterHotelsByCancellation &&
              filterHotelsByCancellation.map((hotel) => (
                <HotelCard key={hotel._id} hotel={hotel} />
              ))}
          </main>
        </InfiniteScroll>
      ) : (
        <></>
      )}
      {isSearchModalOpen && <SearchStayWithDate />}
      {isFilterModalOpen && <Filter />}
      {isAuthModalOpen && <AuthModal />}
    </div>
  );
};
