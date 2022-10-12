const {Router}=require('express');
const {getProject,saveProject,updateProject,deleteProject, }=require('../controllers/ProjectsController')
const upload=require('../middleware/upload')
const projectRouter=Router();
projectRouter.get('/get-project',getProject);
projectRouter.post('/save-project',upload,saveProject);
projectRouter.put('/:id',upload,updateProject);
projectRouter.delete('/:id',deleteProject)

module.exports=projectRouter;