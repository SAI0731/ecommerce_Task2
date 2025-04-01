const mongoose = require("mongoose");

const signinSchema = mongoose.Schema({
  
  rollno:{type:Number, required: true, unique:true},
  password:{type:String, required:true},
});

const Signin = mongoose.model("Signin", signinSchema);
module.exports = Signin;