const AboutModel = require("../models/AboutModel");
const mongoose = require("mongoose");

module.exports.getAbout = async (req, res) => {
  try {
    const about = await AboutModel.find();

    res.status(200).json(about);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
module.exports.saveAbout = async (req, res) => {
  const { text } = req.body;

  const newAbout = new AboutModel({ text });

  try {
    await newAbout.save();
t
    res.status(201).json(newAbout);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports.updateAbout = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No data  with id: ${id}`);

  const updatedAbout = { text, _id: id };

  await AboutModel.findByIdAndUpdate(id, updatedAbout, { new: true });

  res.json(updatedAbout);
};
module.exports.deleteAbout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await AboutModel.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};
