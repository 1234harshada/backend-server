import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./config/db.js";
import loginRoutes from "./routes/login.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// Connect Database
dbConnect();

// Middleware
app.use(express.json());

// Routes
app.use("/api", loginRoutes);

app.get("/", (req, res) => {
  res.send("Login API Running Smoothly!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server active on port ${PORT}`);
});