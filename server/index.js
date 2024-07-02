// index.js

const express = require('express');
const users = require("./MOCK_DATA.json");
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Get all users
app.get("/api/users", (req, res) => {
    return res.json(users);
});

// Get user by ID
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

// Add new user
app.post("/api/users", (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users, null, 2));
    return res.json(newUser);
});

// Update user by ID
app.put("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const updatedUser = req.body;
    users.forEach((user, index) => {
        if (user.id === id) {
            users[index] = { ...user, ...updatedUser };
            fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users, null, 2));
            return res.json(users[index]);
        }
    });
    return res.status(404).json({ message: "User not found" });
});

// Delete user by ID
app.delete("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users, null, 2));
        return res.status(204).end();
    }
    return res.status(404).json({ message: "User not found" });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
