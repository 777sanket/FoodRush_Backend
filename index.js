import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import foodRouter from "./src/routers/food.router.js";
import userRouter from "./src/routers/user.router.js";
import orderRouter from "./src/routers/order.router.js";

import { dbconnect } from "./src/config/database.config.js";
dbconnect();

const app = express();
app.use(express.json());

// app.get("/", (req, res) => res.status(200).json({ message: "Hello World!" }));
app.use(
  cors({
    credentials: true,
    // origin: ["http://localhost:3001"],
    origin: ["https://foodrush-frontend-apyl.onrender.com"],
    // origin: ["https://food-rush-frontend.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

const PORT = 5001;
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
