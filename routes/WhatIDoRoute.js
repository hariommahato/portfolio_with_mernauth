const {Router}=require('express');
const {getWhatIDo,saveWhatIDo,updateWhatIDo,deleteWhatIDo}=require('../controllers/WhatIDoControllers')

const whatidoRouter=Router();
whatidoRouter.get('/get-whatido',getWhatIDo);
whatidoRouter.post('/save-whatido',saveWhatIDo);
whatidoRouter.patch('/:id',updateWhatIDo);
whatidoRouter.delete('/:id',deleteWhatIDo)

module.exports=whatidoRouter;