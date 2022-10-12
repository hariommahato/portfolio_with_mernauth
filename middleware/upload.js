const multer=require('multer')
const path=require('path')
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, process.env.PHOTO_UPLOAD_URL);
    },
    filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
  });

  const upload = multer({
    storage: storage,
 
  }).single('image')
  module.exports=upload;