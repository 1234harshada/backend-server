const express = require('express');
const app = express();
app.use(express.json());

let posts = [
    { id: 1, title: "First Post", content: "Hello World" },
    { id: 2, title: "Second Post", content: "Express is easy" }
];


let tasks = [
    { id: 101, title: "Harshada: Clean the room" },
    { id: 102, title: "Harshada: Buy groceries" },
    { id: 103, title: "Harshada: Complete assignment" },
    { id: 104, title: "Harshada: Prepare Coffee for Team" },
    { id: 105, title: "Harshada: Organize Desk Drawers" }
];

app.get('/posts/:postId', (req, res) => {
    const postId = parseInt(req.params.postId);
    const post = posts.find(p => p.id === postId);

    if (post) {
        console.log("GET Response:", post); 
        res.send("Check terminal for GET response"); 
    } else {
        console.log(`GET Error: Post with ID ${postId} not found`);
        res.send("Post not found. Check terminal.");
    }
});


app.delete('/tasks/:taskId', (req, res) => {
    const taskId = parseInt(req.params.taskId);
    const index = tasks.findIndex(t => t.id === taskId);

    if (index >= 0) {
        const removed = tasks.splice(index, 1);
        console.log("DELETE Response:", removed[0]); 
        console.log("Remaining Tasks:", tasks);
        res.send("Check terminal for DELETE response"); 
    } else {
        console.log(`DELETE Error: Task with ID ${taskId} not found`);
        res.send("Task not found. Check terminal.");
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});