import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({

  name:{
    type:String,
    required:true,
    minlength:3
  },

  email:{
    type:String,
    required:true,
    match:/\S+@\S+\.\S+/
  },

  message:{
    type:String,
    required:true,
    minlength:10
  },

  createdAt:{
    type:Date,
    default:Date.now
  }

});

export default mongoose.model("Contact",contactSchema);