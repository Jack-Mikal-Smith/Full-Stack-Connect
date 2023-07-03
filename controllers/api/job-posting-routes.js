const router = require('express').Router();
const { JobPosting, User } = require('../../models');
// import auth utility
const auth = require('../../utils/auth')
// const JobPostings = require('../models/JobPostings');

router.get("/", auth, async (req, res) => {
  try {
    const jobPostings = await JobPosting.findAll({
      // where: {
      //   userId: req.session.userId,
      // },

      include: [{ model: User, attributes: ['username'] }] // Include the User model with 'username' attribute
    });

    const posts = jobPostings.map((post) => post.get({ plain: true }));

    res.render("all-jobposts", {
      layout: "jobpostings",
      posts,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new", auth, (req, res) => {
  res.render("new-post", {
    layout: "jobpostings",
    loggedIn: req.session.loggedIn
  });
});

router.post('/', auth, async (req, res) => {
  const body = req.body;  
  try {
      const newJobPost = await JobPosting.create({
        title: body.title,
        content: body.body,
        userId: req.session.userId
      });
      res.json(newJobPost);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
});



router.put('/:id', auth, async (req, res) => { 
  try {
      const [putJob] = await JobPosting.update(req.body, {
      where: {
        id: req.params.id
      }
      });
     if (putJob > 0) {
      res.status(200).end()
     } else {res.status(404).end()}
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
      // Delete a specific project by its ID from the database
      const [deleteJob] = JobPosting.destroy({
        where: {
          id: req.params.id
        }
      });
      if (deleteJob > 0) {
        res.status(200).end()
      } else {res.status(404).end()}
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

module.exports = router;
