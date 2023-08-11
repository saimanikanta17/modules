const { variable, sum, sampleFunction, details } = require("./namedExports");
console.log(variable);
console.log(sum);
console.log(sampleFunction(1, 2));
const result = new details("MERN Stack", [
  "Mongo DB",
  "Express JS",
  "React JS",
  "Node JS",
]);
console.log(result);
