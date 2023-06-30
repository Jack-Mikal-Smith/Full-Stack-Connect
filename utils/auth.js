const auth = (req, res, next) => {
  console.log(req.session.loggedIn)
    // redirect the request to the login 
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = auth;