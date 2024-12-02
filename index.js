const express = require("express");
const mongoose = require("mongoose");
const app = express();

const userRoutes = require("./Route/User");
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
database.connect();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true,
    })
)

app.use("/api/v1/auth", userRoutes);

app.get("/", (req,res) => {
    return res.json({
        success:true,
        message:'Your server is up and running....'
    });
});

app.listen(PORT, () => {
    console.log(`your server started at ${PORT}`);
})

