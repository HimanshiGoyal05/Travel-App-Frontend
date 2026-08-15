import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducer";

const initalValue = {
  wishlist: [],
};

const WishlistContext = createContext(initalValue);

const WishlistProvider = ({ children }) => {
  const [{ wishlist }, wishlistDispatch] = useReducer(
    wishlistReducer,
    initalValue,
  );

  return <WishlistContext.Provider value={{wishlist, wishlistDispatch}}>{children}</WishlistContext.Provider>;
};

const useWishlist =()=> useContext(WishlistContext);

export { useWishlist, WishlistProvider };
