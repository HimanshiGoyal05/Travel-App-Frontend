import "./ProfileDropDown.css";
import {
  useAuth,
  useDate,
  useFilter,
  useWishlist,
  useAlert,
} from "../../context";
import { useNavigate } from "react-router-dom";

export const ProfileDropDown = () => {
  const { authDispatch } = useAuth();

  const { dateDispatch } = useDate();

  const { filterDispatch } = useFilter();

  const { wishlistDispatch } = useWishlist();

  const { setAlert } = useAlert();

  const navigate = useNavigate();

  const handleWishlistClick = () => {
    authDispatch({
      type: "SHOW_DROP_DOWN_OPTIONS",
    });
    navigate("/wishlist");
  };

  const handleLogoutClick = () => {
    authDispatch({
      type: "CLEAR_USER_DATA",
    });
    authDispatch({
      type: "CLEAR_CREDENTIALS",
    });
    authDispatch({
      type: "SHOW_DROP_DOWN_OPTIONS",
    });
    dateDispatch({
      type: "CLEAR_INPUTS",
    });
    filterDispatch({
      type: "CLEAR_ALL",
    });
    wishlistDispatch({
      type: "CLEAR_WISHLIST",
    });
    navigate("/");
    setAlert({
      open: true,
      message: "Logged out successfully",
      type: "success",
    });
  };

  return (
    <div className="drop-down-container shadow flex flex-col absolute">
      <span
        className="option-span wishlist-span cursor-pointer flex items-center gap-4"
        onClick={handleWishlistClick}
      >
        <span class="material-icons-outlined">favorite_border</span>
        Wishlist
      </span>
      <span
        className="option-span cursor-pointer flex items-center gap-4"
        onClick={handleLogoutClick}
      >
        <span class="material-icons-outlined">logout</span>
        Logout
      </span>
    </div>
  );
};
