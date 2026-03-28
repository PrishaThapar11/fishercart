import { useState } from "react";
import BuyerNavbar from "../../components/buyer/BuyerNavbar";

export default function Checkout() {
  const [placed, setPlaced] = useState(false);

  // Dummy values
  const fishCost = 780;
  const deliveryFee = 40;
  const total = fishCost + deliveryFee;

  return (
    <div className="min-h-screen bg-slate-100">
      <BuyerNavbar />

      <div className="p-5 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-5">
          Order Summary
        </h1>

        {/* Summary Card */}
        <div className="bg-white rounded-xl shadow p-5 space-y-3">
          <div className="flex justify-between text-sm text-gray-700">
            <span>Fish Cost</span>
            <span>₹{fishCost}</span>
          </div>

          <div className="flex justify-between text-sm text-gray-700">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee}</span>
          </div>

          <hr />

          <div className="flex justify-between font-semibold text-gray-800">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>

        {/* Place Order */}
        {!placed ? (
          <button
            onClick={() => setPlaced(true)}
            className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-medium"
          >
            Place Order
          </button>
        ) : (
          <div className="mt-6 bg-green-100 text-green-800 p-4 rounded-lg text-center">
            Please wait, we are confirming your order.
          </div>
        )}
      </div>
    </div>
  );
}
