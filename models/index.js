const User = require('./User');
const Projects = require('./Projects');
const JobPostings = require('./JobPostings');
const TextPosts = require('./TextPosts');

User.hasMany(Projects, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(JobPostings, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(TextPosts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Projects.belongsTo(User, {
    foreignKey: 'user_id'
});

JobPostings.belongsTo(User, {
    foreignKey: 'user_id'
});

TextPosts.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Projects, JobPostings, TextPosts };