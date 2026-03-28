import { useState, useRef } from "react";
import BuyerNavbar from "../../components/buyer/BuyerNavbar";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

export default function BuyerProfile() {
  const [isEditing, setIsEditing] = useState(false);

  // Dummy profile data
  const [profile, setProfile] = useState({
    name: "Rahul Verma",
    phone: "98765 43210",
    location: "Sehore",
    role: "Buyer",
    photo: null,
  });

  const fileInputRef = useRef(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({
        ...profile,
        photo: URL.createObjectURL(file),
      });
    }
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <BuyerNavbar />

      <div className="p-5 max-w-3xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">
          My Profile
        </h1>

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow p-5 space-y-4">

          {/* Profile Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center">
                {profile.photo ? (
                  <img
                    src={profile.photo}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-4xl text-gray-400">👤</span>
                )}
              </div>

              {isEditing && (
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="absolute bottom-0 right-0 bg-blue-500 text-white
                             w-8 h-8 rounded-full flex items-center justify-center
                             shadow"
                >
                  📷
                </button>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoChange}
              />
            </div>
          </div>

          {!isEditing ? (
            <>
              {/* VIEW MODE */}
              <p className="text-sm text-gray-700">
                <span className="font-medium">Name:</span> {profile.name}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Mobile:</span> {profile.phone}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Location:</span> {profile.location}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Role:</span> {profile.role}
              </p>

              <button
                onClick={() => setIsEditing(true)}
                className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm"
              >
                Edit Profile
              </button>
            </>
          ) : (
            <>
              {/* EDIT MODE */}
              <Input
                label="Full Name"
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
              />

              <Input
                label="Mobile Number"
                value={profile.phone}
                disabled
              />

              <Input
                label="Location"
                value={profile.location}
                onChange={(e) =>
                  setProfile({ ...profile, location: e.target.value })
                }
              />

              <div className="flex gap-3">
                <Button onClick={handleSave}>
                  Save
                </Button>

                <button
                  onClick={() => setIsEditing(false)}
                  className="text-sm text-gray-600"
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>

        {/* Logout */}
        <div className="bg-white rounded-xl shadow p-5">
          <button className="text-red-500 font-medium text-sm">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}