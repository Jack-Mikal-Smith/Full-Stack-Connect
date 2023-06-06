const router = require('express').Router();

const apiRoutes = require('./api');

const homeController = require('./HomeController');
const dashboardRoutes = require('./DashboardRoutes');

router.use('/', homeController);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

// const projectRoutes = require('./api/projectRoutes');
// const userRoutes = require('./api/userRoutes');

// const UserController = require('./UserController');
// const ProjectController = require('./ProjectController');
// const JobPostingController = require('./JobPostingController')
// const TextPostingController = require('./TextPostController')

module.exports = router

// module.exports = {
//   projectRoutes,
//   userRoutes,
//   homeController,
//   dashboardRoutes,
//   UserController,
//   ProjectController,
//   JobPostingController,
//   TextPostingController
// };
