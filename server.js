const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const controllers = require('./controllers');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const port = process.env.PORT || 3000;
const route = express();

// Configure the Handlebars templating engine
route.engine('handlebars', exphbs());
route.set('view engine', 'handlebars');
// route.set('views', path.join(__dirname, 'app', 'views'));

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
route.use(session(sess));

// Define routes
route.use(express.json());
route.use(express.urlencoded({ extended: true }));
route.use(express.static(path.join(__dirname, 'public')));

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

route.use(require('./controllers'))
// Routes
// route.get('/', controllers.HomeController.renderSignIn);
// route.post('/main', controllers.HomeController.signIn);
// route.post('/', controllers.HomeController.signIn);

// Protected routes
// route.get('/users', isAuthenticated, controllers.UserController.getAll);
// route.post('/users', controllers.UserController.create);
// route.get('/users/:id', isAuthenticated, controllers.UserController.getById);
// route.put('/users/:id', isAuthenticated, controllers.UserController.update);
// route.delete('/users/:id', isAuthenticated, controllers.UserController.delete);
// route.get('/api/projects', isAuthenticated, controllers.ProjectController.getAll);
// route.post('/api/projects', isAuthenticated, controllers.ProjectController.create);
// route.get('/api/projects/:id', isAuthenticated, controllers.ProjectController.getById);
// route.put('/api/projects/:id', isAuthenticated, controllers.ProjectController.update);
// route.delete('/api/projects/:id', isAuthenticated, controllers.ProjectController.delete);
// route.get('/api/jobposts', isAuthenticated, controllers.JobPostingController.getAll);
// route.post('/api/jobposts', isAuthenticated, controllers.JobPostingController.create);
// route.get('/api/jobposts/:id', isAuthenticated, controllers.JobPostingController.getById);
// route.put('/api/jobposts/:id', isAuthenticated, controllers.JobPostingController.update);
// route.delete('/api/jobposts/:id', isAuthenticated, controllers.JobPostingController.delete);
// route.get('/api/textposts', isAuthenticated, controllers.TextPostingController.getAll);
// route.post('/api/textposts', isAuthenticated, controllers.TextPostingController.create);
// route.get('/api/textposts/:id', isAuthenticated, controllers.TextPostingController.getById);
// route.put('/api/textposts/:id', isAuthenticated, controllers.TextPostingController.update);
// route.delete('/api/textposts/:id', isAuthenticated, controllers.TextPostingController.delete);
// app.get('/api/jobposts', isAuthenticated, controllers.DashboardRoutes.getAll);
// app.post('/api/jobposts', isAuthenticated, controllers.DashboardRoutes.create);
// app.get('/api/jobposts/:id', isAuthenticated, controllers.DashboardRoutes.getById);
// app.put('/api/jobposts/:id', isAuthenticated, controllers.DashboardRoutes.update);
// app.delete('/api/jobposts/:id', isAuthenticated, controllers.DashboardRoutes.delete);
// route.get('/main', isAuthenticated, (req, res) => {
//   res.render('layouts/main', { layout: false });
// });

// Start the server
// const port = process.env.PORT || 3000;
// sequelize.sync({ force: false }).then(() => {
//   route.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });
// });

route.listen(port)