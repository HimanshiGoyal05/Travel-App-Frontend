import { useNavigate } from "react-router-dom";
import { useDate } from "../../context";

import "./OrderSummary.css"


export const OrderSummary = () => {
  const navigate = useNavigate();
  const {dateDispatch}=useDate();

  const handleContinueBooking = () => {
    navigate("/");
    dateDispatch({
      type: "CLEAR_INPUTS",
    })

  };

  return (
    <>
    <div className="flex flex-col justify-center items-center gap-8 mt-10 booking-container">
        <h1 className="text-3xl font-bold">Order Placed Successfully</h1>
      <button className="button btn-book rounded cursor-pointer" onClick={handleContinueBooking}>
        Continue Booking
      </button>
    </div>      
    </>
  );
};
