const {Router}=require('express');
const {getAbout,saveAbout,updateAbout,deleteAbout}=require('../controllers/AboutController')

const aboutRouter=Router();
aboutRouter.get('/get-about',getAbout);
aboutRouter.post('/save-about',saveAbout);
aboutRouter.patch('/:id',updateAbout);
aboutRouter.delete('/:id',deleteAbout)

module.exports=aboutRouter;