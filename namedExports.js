const variable = "Named Exports";
exports.variable = variable;
exports.sum = 10 + 90;
exports.sampleFunction = (x, y) => {
  return x + y;
};
exports.details = class Details {
  constructor(course, softwares) {
    this.course = course;
    this.softwares = softwares;
  }
};
