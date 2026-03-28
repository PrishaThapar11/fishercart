import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-100 px-8 py-3 flex justify-between items-center shadow-sm">
      <h1
        onClick={() => navigate("/fisherman/dashboard")}
        className="font-bold text-blue-700 text-lg cursor-pointer"
      >
        🐟 FisherCart
      </h1>

      <div className="flex gap-8 text-sm text-gray-700">
        <span
          onClick={() => navigate("/fisherman/dashboard")}
          className="cursor-pointer font-medium"
        >
          Home
        </span>

        <span
          onClick={() => navigate("/fisherman/listings")}
          className="cursor-pointer"
        >
          My Listings
        </span>

        <span
          onClick={() => navigate("/fisherman/add")}
          className="cursor-pointer"
        >
          Add New
        </span>

        <span
          onClick={() => navigate("/fisherman/requests")}
          className="cursor-pointer"
        >
          My Orders
        </span>

        <span className="cursor-pointer">Profile</span>
      </div>
    </div>
  );
}
