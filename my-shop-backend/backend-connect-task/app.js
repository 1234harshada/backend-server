import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// connect database
connectDB();

app.use(express.json());
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Server and Database both are connected! ");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});