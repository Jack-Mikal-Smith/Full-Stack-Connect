const { or } = require('../../config/connection');
const JobPostings = require('../models/JobPostings');

exports.getAll = async (req, res) => {
  try {
    // Get all projects from the database
    const job = await JobPostings.findAll();
    console.log(job);
    res.json(job);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  try {
    // Get a specific job by its ID from the database
    const job = await JobPostings.findByPk(id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.create = async (req, res) => {
  try {
    console.log({...req.body})
    // Create a new job in the database
    const job = await JobPostings.create({...req.body});
    res.status(201).json(job);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { organization, position, description } = req.body;
  try {
    // Update a specific job by its ID in the database
    const job = await JobPostings.findByPk(id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    job.organization = organization;
    job.position = position;
    job.description = description;
    await job.save();
    res.json(job);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    // Delete a specific job by its ID from the database
    const job = await JobPostings.findByPk(id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    await job.destroy();
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = exports;