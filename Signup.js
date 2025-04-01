const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bycrypt");

const signupSchema = mongoose.Schema({
  fname: String,
  fathername: String,
  lname: String,
  dob:Date,
  branch:String,
  rollno:{type:Number, required: true, unique:true},
  section:String,
  address:String,
  mobileno:Number,
  email: String,
  password:{type:String, required:true},
});

const Signup = mongoose.model("Signup", signupSchema);
module.exports = Signup;