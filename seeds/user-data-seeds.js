const { User } = require("../models");
const userData = [
  {
    firstName: "Frodo",
    lastName: "Baggins",
    email: "frodo@theonering.com",
    username: "ringdestroyer",
    password: "password",
  },
  {
    firstName: "Frodo",
    lastName: "Baggins",
    email: "frodo1@theonering.com",
    username: "ringdestroyer1",
    password: "password",
  },
  {
    firstName: "Frodo",
    lastName: "Baggins",
    email: "frodo2@theonering.com",
    username: "ringdestroyer2",
    password: "password",
  },
  {
    firstName: "Frodo",
    lastName: "Baggins",
    email: "frodo3@theonering.com",
    username: "ringdestroyer3",
    password: "password",
  },
  {
    firstName: "Frodo",
    lastName: "Baggins",
    email: "frodo4@theonering.com",
    username: "ringdestroyer4",
    password: "password",
  },
];

const userSeedData = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
  });

module.exports = userSeedData;
