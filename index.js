const express = require('express');
const app= express();
const http = require('http');
const cors = require("cors"); 
const {server}= require("socket.io");


app.use(cors());

const server= http.createServer(app);
const io= new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});
io.on("connection", (socket)=>{
    console.log(socket.id);

    socket.io("Join room", (data)=>{
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`)
    });
    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    });
});

server.listen(3001, () => {
    console.log('Server Running');
});
