import { useNavigate, useParams } from "react-router-dom";
import BuyerNavbar from "../../components/buyer/BuyerNavbar";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { fishList } from "../../data/dummyFish";

export default function FishDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const fish = fishList.find((f) => f.id === Number(id));

  if (!fish) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <p className="text-gray-500">Fish not found 🐟</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <BuyerNavbar />

      <div className="p-5 max-w-5xl mx-auto space-y-5">
        
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-blue-600 font-medium"
        >
          ← Back to listings
        </button>

        {/* Main Card */}
        <div className="bg-white rounded-xl shadow p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Image */}
          <img
            src={fish.image}
            alt={fish.name}
            className="w-full h-64 object-cover rounded-lg"
          />

          {/* Details */}
          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-gray-800">
              {fish.name}
            </h1>

            <p className="text-green-600 text-sm font-medium">
              Caught Today
            </p>

            <p className="text-lg font-semibold text-gray-700">
              ₹{fish.price} / kg
            </p>

            <p className="text-sm text-gray-600">
              Available Quantity: {fish.quantity}
            </p>

            {/* Quantity Selector */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Select Quantity (kg)
              </label>
              <input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="w-24 border rounded px-2 py-1"
              />
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => {
                addToCart(fish, qty);
                setAdded(true);
              }}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg font-medium"
            >
              Add to Cart
            </button>

            {added && (
              <p className="text-green-600 text-sm mt-2">
                Added to cart successfully
              </p>
            )}

            <button
              onClick={() => navigate("/buyer/cart")}
              className="w-full bg-green-500 text-white py-2 rounded-lg font-medium"
            >
              Go to Cart
            </button>
          </div>
        </div>

        {/* Fisherman Info */}
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="font-semibold text-gray-800 mb-2">
            Fisherman Details
          </h2>

          <p className="text-sm text-gray-700">
            Name: {fish.seller}
          </p>
          <p className="text-sm text-gray-700">
            Village: {fish.village}
          </p>
          <p className="text-sm text-gray-700">
            Rating: ⭐ 4.5
          </p>

          <button className="mt-3 text-blue-600 text-sm font-medium">
            Call Fisherman
          </button>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="font-semibold text-gray-800 mb-3">
            Buyer Reviews
          </h2>

          <div className="text-sm text-gray-600 space-y-2">
            <p>⭐ 5 – Very fresh fish!</p>
            <p>⭐ 4 – Good quality and on time.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
