const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
  res.send(`
    Hey Harshada !<br>
    Welcome to your fun Node.js server.<br>
    Today is a great day to code!<br>
    Keep learning and exploring.<br>
    Build cool projects every day.<br>
    Smile and enjoy! 
  `);
});


console.log("Hey Harshada !");
console.log("Welcome to your fun Node.js server.");
console.log("Today is a great day to code!");
console.log("Keep learning and exploring.");
console.log("Build cool projects every day.");
console.log("Smile and enjoy! ");

// Server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});