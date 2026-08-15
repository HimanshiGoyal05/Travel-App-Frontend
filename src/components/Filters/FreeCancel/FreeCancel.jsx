import "./FreeCancel.css"
import { useFilter } from "../../../context"

export const FreeCancel=()=>{
    const {filterDispatch, isCancellable}= useFilter()
    const handleCancelClick=(event)=>{
        filterDispatch({
            type:"CANCELLABLE",
            payload: event.target.checked
        })
    }
    return (
        <div className="filter-container">
            <div className="flex items-center gap-12">
                <span className="filter-label">Free Cancellation</span>
                <label className="slide">
                    <input type="checkbox" onClick={handleCancelClick} value={isCancellable} checked={isCancellable}/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}