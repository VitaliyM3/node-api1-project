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
    if (users) {
        res.status(200).json(users)
    } else {
        res.stauts(500).json({ errorMessage: "There was an error while saving the user to the database" })
    }
});

server.get("/api/users/:id", (req, res) => {
    
});

server.delete("/api/users/:id", (req, res) => {
    const { id } = req.params;
    console.log(id);

    const found = users.find(user => user.id === id);
    if (found) {
        user = users.filter(user => user.id !== id);
        res.status(200).json(found)
    } else {
        res.status(404).json({ message: "The user with the specified ID does not exist." })
    }
    //need to add: if there is error removing user from database, respond with (500 code), { errorMessage: "The user could not be removed" }
});

server.patch("/api/users/:id", (req, res) => {

});

server.listen(3000, () => {
    console.log("server started at port 3000")
});