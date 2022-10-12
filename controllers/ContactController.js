const ContactModel = require("../models/ContactModel");
const mongoose=require('mongoose')



module.exports.getContactDetail = async (req, res) => {
  try {
    const contactdetail = await ContactModel.find();
            
    res.status(200).json(contactdetail);
} catch (error) {
    res.status(404).json({ message: error.message });
}
};
module.exports.saveContactDetail = async(req, res) => {

  const {name,email,message} = req.body;

  const newContactDetail= new ContactModel({ name,email,message})

  try {
      await newContactDetail.save();

      res.status(201).json(newContactDetail );
  } catch (error) {
      res.status(409).json({ message: error.message });
  }


  // const contact = new ContactModel({
  //   name: req.body.name,
  //   email: req.body.email,
  //   message: req.body.message,
  // });
  // contact
  //   .save()
  //   .then(() => res.json("new uplaoded"))
  //   .catch((err) => {
  //     res.status(400).json(`Error:${err}`);
  //   });
};

module.exports.updateContactDetail = async (req, res) => {
  const { id } = req.params;
  const { name,email,message } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data  with id: ${id}`);

  const updatedContactDetail = { name,email,message, _id: id };

  await ContactModel.findByIdAndUpdate(id, updatedContactDetail, { new: true });

  res.json(updatedContactDetail);
  // const { _id, name,email,message } = req.body;
  // ContactModel.findByIdAndUpdate(_id, { name,email,message })
  //   .then(() => res.set(201).send("Updated Successfully..."))
  //   .catch((err) => console.log(err));
};

module.exports.deleteContactDetail = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await ContactModel.findByIdAndRemove(id);

  res.json({ message: "Contact deleted successfully." });
}
