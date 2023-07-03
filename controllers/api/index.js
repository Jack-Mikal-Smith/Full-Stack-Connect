const router = require("express").Router();

// import routes

const textPostRoutes = require("./text-post-routes");
const userRoutes = require("./user-file-routes");
const jobPostings = require("../job-posting-routes");

// use routes
router.use("/user", userRoutes);
router.use("/textpost", textPostRoutes);
router.use("/jobpostings", jobPostings);

module.exports = router;
