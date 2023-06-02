const projectRoutes = require('./api/projectRoutes');
const userRoutes = require('./api/userRoutes');
const HomeController = require('./HomeController');
const UserController = require('./UserController');
const ProjectController = require('./ProjectController');
const JobPostingController = require('./JobPostingController')
const TextPostingController = require('./TextPostController')

module.exports = {
  projectRoutes,
  userRoutes,
  HomeController,
  UserController,
  ProjectController,
  JobPostingController,
  TextPostingController
};
