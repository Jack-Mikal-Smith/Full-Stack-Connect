const router = require("express").Router();
const { User } = require("../../models");

// new user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = userData.id;
      req.session.username = userData.username;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const userDatadb = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!userDatadb) {
      res
        .status(400)
        .json({ message: "Incorrect username. Please try again!" });
      return;
    }

    const validPassword = userDatadb.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = userDatadb.id;
      req.session.username = userDatadb.username;


      res.status(200).json(userDatadb);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
