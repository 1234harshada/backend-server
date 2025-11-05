const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "mysecretkey"; // for demo

// ✅ Signup Route
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.json({ info: "Please fill all fields" });

  let users = [];
  if (fs.existsSync("users.json")) {
    users = JSON.parse(fs.readFileSync("users.json"));
  }

  // Check if email exists
  if (users.find(u => u.email === email)) {
    return res.json({ info: "Email already registered" });
  }

  const hashed = await bcrypt.hash(password, 8);
  users.push({ name, email, password: hashed });
  fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

  res.json({ info: "Signup successful 🎉" });
});

// ✅ Login Route
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.json({ info: "Please fill all fields" });

  let users = [];
  if (fs.existsSync("users.json")) {
    users = JSON.parse(fs.readFileSync("users.json"));
  }

  const user = users.find(u => u.email === email);
  if (!user) return res.json({ info: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.json({ info: "Invalid password" });

  const token = jwt.sign({ email }, SECRET, { expiresIn: "1h" });
  res.json({ info: "Login successful ✅", token });
});

// ✅ Start server
app.listen(3000, () => console.log("Server running on port 3000"));