const express = require("express");
const bodyParser=require('body-parser')
const mongoose = require("mongoose");
const path=require('path')
require("dotenv").config();

// const cors = require("cors");
const app = express();



app.use(express.json());
// app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend/public')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
  
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const adminroutes = require("./routes/AdminRoute");
const contactroutes=require("./routes/ContactRoute")
const projectroute=require('./routes/ProjectsRoute')
const whatidoroutes=require('./routes/WhatIDoRoute')
const aboutroutes=require('./routes/AboutRoute');


const userRoutes=require('./routes/users')
const authRoutes=require('./routes/auth')



mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));
// Routes

app.use('/admin',adminroutes);
app.use('/contact',contactroutes)
app.use('/whatido',whatidoroutes)
app.use('/about',aboutroutes)
app.use('/project',projectroute)
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
const PORT =process.env.PORT || 3002

if(process.env.NODE_ENV="production"){
    app.use(express.static("./frontend/build"))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname, 'frontend','build','index.html'));
    })
}
app.listen(PORT,() => console.log("Server running on port " + PORT));