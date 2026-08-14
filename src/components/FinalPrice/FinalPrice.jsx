import "./FinalPrice.css";
import { useDate } from "../../context";
import { DateSelector } from "../DateSelector/DateSelector";
import { type } from "@testing-library/user-event/dist/type";

export const FinalPrice = ({ singleHotel }) => {
  const {guests, dateDispatch } = useDate();

  const { price, rating } = singleHotel;

  const handleGuestChange=(event)=>{
    dateDispatch({
        type: "GUESTS",
        payload: event.target.value,
    })
  }

  return (
    <div className="price-details-container flex flex-col shadow gap-4">
      <div className="price-rating flex items-center justify-between">
        <p>
          <span className="text-2xl">Rs. {price}</span> night
        </p>
        <span className="flex items-center rating">
          <span className="material-icons-outlined">star</span>
          <span>{rating}</span>
        </span>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-2 selected-dates">
          <div className="checkin loc-container">
            <label>Check In</label>
            <DateSelector checkInType="in"/>
          </div>
          <div className="checkin loc-container">
            <label>Check Out</label>
            <DateSelector checkInType="out"/>
          </div>
        </div>
        <div className="guests gutter-sm">
          <p>GUESTS</p>
          {
            guests<=0 ? (<input className="guest-count-input" type="number" placeholder="Add Guests" value={guests} onChange={handleGuestChange}/>) :<span>{guests} guests</span>
          }
          
        </div>
      </div>
      <div>
        <button className="button cursor-pointer justify-center rounded text-2xl">
          Reserve
        </button>
      </div>
      <div className="price-distribution flex flex-col">
        <div className="final-price flex items-center justify-between">
          <span className="span">Rs. {price} x 2 nights</span>
          <span className="span">Rs. {price * 2}</span>
        </div>
        <div className="final-price flex items-center justify-between">
          <span className="span">Service Fee</span>
          <span className="span">Rs. 200</span>
        </div>
        <div className="final-price flex items-center justify-between">
          <span className="span">Total</span>
          <span className="span">Rs. {price * 2 + 200}</span>
        </div>
      </div>
    </div>
  );
};
