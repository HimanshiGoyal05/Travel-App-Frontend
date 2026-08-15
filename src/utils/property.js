export const getHotelsByPropertyType=(hotels, propertyType)=>{
    if(propertyType==="Any") return hotels;
    const filteredHotels=hotels.filter((hotel)=>propertyType===hotel.propertyType)
    return filteredHotels;
}