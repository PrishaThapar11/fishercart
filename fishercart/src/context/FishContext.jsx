import { createContext, useState, useEffect } from "react";
import fishImg from "../assets/fish.png";

export const FishContext = createContext();

export const FishProvider = ({ children }) => {

  // 🟢 default fish if nothing exists
  const defaultFish = {
    id:1,
    name:"Rohu",
    price:200,
    qty:5,
    status:"Active",
    image: fishImg
  };

  // 🟢 LOAD DATA FROM LOCALSTORAGE + FIX OLD DATA
  const [listings,setListings] = useState(()=>{
    const saved = JSON.parse(localStorage.getItem("fishListings"));

    if(saved && saved.length>0){
      return saved.map(f => ({
        ...f,
        image: f.image || fishImg,          // fix old image
        price: Number(f.price) || 0,        // fix NaN issue
        qty: Number(f.qty) || 1
      }));
    }

    return [defaultFish];
  });

  // 🟢 SAVE TO LOCALSTORAGE ALWAYS
  useEffect(()=>{
    localStorage.setItem("fishListings", JSON.stringify(listings));
  },[listings]);

  // 🟢 ADD FISH
  const addFish = (fish) => {
    const newFish = {
      ...fish,
      id: Date.now(),
      image: fish.image || fishImg,
      price: Number(fish.price) || 0,
      qty: Number(fish.qty) || 1,
      status:"Active"
    };

    setListings(prev => [...prev, newFish]);
  };

  // 🟢 MARK SOLD
  const markSold = (id) => {
    const updated = listings.map(fish =>
      fish.id === id ? {...fish, status:"Sold"} : fish
    );
    setListings(updated);
  };

  // 🟢 ORDERS
  const [orders,setOrders] = useState([
    {
      id:1,
      fish:"Rohu",
      qty:5,
      buyer:"Ramesh",
      address:"Near Bus Stand, Sehore",
      status:"Pending"
    }
  ]);

const acceptOrder = (id)=>{
  setOrders(prev =>
    prev.map(o => o.id===id ? {...o,status:"Accepted"} : o)
  );
};


  const rejectOrder = (id)=>{
    setOrders(orders.map(o =>
      o.id===id ? {...o,status:"Rejected"} : o
    ));
  };

  const createOrder = (fishName, qty) => {
    const newOrder = {
      id: Date.now(),
      fish: fishName,
      qty: qty,
      buyer: "Demo Buyer",
      address: "Sehore Main Market",
      status: "Pending"
    };

    setOrders(prev => [newOrder, ...prev]);
  };

  return (
    <FishContext.Provider value={{
      listings,
      addFish,
      markSold,
      orders,
      acceptOrder,
      rejectOrder,
      createOrder
    }}>
      {children}
    </FishContext.Provider>
  );
};
