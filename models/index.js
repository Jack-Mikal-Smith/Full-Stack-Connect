const User = require("./User");

const JobPosting = require("./JobPosting");
const TextPost = require("./TextPost");

// text post to user
TextPost.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
})
// job post to user
JobPosting.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
})

module.exports = { User, JobPosting, TextPost };
