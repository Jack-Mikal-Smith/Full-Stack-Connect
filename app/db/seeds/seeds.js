const sequelize = require('../../../config/connection');
const { User, Projects, JobPostings, TextPosts } = require('../../models');

const userData = require ('./userData.json');
const projectData = require('./projectData.json');
const jobPostingData = require('./jobPostingData.json');
const textPostsData = require('./textPostsData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const project of projectData) {
        await Projects.create({
            ...project,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    for (const job of jobPostingData) {
        await JobPostings.create({
            ...job,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }
    for (const text of textPostsData) {
        await TextPosts.create({
            ...text,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
};

seedDatabase();