const path = require('path');

exports.index = (req, res) => {
  // Send the index.html file as the home page
  res.render("tabs")
};

module.exports = exports;