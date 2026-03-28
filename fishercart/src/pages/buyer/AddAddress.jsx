import { useState } from "react";
import BuyerNavbar from "../../components/buyer/BuyerNavbar";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import { useNavigate } from "react-router-dom";

export default function AddAddress() {
  const navigate = useNavigate();

  // Address form state
  const [label, setLabel] = useState("Home");
  const [house, setHouse] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");

  const handleSave = () => {
    const addressText = `${house}${landmark ? ", " + landmark : ""}, ${city}${
      pin ? " - " + pin : ""
    }`;

    navigate("/buyer/delivery", {
      state: {
        address: {
          label,
          details: addressText,
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <BuyerNavbar />

      <div className="p-5 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-5">
          Add New Address
        </h1>

        <div className="bg-white rounded-xl shadow p-5 space-y-4">
          
          {/* Address Type */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Address Type
            </label>
            <select
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            >
              <option>Home</option>
              <option>Shop</option>
              <option>Other</option>
            </select>
          </div>

          <Input
            label="House / Shop Name or Number"
            placeholder="Eg: House No. 12"
            value={house}
            onChange={(e) => setHouse(e.target.value)}
          />

          <Input
            label="Street / Landmark"
            placeholder="Near temple / bus stand"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />

          <Input
            label="Village / City"
            placeholder="Sehore"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <Input
            label="PIN Code (optional)"
            placeholder="466001"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />

          <Button onClick={handleSave}>
            Save Address
          </Button>
        </div>
      </div>
    </div>
  );
}