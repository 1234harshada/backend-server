// Load .env variables
require('dotenv').config();

const express = require('express');
const app = express();

// Use PORT from .env, default 3000
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    Hey ${process.env.MY_NAME} !<br>
    Your favorite color is ${process.env.FAVORITE_COLOR}.<br>
    Your favorite food is ${process.env.FAVORITE_FOOD}.<br>
    City: ${process.env.CITY}<br>
    Hobby: ${process.env.HOBBY}<br>
    Language: ${process.env.LANGUAGE}<br>
    Skill: ${process.env.SKILL}<br>
    Welcome to your fun Node.js server!<br>
    Today is a great day to code!<br>
    Keep learning and exploring.<br>
    Build cool projects every day.<br>
    Smile and enjoy! 
  `);
});

// Console log for server side
console.log(`Hey ${process.env.MY_NAME} !`);
console.log(`Favorite Color: ${process.env.FAVORITE_COLOR}`);
console.log(`Favorite Food: ${process.env.FAVORITE_FOOD}`);
console.log(`City: ${process.env.CITY}`);
console.log(`Hobby: ${process.env.HOBBY}`);
console.log(`Language: ${process.env.LANGUAGE}`);
console.log(`Skill: ${process.env.SKILL}`);
console.log("Welcome to your fun Node.js server.");
console.log("Today is a great day to code!");
console.log("Keep learning and exploring.");
console.log("Build cool projects every day.");
console.log("Smile and enjoy! ");

// Server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});