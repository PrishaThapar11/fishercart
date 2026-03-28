import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function OTP() {
  const location = useLocation();
  const navigate = useNavigate();

  // role passed from Login page
  const role = location.state?.role || "buyer";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // auto move to next input
    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    // UI-only verification success
    if (role === "buyer") {
      navigate("/buyer/profile/create");
    } else if (role === "fisherman") {
      navigate("/fisherman/dashboard"); // FIXED route
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-200 to-slate-100">
      <div
        className="bg-white w-full max-w-md text-center"
        style={{
          borderRadius: "28px",
          padding: "40px 32px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        }}
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Enter OTP to Continue
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          We have sent a 6-digit OTP to your mobile number.
        </p>

        <div className="flex justify-center gap-3 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              maxLength="1"
              value={digit}
              ref={(el) => (inputsRef.current[index] = el)}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`w-12 h-12 rounded-lg border text-center text-xl font-semibold
                focus:outline-none focus:ring-2
                ${
                  index === 0
                    ? "border-blue-400 focus:ring-blue-400"
                    : "border-gray-300 focus:ring-blue-300"
                }`}
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          className="w-full text-white font-semibold text-lg"
          style={{
            backgroundColor: "#4f83c3",
            padding: "14px",
            borderRadius: "14px",
            boxShadow: "0 6px 14px rgba(79,131,195,0.4)",
          }}
        >
          Verify OTP
        </button>

        <div className="mt-6 text-sm text-gray-600">
          <p>
            Didn’t get the code?
            <span className="text-blue-600 font-medium cursor-pointer">
              {" "}Resend OTP
            </span>
          </p>

          <p
            onClick={() => navigate("/")}
            className="text-sm text-blue-600 cursor-pointer mt-2"
          >
            ← Change Mobile Number
          </p>
        </div>
      </div>
    </div>
  );
}


