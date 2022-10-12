const fs =require('fs')
const path=require('path')
const mongoose=require('mongoose');
const ProjectsModel = require("../models/ProjectsModel");



module.exports.getProject = async (req, res) => {
  try {
    const projects = await ProjectsModel.find();
            
    res.status(200).json(projects);
} catch (error) {
    res.status(404).json({ message: error.message });
}
};

module.exports.saveProject = async(req, res) => {

  const {name,image,link}=req.body;
  const newProjectDetail= new ProjectsModel({ name,image,link})
  try {
    await newProjectDetail.save();

    res.status(201).json(newProjectDetail );
} catch (error) {
    res.status(409).json({ message: error.message });
}

 
};

module.exports.updateProject = async (req, res) => {
  let name=req.body.name;
  let link=req.body.link;
  let image=req.file.filename;
  let id=req.params.id;

  ProjectsModel.findOneAndUpdate(id,{$set:{name:name,link:link,image:image}},
   { new:true},
   (err,data)=>{
    if(data==null){
      res.send("nothing found")
    }
    else{
      res.send(data)
    }
   }
    )
};

module.exports.deleteProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await ProjectsModel.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
}