// We can export a Class while defining or after defining.

// while defining

/*
module.exports = class Details {
  constructor(course, softwares) {
    this.course = course;
    this.softwares = softwares;
  }
};
*/

// after defining
class Details {
  constructor(course, softwares) {
    this.course = course;
    this.softwares = softwares;
  }
}

module.exports = Details;
