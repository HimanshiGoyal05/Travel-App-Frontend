import { useNavigate } from "react-router-dom";
import { useWishlist, useAuth, useAlert } from "../../context";
import { findHotelInWishlist } from "../../utils";

import "./HotelCard.css";

export const HotelCard = ({ hotel }) => {
  const { _id, name, image, address, state, rating, price } = hotel;
  const { wishlistDispatch, wishlist } = useWishlist();
  const { accessToken, authDispatch } = useAuth();
  const { setAlert } = useAlert();

  const navigate = useNavigate();
  const isHotelInWishlist = findHotelInWishlist(wishlist, _id);

  const handleHotelCardClick = () => {
    navigate(`/hotels/${name}/${address}/${state}/${_id}/reserve`);
  };

  const handleWishlistClick = () => {
    if (accessToken) {
      if (!isHotelInWishlist) {
        wishlistDispatch({
          type: "ADD_TO_WISHLIST",
          payload: hotel,
        });
        setAlert({
          open: true,
          message: `Hotel:: ${name} added to wishlist`,
          type: "success",
        });
      } else {
        wishlistDispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: _id,
        });
        setAlert({
          open: true,
          message: `Hotel:: ${name} removed from wishlist`,
          type: "success",
        });
      }
    } else {
      authDispatch({
        type: "SHOW_AUTH_MODAL",
      });
    }
  };

  return (
    <div className="relative hotelcard-container shadow cursor-pointer">
      <div onClick={handleHotelCardClick}>
        <img className="img" src={image} alt={name} />

        <div className="hotelcard-details">
          <div className="flex items-center">
            <span className="location">
              {address}, {state}
            </span>
            <span className="rating flex items-center">
              <span className="material-icons-outlined">star</span>
              <span>{rating}</span>
            </span>
          </div>
          <p className="hotel-name">{name}</p>
          <p className="price-details">
            <span className="price">Rs. {price}</span>
            <span>night</span>
          </p>
        </div>
      </div>
      <div className="wishlist">
        <button className="btn-wishlist absolute" onClick={handleWishlistClick}>
          <span
            className={`material-icons favorite cursor-pointer ${isHotelInWishlist ? "fav-selected" : ""}`}
          >
            favorite
          </span>
        </button>
      </div>
    </div>
  );
};
