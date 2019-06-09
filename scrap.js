function Person(name, age) {
  this.name = name || "";
  this.age = age || -1;
}

function Emp(name, age, empId) {
  Person.call(this, name, age);
  this.empId = empId || "";
}

Emp.prototype = Object.create(Person.prototype);
Emp.prototype.constructor = Emp;

var e1 = new Emp("sherin", 10, "E1");

e1.department = 'dept';

console.log(e1);
console.log(Emp.prototype);
console.log(Emp.prototype.constructor);
