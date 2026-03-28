import Order from "../models/Order.js";

// CREATE ORDER
export const createOrder = async (req, res) => {
  try {
    const orderId = "FC" + Date.now();

    const newOrder = new Order({
      orderId,
      ...req.body,
    });

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL ORDERS
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE STATUS
export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};