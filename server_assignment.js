const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let myUsers = [];

app.post("/signup", (req, res) => {
  console.log("Received /signup request");
  console.log("Body:", req.body); 

  const { username, email, pass } = req.body;

  if (!username || !email || !pass) {
    return res.status(400).send({ message: "All fields are required" });
  }


  for (let i = 0; i < myUsers.length; i++) {
    if (myUsers[i].email === email) {
      return res.status(400).send({ message: "Email already registered" });
    }
  }

  if (pass.length < 4) {
    return res.status(400).send({ message: "Password must be at least 4 characters" });
  }

  myUsers.push({ username, email, pass });
  myUsers.sort((a, b) => a.username.localeCompare(b.username));

  console.log("Current Users:", myUsers); 
  res.status(201).send({ message: "Signup successful", user: { username, email } });
});

app.post("/signin", (req, res) => {
  console.log("Received /signin request");
  console.log("Body:", req.body);

  const { email, pass } = req.body;

  if (!email || !pass) {
    return res.status(400).send({ message: "Email and password required" });
  }

  let found = null;
  for (let i = 0; i < myUsers.length; i++) {
    if (myUsers[i].email === email && myUsers[i].pass === pass) {
      found = myUsers[i];
      break;
    }
  }

  if (!found) {
    return res.status(401).send({ message: "Invalid email or password" });
  }

  res.status(200).send({ message: "Login successful", user: { username: found.username, email: found.email } });
});


app.get("/", (req, res) => {
  res.send("Server is working!");
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});