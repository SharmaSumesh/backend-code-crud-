const express = require("express");
const mongoose  = require("mongoose");
const userData = require("./UserSchema");

const app = express();
app.use(express.json());
app.post("/",async (req,res)=>{
    console.log(req.body);
    const  {name,email,age}  = req.body;
  
    try
    {
        const userAdded = await userData.create({name:name,email:email,age:age});
        res.status(201).json(userAdded);
    }
    catch(error)
    {
        console.log(error);
        res.status(201).json("error");
    }

})
app.get("/get",async (req,res)=>{
    try
    {
        const userget = await userData.find();
        res.status(201).json(userget);
    }
    catch(error)
    {
        console.log(error);
        res.status(201).json("error");
    }

})// get the data use
app.get("/:id",async (req,res)=>{
    const { id } = req.params;
    try
    {
        const userdelete = await userData.findByIdAndDelete({_id:id});
        res.status(201).json(userdelete);
    }
    catch(error)
    {
        console.log(error);
        res.status(201).json("error");
    }

})
// delete the data 
app.delete("/:id",async (req,res)=>{
    const { id } = req.params;
    try
    {
        const userdelete = await userData.findByIdAndDelete({_id:id});
        res.status(201).json(userdelete);
    }
    catch(error)
    {
        console.log(error);
        res.status(201).json("error");
    }

})
// update the data 
app.patch("/:id",async (req,res)=>{
    const { id } = req.params;
    try
    {
        const userupdate = await userData.findByIdAndUpdate({_id:id});
        res.status(201).json(userupdate);
    }
    catch(error)
    {
        console.log(error);
        res.status(201).json("error");
    }

})
try
{
    mongoose.connect("mongodb+srv://sumesh:1234@cluster0.qbgmxaw.mongodb.net/")
    console.log("connected")
}
catch(error)
{
    console.log("Not connected")
}
app.listen(5000,()=>{
    console.log("server is on")

})