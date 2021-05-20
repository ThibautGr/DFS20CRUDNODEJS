const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const expressLayout = require("express-ejs-layouts");
const Project = require("./models/project");
const projectRoutes = require("./routes/projectRoutes");
const app = express ();
app.set('view engine', 'ejs');
app.use(expressLayout);
app.use(express.static("public"))
app.use(express.urlencoded({extended : true}));
const dbUri = "mongodb://localhost:27017";

const mangoospromise = mongoose.connect(dbUri,{useUnifiedTopology: true, useNewUrlParser: true })
    .then(()=> app.listen(4000))
    .catch(err => console.log(err));


app.get("/",(request,response)=>{
    response.redirect("projects")
})

app.use("/projects",projectRoutes);