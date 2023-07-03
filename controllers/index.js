const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const jobPostingRoutes = require("./job-posting-routes");
const dashboardRoutes = require("./dashboard-routes");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/JobPostings", jobPostingRoutes);
router.use("/api", apiRoutes);



module.exports = router;


