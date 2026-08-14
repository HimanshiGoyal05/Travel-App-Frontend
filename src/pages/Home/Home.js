import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import { Navbar, HotelCard, Categories, SearchStayWithDate } from "../../components";
import { useCategory, useDate } from "../../context";

import "./Home.css";

export const Home = () => {
    const [hasMore, setHasMore]= useState(true);
    const [testData, setTestData]= useState([])
    const [currentIndex, setCurrentIndex] = useState(16) 
    const {hotelCategory} = useCategory()
    const {isSearchModalOpen} = useDate()

    const [hotels, setHotels]= useState([])
  useEffect(() => {
    (async () => {
      try {
        const { data } = 
        hotelCategory==="All" 
        ?await axios.get("https://breeze-travel-planner-app.onrender.com/api/hotels") 
        :await axios.get(
          `https://breeze-travel-planner-app.onrender.com/api/hotels?category=${hotelCategory}`,
        );
        setTestData(data)
        setHotels(data ? data.slice(0, 16) : [])
      } catch (err) {
        console.log(err);
      }
    })();
  }, [hotelCategory]);

  const fetchMoreData=()=>{
    if(hotels.length >= testData.length){
        setHasMore(false)
        return;
    }
    setTimeout(()=>{
        if(hotels && hotels.length>0){
            setHotels(hotels.concat(testData.slice(currentIndex, currentIndex+16)));
            setCurrentIndex(prev=>prev+16)
        }else{
            setHotels([])
        }
    }, 1000)
  }

  return (
    <div className="relative">
      <Navbar />
      <Categories />
         {
            hotels && hotels.length>0 ?
            <InfiniteScroll
                dataLength={hotels.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h3 className="alert-text">Loading...</h3>}
                endMessage={<p className="alert-text">You have seen it all</p>}
            >
                <main className="main flex items-center flex-wrap gap-8">
                {
                    hotels && hotels.map((hotel)=> <HotelCard key={hotel._id} hotel={hotel}/>)
                }
                </main>
            </InfiniteScroll>
            :(<></>)             
         }
         {
          isSearchModalOpen && <SearchStayWithDate />
         }
    </div>
  );
};
