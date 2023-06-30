const { JobPosting } = require("../models");
const jobPostData = [
  {
    userId: 1,
    description: "Tutor students in a one on one environment.",
    date_published: "05/30/2023",
  },
  {
    userId: 1,
    description: "Tutor students in a one on one environment.",
    date_published: "05/30/2023",
  },
  {
    userId: 1,
    description: "Tutor students in a one on one environment.",
    date_published: "05/30/2023",
  },
  {
    userId: 1,
    description: "Tutor students in a one on one environment.",
    date_published: "05/30/2023",
  },
  {
    userId: 2,
    description: "Tutor students in a one on one environment.",
    date_published: "05/30/2023",
  },
  {
    userId: 2,
    description: "Tutor students in a one on one environment.",
    date_published: "05/30/2023",
  },
  {
    userId: 2,
    description: "Tutor students in a one on one environment.",
    date_published: "05/30/2023",
  },
  {
    userId: 2,
    description: "Tutor students in a one on one environment.",
    date_published: "05/30/2023",
  },
  {
    userId: 3,
    description: "Tutor students in a one on one environment.",
    date_published: "05/30/2023",
  },
  {
    userId: 3,
    description: "Tutor students in a one on one environment.",
    date_published: "05/30/2023",
  },
  {
    userId: 3,
    description: "Tutor students in a one on one environment.",
    date_published: "05/30/2023",
  },
  {
    userId: 3,
    description: "Tutor students in a one on one environment.",
    date_published: "05/30/2023",
  },
  {
    userId: 3,
    description: "Tutor students in a one on one environment.",
    date_published: "05/30/2023",
  },
];

const seedJobPost = () => JobPosting.bulkCreate(jobPostData);

module.exports = seedJobPost;
