// this is the express import
const express = require("express");
const shortid = require("shortid");

// this creates our server instance
const server = express();
server.use(express.json());

let users = [
    {
        id: shortid.generate(),
        name: "Tony Hawk",
        bio: "Pro skater from the 90's"
    }
];

server.post("/api/users", (req, res) => {
    const userInfo = req.body;
    userInfo.id = shortid.generate();
    if (userInfo.name && userInfo.bio) {
        users.push(userInfo)
        res.status(201).json(users);
    } else {
        res.status(400).json({errorMessage: "Please provide name and bio for the user."})
    }
})

server.get("/api/users", (req, res) => {
    res.json({message: "hello, world"})
});

server.listen(3000, () => {
    console.log("server started at port 3000")
});