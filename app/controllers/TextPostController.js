const TextPosts = require('../models/TextPosts');

exports.getAll = async (req, res) => {
    try {
        const textPosts = await TextPosts.findAll();
        res.json(textPosts);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getById = async (req, res) => {
    const { id } = req.params;
    try {
      const textPost = await TextPosts.findByPk(id);
      if (!textPost) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.json(textPost);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
    }
};

exports.create = async (req, res) => {
    try {
      const textPost = await TextPosts.create({...req.body});
      res.status(201).json(textPost);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
    }
};

exports.update = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
      const textPost = await TextPosts.findByPk(id);
      if (!textPost) {
        return res.status(404).json({ message: 'Post not found' });
      }
      textPost.title = title;
      textPost.content = content;
      await textPost.save();
      res.json(textPost);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
    }
};

exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
      // Delete a specific project by its ID from the database
      const textPost = await TextPosts.findByPk(id);
      if (!textPost) {
        return res.status(404).json({ message: 'Post not found' });
      }
      await textPost.destroy();
      res.json({ message: 'Post deleted successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  module.exports = exports;