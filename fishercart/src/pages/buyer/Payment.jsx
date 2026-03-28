import { useState } from "react";
import BuyerNavbar from "../../components/buyer/BuyerNavbar";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const [method, setMethod] = useState("cod");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100">
      <BuyerNavbar />

      <div className="p-5 max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Payment
        </h1>

        {/* Order Accepted Info */}
        <div className="bg-green-100 text-green-800 p-4 rounded-lg">
          Your order has been accepted by the fisherman.
        </div>

        {/* Estimated Delivery */}
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-700">
            Estimated Delivery Time:
          </p>
          <p className="text-lg font-semibold text-gray-800">
            45 – 60 minutes
          </p>
        </div>

        {/* Payment Options */}
        <div className="bg-white rounded-xl shadow p-5 space-y-4">
          <h2 className="font-semibold text-gray-800">
            Choose Payment Method
          </h2>

          {/* COD */}
          <div
            onClick={() => setMethod("cod")}
            className={`p-4 rounded-xl border cursor-pointer
              ${
                method === "cod"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200"
              }`}
          >
            <p className="font-medium">Cash on Delivery</p>
            <p className="text-sm text-gray-600">
              Pay when you receive the fish
            </p>
          </div>

          {/* UPI */}
          <div
            onClick={() => setMethod("upi")}
            className={`p-4 rounded-xl border cursor-pointer
              ${
                method === "upi"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200"
              }`}
          >
            <p className="font-medium">UPI / QR Code</p>
            <p className="text-sm text-gray-600">
              Pay using any UPI app
            </p>
          </div>

          {/* Dummy QR */}
          {method === "upi" && (
            <div className="text-center mt-4">
              <div className="w-40 h-40 mx-auto bg-slate-200 flex items-center justify-center rounded">
                QR CODE
              </div>
              <p className="text-xs text-gray-500 mt-2">
                UPI ID: fishercart@upi
              </p>
            </div>
          )}
        </div>

        {/* Confirm */}
        <button
          onClick={() => navigate("/buyer/order-status")}
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
}