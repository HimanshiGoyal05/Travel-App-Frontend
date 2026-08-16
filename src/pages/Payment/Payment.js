import "./Payment.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDate } from "../../context";
import axios from "axios";

export const Payment = () => {
  const { id } = useParams();
  const [singleHotel, setSingleHotel] = useState({});
  const { guests, checkInDate, checkOutDate } = useDate();
  const navigate= useNavigate();

  const numberOfNights =
    checkInDate && checkOutDate
      ? (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
      : 0;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://breeze-travel-planner-app.onrender.com/api/hotels/${id}`,
        );
        setSingleHotel(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  const { image, name, address, state, rating, price } = singleHotel;

  const totalPayableAmount = price * numberOfNights + 200;

  const loadScript=(source)=>{
    return new Promise(resolve=>{
      const script= document.createElement("script");
      script.src=source;
      script.onload=()=>resolve(true)
      script.onerror=()=>resolve(false)
      document.body.appendChild(script);
    })
  }

  const handleConfirmBookingClick=async()=>{
    const response= await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if(!response){
      console.log({message: "Razorpay SDK unable to load"})
    }
    const options={
      key: "rzp_test_TGTkPpiu5INA8o",
      amount: totalPayableAmount*100,
      currency: "INR",
      name: "TravelO",
      email: "test@test.com",
      contact:"7894561230",
      description: "Thankyou for booking with us",

      handler:({payment_id})=>{
        navigate("/orderSummary");
      },
      prefill:{
        name: "Himanshi",
        email: "test@test.com",
        contact:"7894561230"
      }
    }
    const paymentObject= new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <>
      <header className="heading">
        <h1 className="heading-1">
          <Link className="link" to="/">
            TravelO
          </Link>
        </h1>
      </header>
      <main className="payment-page flex justify-center">
        <div className="final-details-container flex flex-col gap-md">
          <h2 className="text-3xl font-bold">Trip Details</h2>
          <div className="dates-and-guests flex flex-col gap-md">
            <h3 className="text-2xl font-bold">Your Trip</h3>
            <div>
              <p>Dates</p>
              <span>
                {checkInDate.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                })}{" "}
                -
                {checkOutDate.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                })}
              </span>
            </div>
            <div>
              <p>Guests</p>
              <span>{guests} Guests</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Pay with</h3>
            <div>Razorpay</div>
          </div>
          <button className="button cursor-pointer btn-pay rounded font-bold" onClick={handleConfirmBookingClick}>
            Confirm Booking
          </button>
        </div>
        <div className="final-details flex flex-col gap-12">
          <div className="flex gap-4">
            <img className="image" src={image} alt={name} />
            <div className="flex flex-col">
              <div className="flex flex-col">
                <span>{name}</span>
                <span>
                  {address}, {state}
                </span>
              </div>
              <div className="rating-container">
                <span className="rating flex items-center">
                  <span className="material-icons-outlined">star</span>
                  <span>{rating}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="tag">
            Your booking is protected by{" "}
            <strong className="strong">TravelO</strong> cover
          </div>
          <div className="price-detail-container">
            <div className="price-distribution flex flex-col">
              <h3 className="text-2xl font-bold" >Price Details</h3>
              <div className="final-price flex items-center justify-between">
                <span className="span">
                  Rs. {price} x {numberOfNights} nights
                </span>
                <span className="span">Rs. {price * numberOfNights}</span>
              </div>
              <div className="final-price flex items-center justify-between">
                <span className="span">Service fee</span>
                <span className="span">Rs. 200</span>
              </div>
              <div className="final-price flex items-center justify-between">
                <span className="span">Total</span>
                <span className="span">Rs. {totalPayableAmount}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
