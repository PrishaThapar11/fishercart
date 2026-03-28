import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderId: String,

  items: [
    {
      fishId: String,
      name: String,
      quantity: Number,
      price: Number,
    },
  ],

  customer: {
    name: String,
    phone: String,
    address: String,
  },

  fishermanId: String,

  status: {
    type: String,
    default: "Ordered",
  },

  paymentType: String,

  paymentStatus: {
    type: String,
    default: "Pending",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Order", orderSchema);