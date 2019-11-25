const { healthCheck } = require('./controllers/healthCheck');
const usersController = require('./controllers/subjects');

exports.init = app => {
  app.get('/health', healthCheck);
  app.post('/materias', [], usersController.createSubject);
  app.get('/materias', [], usersController.getSubjects);
  app.put('/materias', [], usersController.updateSubject);
  app.delete('/materias', [], usersController.deleteSubject);
  // app.put('/endpoint/put/path', [], controller.methodPUT);
  // app.post('/endpoint/post/path', [], controller.methodPOST);
};
