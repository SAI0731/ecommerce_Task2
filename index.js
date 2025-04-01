
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const port = 3000;

const product = require("./models/product");
const Signup = require("./models/Signup");
const Signin = reruire("./models/Signin")

app.get("/sayhello", (req, res) => {
  res.send("Hello World!");
});

app.post("/addproducts", async (req, res) => {
  try {
    const product = await product.create(req.body);
    res.json(product);
    console.log("Data inserted");
  } catch (error) {
    res.send("Data not inserted");
  }
});

app.get("/getproducts", async (req, res) => {
  try {
    const product = await product.find({});
    res.json(product);
    console.log("Data fetched");
  } catch (error) {
    res.send("Data not fetched");
  }
});

app.post("/signup", async (req, res) => {
    const {rollno,password} =req.boby;

    if(!rollno || !password){
        return res.status(400).json({message:"Roll number and password required"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const signup = await Signup.create(req.body);
    res.json(signup);
    console.log("User Created");
  } catch (error) {
    res.send("User not Created");
  }
});

app.post("/signin", async (req, res) =>{
    const { rollno, password } = req.body;
    if(!rollno || !password){
        return res.status(400).json({message:"Roll number and password required"});
    }

    const user = await UserActivation.findOne({rollno});

    if(!user){
        return res.status(404).json({message: "User not found"});
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(isMatch){
        return res.status(200).json({message:"User found"});
    }else{
        return res.status(401).json({message:"invalid password"});
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose
  .connect(
    "mongodb+srv://{replace username}:{replace password}@p5ecommerce.cv4jsqj.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to MongoDB Successfully");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
