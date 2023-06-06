const User = require('../models/User');

const HomeController = {
  renderSignIn: (req, res) => {
    res.render('layouts/signin', { layout: false, error: null });
  },

  signIn: async (req, res) => {
    const { email, password } = req.body;

    try {
      // Find the user by email
      const user = await User.findOne({ where: { email } });

      if (!user) {
        // User not found
        return res.render('layouts/signin', { layout: false, error: 'Invalid email or password' });
      }

      // Verify password
      const isValidPassword = user.checkPassword(password);
      if (!isValidPassword) {
        // Invalid password
        return res.render('layouts/signin', { layout: false, error: 'Invalid email or password' });
      }

      // Store user information in session
      req.session.userId = user.id;
      // Set the loggedIn variable to true in the session
    req.session.loggedIn = true;

      // Redirect to authenticated area or any other desired location
      console.log('Redirecting to /main');
      res.redirect('/main');
    } catch (error) {
      console.error('Error during login:', error);
      res.render('layouts/main', { layout: false, error: 'An error occurred during login' });
    }
  },
};

module.exports = HomeController;
