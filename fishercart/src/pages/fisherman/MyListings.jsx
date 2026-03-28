import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FishContext } from "../../context/FishContext";

import fishImg from "../../assets/fish.png";


export default function MyListings(){
  const navigate = useNavigate();
  const { listings, markSold, createOrder } = useContext(FishContext);

  return (
    <div style={{minHeight:"100vh", background:"#f1f5f9"}}>

      {/* NAVBAR */}
      <div style={{
        background:"#dbeafe",
        padding:"15px 40px",
        display:"flex",
        justifyContent:"space-between"
      }}>
        <h2 style={{color:"#1d4ed8"}}>🐟 FisherCart</h2>
        <span style={{cursor:"pointer"}} onClick={()=>navigate("/fisherman/dashboard")}
>
          ← Back
        </span>
      </div>

      <div style={{padding:"40px"}}>
        <h1>My Fish Listings</h1>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(3,1fr)",
          gap:"20px",
          marginTop:"20px"
        }}>
          {listings.map(fish=>(
            <div key={fish.id} style={{
              background:"white",
              padding:"20px",
              borderRadius:"12px",
              boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
            }}>

            {/* IMAGE */}
            <img 
              src={fish.image || fishImg}
              style={{
                width:"100%",
                height:"150px",
                objectFit:"cover",
                borderRadius:"10px",
                marginBottom:"10px"
              }}
            />

              <h3>{fish.name}</h3>
              <p>₹{fish.price}/kg</p>

              <p>Status:
                <span style={{
                  color: fish.status==="Active" ? "green":"gray",
                  marginLeft:"6px",
                  fontWeight:"bold"
                }}>
                  {fish.status}
                </span>
              </p>

              {/* MARK SOLD */}
              {fish.status==="Active" && (
                <button
                  onClick={()=>markSold(fish.id)}
                  style={{
                    marginTop:"10px",
                    background:"#22c55e",
                    color:"white",
                    border:"none",
                    padding:"8px 12px",
                    borderRadius:"6px",
                    cursor:"pointer",
                    width:"100%"
                  }}>
                  Mark as Sold
                </button>
              )}

              {/* ⭐ NEW BUTTON: SIMULATE BUYER ORDER */}
              <button
                onClick={()=>createOrder(fish.name, 2)}
                style={{
                  background:"#2563eb",
                  color:"white",
                  padding:"8px",
                  border:"none",
                  borderRadius:"6px",
                  marginTop:"8px",
                  width:"100%",
                  cursor:"pointer"
                }}
              >
                Simulate Buyer Order
              </button>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
