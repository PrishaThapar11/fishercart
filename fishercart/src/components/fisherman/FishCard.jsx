export default function FishCard({ fish }) {
  return (
    <div className="bg-white rounded-xl shadow p-3">
      <img
        src={fish.image}
        alt={fish.name}
        className="w-full h-32 object-cover rounded-lg"
      />

      <div className="mt-2">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">{fish.name}</h3>
          <span
            className={`text-xs px-2 py-1 rounded ${
              fish.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {fish.status}
          </span>
        </div>

        <p className="text-sm text-gray-600">
          Price: ₹{fish.price}/kg
        </p>
      </div>
    </div>
  );
}
