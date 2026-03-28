import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { FishContext } from "../../context/FishContext";
import fishImg from "../../assets/fish.png";

export default function AddListings(){
  const navigate = useNavigate();
  const { addFish } = useContext(FishContext);

  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [qty,setQty] = useState("");

  const handleAdd = () => {
    if(!name || !price) return alert("Fill all fields");

    addFish({
      id: Date.now(),
      name,
      price,
      qty,
      status:"Active",
      image: fishImg
    });

    navigate("/fisherman/listings");

  };

  return (
    <div style={{minHeight:"100vh", background:"#f1f5f9"}}>

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

      <div style={{
        maxWidth:"500px",
        margin:"40px auto",
        background:"white",
        padding:"30px",
        borderRadius:"12px"
      }}>
        <h2>Add Fish Listing</h2>

        <input placeholder="Fish Name"
          style={inputStyle}
          onChange={e=>setName(e.target.value)}
        />

        <input placeholder="Price per kg"
          style={inputStyle}
          onChange={e=>setPrice(e.target.value)}
        />

        <input placeholder="Quantity"
          style={inputStyle}
          onChange={e=>setQty(e.target.value)}
        />

        <button onClick={handleAdd}
          style={{
            background:"#3b82f6",
            color:"white",
            padding:"12px",
            border:"none",
            width:"100%",
            borderRadius:"8px",
            marginTop:"10px",
            cursor:"pointer"
          }}>
          Add Listing
        </button>
      </div>
    </div>
  )
}

const inputStyle={
  width:"100%",
  padding:"12px",
  marginBottom:"12px",
  border:"1px solid #ccc",
  borderRadius:"6px"
}