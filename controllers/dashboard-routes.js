const router = require("express").Router();
const { TextPost } = require("../models");
const auth = require("../utils/auth");

router.get("/", auth, async (req, res) => {
  try {
    const postData = await TextPost.findAll({
    //   where: {
    //     userId: req.session.userId,
    //   },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("all-textposts", {
      layout: "dashboard",
      posts,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new", auth, (req, res) => {
  res.render("new-post", {
    layout: "dashboard",
    loggedIn: req.session.loggedIn
  });
});

router.get("/edit/:id", auth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render("edit-post", {
        layout: "dashboard",
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
