const WhatIDoModel = require("../models/WhatIDoModel");
const mongoose=require('mongoose')

module.exports.getWhatIDo = async (req, res) => {
  try {
    const whatido = await WhatIDoModel.find();
            
    res.status(200).json(whatido);
} catch (error) {
    res.status(404).json({ message: error.message });
}
};

module.exports.saveWhatIDo = async(req, res) => {

  const {title,description} = req.body;

  const newWhatIDo = new WhatIDoModel({ title,description})

  try {
      await newWhatIDo.save();

      res.status(201).json(newWhatIDo );
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
   
  // const whatido = new WhatIDoModel({
  //   title: req.body.title,
  //   description: req.body.description,
  // });
  // whatido
  //   .save()
  //   .then(() => res.json("new uplaoded"))
  //   .catch((err) => {
  //     res.status(400).json(`Error:${err}`);
  //   });
};

module.exports.updateWhatIDo = async (req, res) => {

  const { id } = req.params;
  const {title,description} = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data  with id: ${id}`);

  const updatedWhatIDo = {title,description, _id: id };

  await WhatIDoModel.findByIdAndUpdate(id, updatedWhatIDo ,{ new: true });

  res.json(updatedWhatIDo);


  // const { _id, title, description } = req.body;

  // WhatIDoModel.findByIdAndUpdate(_id, { title, description })
  //   .then(() => res.set(201).send("Updated Successfully..."))
  //   .catch((err) => console.log(err));
};

module.exports.deleteWhatIDo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await WhatIDoModel.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
}