// Assuming you have a Project model
const { title } = require('process');
const Project = require('../models/Projects');

exports.getAll = async (req, res) => {
  try {
    // Get all projects from the database
    const projects = await Project.findAll();
    console.log(projects);
    res.json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  try {
    // Get a specific project by its ID from the database
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.create = async (req, res) => {
  try {
    console.log({...req.body})
    // Create a new project in the database
    const project = await Project.create({...req.body});
    res.status(201).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    // Update a specific project by its ID in the database
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    project.title = title;
    project.description = description;
    console.log('1');
    await project.save();
    console.log('2');
    res.json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    // Delete a specific project by its ID from the database
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    await project.destroy();
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = exports;