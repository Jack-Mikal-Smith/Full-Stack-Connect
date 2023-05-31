const express = require('express');
const controllers = require('./app/controllers'); // Assuming index.js is the default index file

const app = express();

// Define routes
console.log(controllers); // Log the controllers object to check its contents

app.get('/', controllers.HomeController.index);
app.get('/users', controllers.UserController.getAll);
app.post('/users', controllers.UserController.create);
app.get('/users/:id', controllers.UserController.getById);
app.put('/users/:id', controllers.UserController.update);
app.delete('/users/:id', controllers.UserController.delete);
app.get('/api/projects', controllers.ProjectController.getAll);
app.post('/api/projects', controllers.ProjectController.create);
app.get('/api/projects/:id', controllers.ProjectController.getById);
app.put('/api/projects/:id', controllers.ProjectController.update);
app.delete('/api/projects/:id', controllers.ProjectController.delete);



// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
