// this is the express import
const express = require("express");

// this creates our server instance
const server = express();
server.use(express.json());

let users = [];

server.post("/api/users", (req, res) => {
    const userInfo = req.body;
    
})

server.get("/api/users", (req, res) => {
    res.json({message: "hello, world"})
});

server.listen(3000, () => {
    console.log("server started at port 3000")
});