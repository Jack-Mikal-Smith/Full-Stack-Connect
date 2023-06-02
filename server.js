const express = require('express');
const controllers = require('./app/controllers'); // Assuming index.js is the default index file

const app = express();

// Define routes
console.log(controllers); // Log the controllers object to check its contents
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
app.get('/api/jobposts', controllers.JobPostingController.getAll);
app.post('/api/jobposts', controllers.JobPostingController.create);
app.get('/api/jobposts/:id', controllers.JobPostingController.getById);
app.put('/api/jobposts/:id', controllers.JobPostingController.update);
app.delete('/api/jobposts/:id', controllers.JobPostingController.delete);
app.get('/api/textposts', controllers.TextPostingController.getAll);
app.post('/api/textposts', controllers.TextPostingController.create);
app.get('/api/textposts/:id', controllers.TextPostingController.getById);
app.put('/api/textposts/:id', controllers.TextPostingController.update);
app.delete('/api/textposts/:id', controllers.TextPostingController.delete);


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
