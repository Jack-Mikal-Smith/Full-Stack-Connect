const router = require('express').Router();
const { JobPosting } = require('../../models');
// import auth utility
const auth = require('../../utils/auth')
// const JobPostings = require('../models/JobPostings');

router.post('/', auth, async (req, res) => {
  const body = req.body  
  try {
      const JobPosting = await JobPosting.create({
        ...body,
        userId: req.session.userId
      });
      res.status(201).json(JobPosting);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
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
