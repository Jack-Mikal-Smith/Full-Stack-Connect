const userSeedData = require("./user-data-seeds");
const seedTextPost = require("./text-posting-seeds");
const seedJobPost = require("./job-posting-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  // force: true adds DROP TABLE IF EXISTS before trying to create table
  await sequelize.sync({ force: true });
  console.log("------database synced--------");
  await userSeedData();
  console.log("------user seeds completed--------");
  await seedTextPost();
  console.log("------text post seeds completed--------");
  await seedJobPost();
  console.log("------job posting seeds completed--------");

  process.exit(0);
};

seedAll();