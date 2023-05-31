const path = require('path');

exports.index = (req, res) => {
  // Send the index.html file as the home page
  res.sendFile(path.join(__dirname, '../views/home/index.html'));
};

module.exports = exports;