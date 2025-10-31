import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js"; 

dotenv.config(); 
const app = express(); 
const PORT = process.env.PORT || 3000;

app.use(express.json()); 


app.get("/", (req, res) => {
  res.send("Welcome to Harshada's Backend Server");
});


app.use("/api/v1/users", userRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});