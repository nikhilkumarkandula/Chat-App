import express from "express"
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import cors from 'cors'

import path from "path";

import { app, server } from "./lib/socket.js"
import { connectDB } from "./lib/db.js"

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js"

dotenv.config();

const PORT = process.env.PORT
const __dirname = path.resolve();

app.use(express.json({limit:"10mb"}));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

if(process.env.NODE_ENV ==="production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    })
}

server.listen(PORT, () => {
    console.log("Server running of port 5001")
    connectDB();
}); 