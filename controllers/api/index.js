const router = require("express").Router();

// import routes
const jobPostingRoutes = require("./job-posting-routes");
const textPostRoutes = require("./text-post-routes");
const userRoutes = require("./user-file-routes");

// use routes
router.use("/user", userRoutes);
router.use("/jobpost", jobPostingRoutes);
router.use("/textpost", textPostRoutes);

module.exports = router;
