const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  message:{
    type:String,
    required:true,
  }
});
module.exports = mongoose.model("GetInTouchFormDetail",ContactSchema);
