import { useFilter } from "../../../context"

const ratings=["1", "2", "3", "4", "5"]

export const Ratings=()=>{

    const {traveloRating, filterDispatch}= useFilter();

    const handleRatingsClick=(rating)=>{
        filterDispatch({
            type:"RATING",
            payload: rating
        })
    }

    return (
        <div className="filter-container">
        <span className="filter-label">
            Ratings
        </span>
        <div className="flex items-center gap-4">
            {
                ratings.map((rating)=> <span onClick={()=>handleRatingsClick(rating)} className={`span-label amenity-count star flex items-center justify-center cursor-pointer on-hover ${rating===traveloRating ? "selected" :""} `} key={rating}>{rating} &Up</span>)
            }
        </div>
    </div>
    )
    
}   