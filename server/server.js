const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path')
require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Middleware
app.use(express.json());

app.use(cors({
    origin: 'https://integrativeprogramming.onrender.com', // frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true // if you need cookies/auth
}));

// Handle preflight OPTIONS requests
app.options('*', cors({
    origin: 'https://integrativeprogramming.onrender.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));

// Routes
app.use("/auth", require("./routes/auth"));
app.use("/profile", require("./routes/profile"));

// DB Connect
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});
