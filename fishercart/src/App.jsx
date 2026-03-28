import { BrowserRouter, Routes, Route } from "react-router-dom";

// contexts
import { FishProvider } from "./context/FishContext";
import { CartProvider } from "./context/CartContext";

// common
import Login from "./pages/common/Login";
import OTP from "./pages/common/OTP";

// buyer pages
import BuyerHome from "./pages/buyer/BuyerHome";
import Cart from "./pages/buyer/Cart";
import OrderStatus from "./pages/buyer/OrderStatus";
import BuyerProfile from "./pages/buyer/BuyerProfile";
import BuyerProfileCreate from "./pages/buyer/BuyerProfileCreate";
import Checkout from "./pages/buyer/Checkout";
import Payment from "./pages/buyer/Payment";
import FishDetails from "./pages/buyer/FishDetails";

// fisherman pages
import Dashboard from "./pages/fisherman/Dashboard";
import BuyerRequests from "./pages/fisherman/BuyerRequests";
import AddListings from "./pages/fisherman/AddListings";
import MyListings from "./pages/fisherman/MyListings";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <FishProvider>
          <Routes>

            {/* Common */}
            <Route path="/" element={<Login />} />
            <Route path="/otp" element={<OTP />} />

            {/* Buyer */}
            <Route path="/buyer/home" element={<BuyerHome />} />
            <Route path="/buyer/cart" element={<Cart />} />
            <Route path="/buyer/order-status" element={<OrderStatus />} />
            <Route path="/buyer/profile" element={<BuyerProfile />} />
            <Route path="/buyer/profile/create" element={<BuyerProfileCreate />} />
            <Route path="/buyer/checkout" element={<Checkout />} />
            <Route path="/buyer/payment" element={<Payment />} />
            <Route path="/buyer/fish/:id" element={<FishDetails />} />

            {/* Fisherman */}
            <Route path="/fisherman/dashboard" element={<Dashboard />} />
            <Route path="/fisherman/add" element={<AddListings />} />
            <Route path="/fisherman/listings" element={<MyListings />} />
            <Route path="/fisherman/requests" element={<BuyerRequests />} />

          </Routes>
        </FishProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;




