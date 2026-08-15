import { useNavigate } from "react-router-dom";
import { Navbar, HotelCard, AuthModal } from "../../components";
import { useWishlist, useAuth } from "../../context";
import "./Wishlist.css";

export const Wishlist = () => {
  const { wishlist } = useWishlist();
  const { isAuthModalOpen } = useAuth();
  const navigate = useNavigate();

  const handleClickHereClick = () => {
    navigate("/")
  }

  return (
    <>
      <Navbar/>
      <h2 className="heading-2 flex justify-center">Your Wishlist</h2>
      {
        wishlist.length > 0 ? <section className="wishlist-page flex items-center flex-wrap gap-12">
          {wishlist &&
            wishlist.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)}
        </section> : <p className="flex justify-center">Wishlist Empty. &nbsp;<span className="click-here" onClick={handleClickHereClick}>Click here </span> &nbsp; to add to wishlist</p>
      }
      {isAuthModalOpen && <AuthModal />}
    </>
  );
};