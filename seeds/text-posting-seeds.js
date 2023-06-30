const { TextPost } = require('../models')
const textPostData = 
[
    {
        "title": "Today",
        "content": "Today is Tuesday, May 30th of 2023.",
        "date_published": "05/30/2023",
        "userId": 1,
    },
    {
        "title": "Today",
        "content": "Today is Tuesday, May 30th of 2023.",
        "date_published": "05/30/2023",
        "userId": 1,
    },
    {
        "title": "Today",
        "content": "Today is Tuesday, May 30th of 2023.",
        "date_published": "05/30/2023",
        "userId": 1,
    },
    {
        "title": "Today",
        "content": "Today is Tuesday, May 30th of 2023.",
        "date_published": "05/30/2023",
        "userId": 1,
    },
    {
        "title": "Today",
        "content": "Today is Tuesday, May 30th of 2023.",
        "date_published": "05/30/2023",
        "userId": 1,
    },
]

const seedTextPost = () => TextPost.bulkCreate(textPostData)

module.exports = seedTextPost