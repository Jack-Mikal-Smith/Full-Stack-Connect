// external imports
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
// internal imports
const helpers = require("./utils/helpers");

// setup server
const route = express();
const port = process.env.PORT || 3001;
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ db: sequelize }),
};

route.use(session(sess));

const hbs = exphbs.create({ helpers });

// Configure the Handlebars templating engine
route.engine("handlebars", hbs.engine);
route.set("view engine", "handlebars");

// Define routes
route.use(express.json());
route.use(express.urlencoded({ extended: false }));
route.use(express.static(path.join(__dirname, "public")));

route.use(require("./controllers"));

// route.listen(port)
route.listen(port, () => {
  console.log(`listening on port: ${port} - http://localhost:${port}`);
  sequelize.sync({ force: false });
});
