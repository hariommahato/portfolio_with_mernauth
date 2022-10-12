const {Router}=require('express');
const {getAdminDetail,saveAdminDetail,updateAdminDetail,deleteAdminDetail}=require('../controllers/AdminController')

const adminRouter=Router();
adminRouter.get('/get-admindetail',getAdminDetail);
adminRouter.post('/save-admindetail',saveAdminDetail);
adminRouter.patch('/:id',updateAdminDetail);
adminRouter.delete('/:id',deleteAdminDetail)

module.exports=adminRouter;