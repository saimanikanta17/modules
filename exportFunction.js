// Exporting a function
// We can export a function while defining or after defining.

/* while defining
module.exports = (x, y) => {
  return x + y;
}; */

// after defining
const sample = (x, y) => {
  return x * y;
};

module.exports = sample;
