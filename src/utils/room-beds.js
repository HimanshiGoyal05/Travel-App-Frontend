export const getHotelsByRoomsAndBeds=(hotels, noOfBedrooms, noOfBeds, noOfBathrooms)=>{

    const filterByBedrooms= (noOfBedrooms==="Any") ? hotels : hotels.filter(({numberOfBedrooms}) =>
    (noOfBedrooms==="5+") ? (numberOfBedrooms >= 5) : (numberOfBedrooms === Number(noOfBedrooms))
    )

    const filterByBeds= (noOfBeds==="Any") ? filterByBedrooms : filterByBedrooms.filter(({numberOfBeds}) =>
    (noOfBeds==="5+") ? (numberOfBeds >= 5) : (numberOfBeds === Number(noOfBeds))
    )

    const filterByBathrooms= (noOfBathrooms==="Any") ? filterByBeds : filterByBeds.filter(({numberOfBathrooms}) =>
    (noOfBathrooms==="5+") ? (numberOfBathrooms >= 5) : (numberOfBathrooms === Number(noOfBathrooms))
    )

    return filterByBathrooms
}