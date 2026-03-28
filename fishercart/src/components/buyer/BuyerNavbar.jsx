import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";


export default function BuyerNavbar() {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const count = cartItems.reduce(
  (sum, item) => sum + item.quantity,
  0
);


  return (
    <div className="bg-blue-50 px-6 py-2 flex items-center justify-between">
      
      {/* LEFT: Logo */}
      <div
        className="flex items-center gap-2 font-bold text-blue-700 text-lg cursor-pointer"
        onClick={() => navigate("/buyer/home")}
      >
        🐟 FisherCart
      </div>

      {/* RIGHT: Nav links + Cart */}
      <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
  <span
    className="cursor-pointer font-medium"
    onClick={() => navigate("/buyer/home")}
  >
    Home
  </span>

  <span
    className="cursor-pointer"
    onClick={() => navigate("/buyer/home")}
  >
    Today's Catch
  </span>

  <span
    className="cursor-pointer"
    onClick={() => navigate("/buyer/order-status")}
  >
    My Orders
  </span>

  <span
    className="cursor-pointer"
    onClick={() => navigate("/buyer/profile")}
  >
    Profile
  </span>

  {/* Cart Icon */}
  <div
    onClick={() => navigate("/buyer/cart")}
    className="relative cursor-pointer text-lg"
  >
    🛒
    {count > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white
                       text-xs rounded-full px-1">
        {count}
      </span>
    )}
  </div>
</div>

    </div>
  );
}