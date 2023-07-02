const router = require('express').Router();
const { TextPost } = require('../../models');
// import auth utility
const auth = require('../../utils/auth')
// const TextPosts = require('../models/TextPosts');

router.post('/', auth, async (req, res) => {
  const body = req.body;  
  try {
      const newTextPost = await TextPost.create({
        title: body.title,
        content: body.body,
        userId: req.session.userId
      });
      res.json(newTextPost);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
});

router.put('/:id', auth, async (req, res) => { 
  try {
      const [updateTextPost] = await TextPost.update(req.body, {
      where: {
        id: req.params.id
      }
      });
     if (updateTextPost > 0) {
      res.status(200).end()
     } else { res.status(404).end()}
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
      // Delete a specific project by its ID from the database
      const [deleteTextPost] = TextPost.destroy({
        where: {
          id: req.params.id
        }
      });
      if (deleteTextPost > 0) {
        res.status(200).end()
      } else {res.status(404).end()}
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

module.exports = router;