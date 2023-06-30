const router = require("express").Router();
const { TextPost, User } = require("../models");
const auth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await TextPost.findAll({
     include: [User]
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("all-textposts", {
      posts,
      loggedin: req.session.loggedin
    });
    // res.json(posts)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new", auth, (req, res) => {
  res.render("new-post", {
    layout: "dashboard",
    loggedin: req.session.loggedin
  });
});

// single post
router.get("/textPost/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User, 
        {
        model: TextPost,
        include: [User]
      }
      ]
    });

    if (postData) {
      const post = postData.get({ plain: true });

      res.render("single-post", {
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    // console.log(err)
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedin) {
    res.redirect('/')
    return
  }
  res.render('login')
});

module.exports = router;
