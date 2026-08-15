export const getHotelsByCancellation=(hotels, isCancellable)=>{
    const filteredHotels= hotels.filter((hotel)=>hotel.isCancelable === isCancellable)
    return filteredHotels
}