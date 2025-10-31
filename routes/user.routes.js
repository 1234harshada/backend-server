// routes/user.routes.js
import express from "express";
const router = express.Router();

// sample data (temporary database)
let users = [
  { id: 1, name: "Harsh", age: 22 },
  { id: 2, name: "Ram", age: 25 },
];

// GET - show all users
router.get("/", (req, res) => {
  res.json({ message: "All users list", users });
});

// POST - add new user
router.post("/", (req, res) => {
  const { name, age } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  const newUser = { id: Date.now(), name, age };
  users.push(newUser);
  res.status(201).json({ message: "User added", newUser });
});

// PATCH - update user
router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) return res.status(404).json({ error: "User not found" });

  const { name, age } = req.body;
  if (name) user.name = name;
  if (age) user.age = age;

  res.json({ message: "User updated", user });
});

// DELETE - remove user
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.filter(u => u.id !== id);
  res.json({ message: "User deleted successfully" });
});

// extra route (for demo)
router.get("/cart", (req, res) => {
  res.send(" This is your shopping cart!");
});

export default router;