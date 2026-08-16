import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Home,
  Payment,
  SearchResults,
  SingleHotel,
  Wishlist,
  OrderSummary,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/hotels/:name/:address/:state/:id/reserve"
        element={<SingleHotel />}
      />
      <Route path="/hotels/:address" element={<SearchResults />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/confirm-booking/stay/:id" element={<Payment />} />
      <Route path="/orderSummary" element={<OrderSummary />} />
    </Routes>
  );
}

export default App;
