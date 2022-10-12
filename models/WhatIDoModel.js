const mongoose=require('mongoose');

const WhatIDoSchema=new mongoose.Schema({
   title:{
    type:String,
    required:true,
   },
   description:{
    type:String,
    required:true
   }
});
module.exports =mongoose.model('WhatIDo',WhatIDoSchema)