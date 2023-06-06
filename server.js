const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const controllers = require('./app/controllers');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();

// Configure the Handlebars templating engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'app', 'views'));

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

// Define routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'app')));

// Define the isAuthenticated middleware
const isAuthenticated = (req, res, next) => {
  // Check if the user is authenticated (e.g., by checking the session or token)
  // If authenticated, call next() to proceed to the next middleware or route handler
  // If not authenticated, redirect or respond with an error
  if (req.session.isAuthenticated) {
    next();
  } else {
    res.redirect('/'); // Redirect to the sign-in page
  }
};

// Routes
app.get('/', controllers.HomeController.renderSignIn);
app.post('/main', controllers.HomeController.signIn);
app.post('/', controllers.HomeController.signIn);

// Protected routes
app.get('/users', isAuthenticated, controllers.UserController.getAll);
app.post('/users', controllers.UserController.create);
app.get('/users/:id', isAuthenticated, controllers.UserController.getById);
app.put('/users/:id', isAuthenticated, controllers.UserController.update);
app.delete('/users/:id', isAuthenticated, controllers.UserController.delete);
app.get('/api/projects', isAuthenticated, controllers.ProjectController.getAll);
app.post('/api/projects', isAuthenticated, controllers.ProjectController.create);
app.get('/api/projects/:id', isAuthenticated, controllers.ProjectController.getById);
app.put('/api/projects/:id', isAuthenticated, controllers.ProjectController.update);
app.delete('/api/projects/:id', isAuthenticated, controllers.ProjectController.delete);
app.get('/api/jobposts', isAuthenticated, controllers.JobPostingController.getAll);
app.post('/api/jobposts', isAuthenticated, controllers.JobPostingController.create);
app.get('/api/jobposts/:id', isAuthenticated, controllers.JobPostingController.getById);
app.put('/api/jobposts/:id', isAuthenticated, controllers.JobPostingController.update);
app.delete('/api/jobposts/:id', isAuthenticated, controllers.JobPostingController.delete);
app.get('/api/textposts', isAuthenticated, controllers.TextPostingController.getAll);
app.post('/api/textposts', isAuthenticated, controllers.TextPostingController.create);
app.get('/api/textposts/:id', isAuthenticated, controllers.TextPostingController.getById);
app.put('/api/textposts/:id', isAuthenticated, controllers.TextPostingController.update);
app.delete('/api/textposts/:id', isAuthenticated, controllers.TextPostingController.delete);
app.get('/main', isAuthenticated, (req, res) => {
  res.render('layouts/main', { layout: false });
});

// Start the server
const port = process.env.PORT || 3000;
sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
