import { useFilter } from "../../../context";

const numberOfAmenities = ["Any", "1", "2", "3", "4", "5+"];


export const RoomsAndBeds = () => {

    const {filterDispatch, noOfBedrooms, noOfBeds, noOfBathrooms}=useFilter()

    const handleBathroomsClick=(number)=>{
        filterDispatch({
            type: "BATHROOMS",
            payload: number
        })
    }
    const handleBedsClick=(number)=>{
        filterDispatch({
            type: "BEDS",
            payload: number
        })
    }
    const handleBedroomsClick=(number)=>{
        filterDispatch({
            type: "BEDROOMS",
            payload: number
        })
    }


  return (
    <div className="filter-container">
      <span className="filter-label">Rooms And Beds</span>
      <div className="flex items-center gap-12">
        <div className="flex flex-col gap-8">
          <span className="span-label">Bedrooms</span>
          <span className="span-label">Beds</span>
          <span className="span-label">Bathrooms</span>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            {numberOfAmenities.map((number) => (
              <span onClick={()=>handleBedroomsClick(number)} className={`span-label flex cursor-pointer items-center justify-center amenity-count on-hover ${noOfBedrooms===number? "selected" : ""}`} key={number}>{number}</span>
            ))}
          </div>
          <div>
            {numberOfAmenities.map((number) => (
              <span onClick={()=>handleBedsClick(number)} className={`span-label flex cursor-pointer items-center justify-center amenity-count on-hover ${noOfBeds===number? "selected" : "" }`} key={number}>{number}</span>
            ))}
          </div>
          <div>
            {numberOfAmenities.map((number) => (
              <span onClick={()=>handleBathroomsClick(number)} className={`span-label flex cursor-pointer items-center justify-center amenity-count on-hover ${noOfBathrooms===number? "selected" : ""}`} key={number}>{number}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
