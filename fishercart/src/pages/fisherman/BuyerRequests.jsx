import { useContext } from "react";
import { FishContext } from "../../context/FishContext";

import { useNavigate } from "react-router-dom";

export default function BuyerRequests(){
  const { orders, acceptOrder, rejectOrder } = useContext(FishContext);
  const navigate = useNavigate();

  return (
    <div style={{padding:"40px"}}>
      
      <button onClick={()=>navigate("/fisherman/dashboard")}
 style={{marginBottom:"20px"}}>
        ← Back
      </button>

      <h1>Buyer Orders</h1>

      {orders.length===0 && <p>No orders yet</p>}

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"20px",
        marginTop:"20px"
      }}>
        {orders.map(o=>(
          <div key={o.id} style={{
            background:"white",
            padding:"20px",
            borderRadius:"12px",
            boxShadow:"0 4px 8px rgba(0,0,0,0.1)"
          }}>
            <h3>{o.fish}</h3>
            <p><b>Qty:</b> {o.qty} kg</p>
            <p><b>Buyer:</b> {o.buyer}</p>
            <p><b>Address:</b> {o.address}</p>
            <p>
              <b>Status:</b>{" "}
              <span style={{
                color:
                  o.status==="Accepted"?"green":
                  o.status==="Rejected"?"red":"orange"
              }}>
                {o.status}
              </span>
            </p>

            {o.status==="Pending" && (
              <div style={{marginTop:"10px",display:"flex",gap:"10px"}}>
                <button 
                  onClick={()=>acceptOrder(o.id)}
                  style={{
                    background:"green",
                    color:"white",
                    padding:"8px 12px",
                    border:"none",
                    borderRadius:"6px"
                  }}>
                  Accept
                </button>

                <button 
                  onClick={()=>rejectOrder(o.id)}
                  style={{
                    background:"red",
                    color:"white",
                    padding:"8px 12px",
                    border:"none",
                    borderRadius:"6px"
                  }}>
                  Reject
                </button>
              </div>
            )}

          </div>
        ))}
      </div>

    </div>
  )
}
