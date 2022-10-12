const {Router}=require('express');
const {getContactDetail,saveContactDetail,updateContactDetail,deleteContactDetail}=require('../controllers/ContactController')

const contactRouter=Router();
contactRouter.get('/get-contactdetail',getContactDetail);
contactRouter.post('/save-contactdetail',saveContactDetail);
contactRouter.patch('/:id',updateContactDetail);
contactRouter.delete('/:id',deleteContactDetail)

module.exports=contactRouter;