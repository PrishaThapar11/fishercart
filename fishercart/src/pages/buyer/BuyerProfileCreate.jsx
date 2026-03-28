import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

export default function BuyerProfile() {
  const navigate = useNavigate();
  const location = useLocation();

  // Dummy phone number (later comes from login)
  const phoneNumber = "98765 43210";

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          Create Buyer Profile
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Tell us a little about yourself
        </p>

        {/* Profile Photo (UI only) */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-slate-200
                          flex items-center justify-center text-gray-500">
            📷
          </div>
        </div>

        {/* Name */}
        <Input
          label="Full Name"
          placeholder="Enter your name"
        />

        {/* Phone (read-only) */}
        <Input
          label="Mobile Number"
          value={phoneNumber}
          disabled
        />

        {/* Location */}
        <Input
          label="Village / City"
          placeholder="Enter your location"
        />

        {/* Save Button */}
        <Button onClick={() => navigate("/buyer/home")}>
          Save Profile
        </Button>
      </div>
    </div>
  );
}