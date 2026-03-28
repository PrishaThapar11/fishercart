import { useNavigate } from "react-router-dom";

export default function FishCard({ fish }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <img
      src={fish.image}
      alt={fish.name}
      className="w-full h-32 object-cover"
      />

      <div className="p-3">
        <h3 className="font-semibold text-gray-800">{fish.name}</h3>

        <p className="text-sm text-gray-600">
          Price: ₹{fish.price}/kg
        </p>
        <p className="text-sm text-gray-600">
          Quantity: {fish.quantity}
        </p>

        <button
        onClick={() => navigate(`/buyer/fish/${fish.id}`)}
        className="mt-2 w-full bg-blue-500 text-white text-sm py-2 rounded-lg"
        >
          View Details
        </button>



        <p className="text-xs text-gray-500 mt-2">
          Seller: {fish.seller}
        </p>
        <p className="text-xs text-gray-500">
          Village: {fish.village}
        </p>
      </div>
    </div>
  );
}