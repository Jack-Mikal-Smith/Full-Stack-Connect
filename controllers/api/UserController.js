const User = require('../models/User');


exports.getAll = async (req, res) => {
  try {
    // Get all users from the database
    const users = await User.findAll();
    console.log(users);
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.create = async (req, res) => {
  try {
    const users = await User.create({...req.body});
    res.status(201).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, password, gitHub } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    user.gitHub = gitHub;
    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// module.exports = exports;
