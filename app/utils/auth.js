const auth = (req, res, next) => {
    // redirect the request to the login 
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = auth;