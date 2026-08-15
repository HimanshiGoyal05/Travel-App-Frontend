import { v4 as uuid } from "uuid";
import { useFilter } from "../../../context";

const propertyTypes = [
  { id: uuid(), type: "Cottage" },
  { id: uuid(), type: "Villa" },
  { id: uuid(), type: "Resort" },
  { id: uuid(), type: "Hotel" },
];

export const PropertyType = () => {

  const {propertyType, filterDispatch} = useFilter();

  const handlePropertyClick=(property)=>{
    filterDispatch({
      type: "PROPERTY_TYPE",
      payload: property
    })
  }

  return (
    <div className="filter-container">
      <span className="filter-label">Property Type</span>
      <div className="flex gap-12">
        {propertyTypes.map(({ id, type }) => (
          <span onClick={()=>handlePropertyClick(type)} className={`span-label property-type cursor-pointer items-center justify-center on-hover ${propertyType===type? "selected": ""}`} key={id}>{type}</span>
        ))}
      </div>
    </div>
  );
};
