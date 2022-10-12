const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  image:
  {
    type:String,
    required:true,

  },
  link:{
    type:String,
    required:true,

  }
});
module.exports = mongoose.model("project", projectSchema);
