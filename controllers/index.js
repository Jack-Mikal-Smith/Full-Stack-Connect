const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const jobPostingRoutes = require("./api/job-posting-routes");
const dashboardRoutes = require("./dashboard-routes");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);
router.use("/JobPostings", jobPostingRoutes);



module.exports = router;


