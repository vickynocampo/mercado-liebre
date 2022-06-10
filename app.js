const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.get("/",(req, res)=>{res.sendFile(path.resolve(__dirname, "./views/home.html"))});
app.get("/register",(req, res)=>{res.sendFile(path.resolve(__dirname, "./views/register.html"))});
app.get("/login",(req, res)=>{res.sendFile(path.resolve(__dirname, "./views/login.html"))});

app.post("/login",(req, res)=>{res.redirect("/")});
app.post("/register",(req, res)=>{res.redirect("/")});

//app.listen(3000,()=>{console.log("Servidor corriendo en puerto 3000");})//

app.listen((port),()=>{console.log("Servidor corriendo en puerto 3000");})