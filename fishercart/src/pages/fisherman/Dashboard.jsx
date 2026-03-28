import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FishContext } from "../../context/FishContext";


export default function Dashboard(){
  const navigate = useNavigate();
  const { listings, orders } = useContext(FishContext);

  const total = listings.length;
  const active = listings.filter(f => f.status==="Active").length;
  const sold = listings.filter(f => f.status==="Sold").length;

  const earnings = listings
    .filter(f => f.status==="Sold")
    .reduce((sum,f)=> sum + Number(f.price || 0),0);

  // 🔔 pending orders count
  const pendingOrders = orders.filter(o=>o.status==="Pending").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-blue-100 to-purple-200">

      {/* TOP BAR */}
      <div className="flex justify-between items-center px-12 py-5 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-blue-700">🐟 FisherCart</h1>

        <div className="flex items-center gap-8 font-medium text-gray-700">
       <button onClick={()=>navigate("/fisherman/dashboard")}>Dashboard</button>
<button onClick={()=>navigate("/fisherman/listings")}>My Listings</button>
<button onClick={()=>navigate("/fisherman/add")}>Add Fish</button>
<button onClick={()=>navigate("/fisherman/requests")}>Orders</button>


          {/* 🔔 Notification Bell */}
          <div 
            onClick={()=>navigate("/requests")}
            className="relative cursor-pointer text-2xl"
          >
            🔔

            {pendingOrders > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {pendingOrders}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="p-12">

        <h1 className="text-4xl font-bold mb-2 text-gray-800">
          Fisherman Dashboard
        </h1>
        <p className="text-gray-600 mb-10">
          Manage your listings, earnings and buyer orders
        </p>

        {/* STATS */}
        <div className="grid grid-cols-4 gap-8">

          <Card title="Total Listings" value={total} icon="🐟" color="bg-blue-500"/>
          <Card title="Active" value={active} icon="🟢" color="bg-green-500"/>
          <Card title="Sold" value={sold} icon="📦" color="bg-gray-700"/>
          <Card title="Earnings" value={`₹${earnings}`} icon="💰" color="bg-purple-600"/>

        </div>

        {/* ACTIONS */}
        <div className="grid grid-cols-3 gap-8 mt-14">

          <Action 
            title="Add New Fish"
            desc="Upload today's catch"
            icon="➕"
            onClick={()=>navigate("/fisherman/add")}
          />

          <Action 
            title="View Listings"
            desc="Manage your fish"
            icon="🧺"
            onClick={()=>navigate("/fisherman/listings")}
          />

          <Action 
            title="Buyer Orders"
            desc="Accept or reject orders"
            icon="📩"
           onClick={()=>navigate("/fisherman/requests")}
          />

        </div>

        {/* RECENT LISTINGS */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Recent Fish Listings
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-6">
    
            {listings.length === 0 ? (
              <p className="text-gray-500">No fish added yet</p>
            ) : (
              <div className="space-y-4">

                {listings.slice(-5).reverse().map(fish => (
                  <div 
                    key={fish.id}
                    className="flex items-center justify-between border-b pb-3"
                  >
                    <div className="flex items-center gap-4">

                      <img 
                        src={fish.image} 
                        className="w-14 h-14 rounded-lg object-cover"
                      />

                      <div>
                        <p className="font-semibold">{fish.name}</p>
                        <p className="text-sm text-gray-500">₹{fish.price}/kg</p>
                      </div>
                    </div>

                    <span className={`text-sm font-bold ${
                        fish.status==="Sold" ? "text-gray-500" : "text-green-600"
                    }`}>
                        {fish.status}
                    </span>
                  </div>
                ))}

              </div>
            )}

          </div>
        </div>





      </div>
    </div>
  )
}

function Card({title,value,icon,color}){
  return(
    <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:scale-105 transition">
      <div className={`${color} text-white text-2xl w-14 h-14 flex items-center justify-center rounded-xl`}>
        {icon}
      </div>
      <div>
        <h2 className="text-2xl font-bold">{value}</h2>
        <p className="text-gray-500 text-sm">{title}</p>
      </div>
    </div>
  )
}

function Action({title,desc,icon,onClick}){
  return(
    <div 
      onClick={onClick}
      className="bg-white p-8 rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-500 text-sm mt-1">{desc}</p>
    </div>
  )
}