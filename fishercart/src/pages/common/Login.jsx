import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import fishermenImg from "../../assets/fishermen.png";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("buyer"); // default stays Buyer

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-100 px-4">
      
      {/* OUTER CARD */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* LEFT PANEL */}
        <div className="hidden md:flex flex-col justify-between p-8 bg-gradient-to-br from-teal-50 to-slate-100">
          
          <div>
            <h1 className="text-3xl font-extrabold text-gray-800 leading-tight">
              Welcome to <br />
              <span className="text-4xl">FisherCart</span>
            </h1>

            <p className="text-sm text-gray-600 mt-3 max-w-xs">
              Connecting Kevat fishers with fair-market buyers
              in Sehore, Ashta & Kothri
            </p>
          </div>

          {/* Illustration */}
          <div className="flex justify-center my-6">
            <div className="bg-white rounded-2xl shadow p-3">
              <img
                src={fishermenImg}
                alt="Fishermen illustration"
                className="w-72 rounded-xl"
              />
            </div>
          </div>

          <p className="text-xs text-gray-500">
            EPICS Project · Sehore Region · 2025
          </p>
        </div>

        {/* RIGHT PANEL */}
        <div className="p-8 flex flex-col justify-center">
          
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Login to Continue
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Choose your role
          </p>

          {/* ROLE SELECTION */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            
            {/* Buyer */}
            <div
              onClick={() => setRole("buyer")}
              className={`rounded-xl p-4 text-center cursor-pointer
                ${
                  role === "buyer"
                    ? "border-2 border-green-400 bg-green-50"
                    : "border border-green-200 bg-green-100/40"
                }`}
            >
              <div className="text-2xl mb-2">🛒</div>
              <p className="font-semibold text-gray-800">Buyer</p>
              <p className="text-xs text-gray-600 mt-1">
                Browse today’s catch & connect with sellers
              </p>
            </div>

            {/* Fisherman */}
            <div
              onClick={() => setRole("fisherman")}
              className={`rounded-xl p-4 text-center cursor-pointer
                ${
                  role === "fisherman"
                    ? "border-2 border-green-400 bg-green-50"
                    : "border border-green-200 bg-green-100/40"
                }`}
            >
              <div className="text-2xl mb-2">🎣</div>
              <p className="font-semibold text-gray-800">Fisherman</p>
              <p className="text-xs text-gray-600 mt-1">
                List your catch & receive fair bids
              </p>
            </div>
          </div>

          {/* MOBILE INPUT */}
          <Input
            label="Mobile Number"
            placeholder="98765 43210"
          />

          {/* SEND OTP */}
          <Button onClick={() => navigate("/otp", { state: { role } })}>
            Send OTP
          </Button>

          {/* FOOTER LINKS */}
          <div className="text-center mt-4 text-sm text-gray-600">
            <p
            onClick={() => navigate("/buyer/home")}
            className="cursor-pointer hover:underline"
            >
              Continue as Guest (Browse only)
            </p>
              
            <p className="text-blue-600 font-medium mt-1 cursor-pointer">
              Need help?
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

