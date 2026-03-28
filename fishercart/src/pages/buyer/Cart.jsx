import BuyerNavbar from "../../components/buyer/BuyerNavbar";
import { cartItems } from "../../data/dummyCart";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";


export default function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useCart();
  const totalItems = cartItems.reduce(
  (sum, item) => sum + item.quantity,
  0
);

  const totalPrice = cartItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);


  return (
    <div className="min-h-screen bg-slate-100">
      <BuyerNavbar />

      <div className="p-5 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-5">
          My Cart
        </h1>

        {/* Cart Items */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600">
                  ₹{item.price} / kg
                </p>
                <p className="text-sm text-gray-600">
                  Quantity: {item.quantity} kg
                </p>
              </div>

              <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 text-sm font-medium"
              >
                Remove
              </button>

            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-xl shadow p-4 mt-6">
          <p className="text-sm text-gray-700">
            Total Items: {totalItems}
          </p>
          <p className="text-lg font-semibold text-gray-800 mt-1">
            Total: ₹{totalPrice}
          </p>

          <button
          onClick={() => navigate("/buyer/checkout")}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg font-medium"
          >
            Proceed to Checkout
          </button>

        </div>
      </div>
    </div>
  );
}