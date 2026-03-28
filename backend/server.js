import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect database
connectDB();

// routes
app.use("/api/orders", orderRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

});
