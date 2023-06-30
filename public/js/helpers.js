// helpers.js

const format_date = (date) => {
  const options = { year: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};

module.exports = {
  format_date,
};
