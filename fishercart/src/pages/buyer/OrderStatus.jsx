import BuyerNavbar from "../../components/buyer/BuyerNavbar";

export default function OrderStatus() {
  // Dummy current status
  const currentStep = 3;

  const steps = [
    "Order Placed",
    "Accepted",
    "Preparing",
    "Out for Delivery",
    "Completed",
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      <BuyerNavbar />

      <div className="p-5 max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Order Status
        </h1>

        {/* Timeline */}
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="font-semibold text-gray-800 mb-4">
            Order Progress
          </h2>

          <div className="space-y-3">
            {steps.map((step, index) => (
              <div
                key={step}
                className={`flex items-center gap-3 ${
                  index <= currentStep
                    ? "text-green-600"
                    : "text-gray-400"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full ${
                    index <= currentStep
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                />
                <span className="text-sm font-medium">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="font-semibold text-gray-800 mb-3">
            Order Details
          </h2>

          <div className="text-sm text-gray-700 space-y-1">
            <p>Order ID: #FC1024</p>
            <p>Fish: Rohu, Catla</p>
            <p>Total Amount: ₹820</p>
            <p>Delivery Method: Fisherman Delivery</p>
          </div>
        </div>

        {/* Fisherman Contact */}
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="font-semibold text-gray-800 mb-3">
            Fisherman Contact
          </h2>

          <p className="text-sm text-gray-700 mb-3">
            Suresh Bhai · ⭐ 4.5
          </p>

          <div className="flex gap-4">
            <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg">
              Call
            </button>
            <button className="flex-1 bg-slate-200 text-gray-700 py-2 rounded-lg">
              Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}