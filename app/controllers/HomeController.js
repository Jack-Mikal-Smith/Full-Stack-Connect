const path = require('path');

const HomeController = {
  renderSignIn: (req, res) => {
    res.render('layouts/signin', { layout: false }); // Render the signin view with handlebars
  },
  signIn: (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);
    // Process the form submission and handle authentication logic here

    // Redirect or respond based on the result
    res.redirect('/'); // Example redirect to the dashboard page
  }
};

module.exports = HomeController;
