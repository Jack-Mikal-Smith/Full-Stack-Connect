const router = require('express').Router();

const jobPostingRoute = require('./JobPostingsRoutes');
const projects = require('./projectRoutes');
const textPost = require('./textPostRoutes');
const userRoutes = require('./userRoutes');

router.use('/userRoutes', userRoutes);
router.use('/jobPostingRoute', jobPostingRoute);
router.use('/projectRoutes', projects);
router.use('/textPost', textPost);

module.exports = router
