
const AdminModel=require('../models/AdminModel');
const mongoose=require('mongoose')

module.exports.getAdminDetail=async(req,res)=>{
  try {
    const admindetail = await AdminModel.find();
            
    res.status(200).json(admindetail);
} catch (error) {
    res.status(404).json({ message: error.message });
}
}
module.exports.saveAdminDetail= async (req,res)=>{
  const { username,password} = req.body;

  const newAdminDetail = new AdminModel({ username,password})

  try {
      await newAdminDetail.save();

      res.status(201).json(newAdminDetail );
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
   
}

module.exports.updateAdminDetail= async (req,res)=>{

  const { id } = req.params;
  const { username,password } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data  with id: ${id}`);

  const updatedAdminDetail = { username,password, _id: id };

  await AdminModel.findByIdAndUpdate(id, updatedAdminDetail, { new: true });

  res.json(updatedAdminDetail);

 
}

module.exports.deleteAdminDetail = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await AdminModel.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
}