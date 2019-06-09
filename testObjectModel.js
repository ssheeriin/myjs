function Employee(name, department) {
    this.name = name || '';
    this.department = department || 'general';
}

function Manager (reports, name, department) {
    Employee.call(this, name , department);
    this.reports = reports || [];
}

Manager.prototype = Object.create(Employee.prototype)
Manager.prototype.constructor = Manager;

function Worker(name, department, projects) {
    Employee.call(this, name , department);
    this.projects = projects || [];
}

Worker.prototype = Object.create(Employee.prototype);
Worker.prototype.constructor = Worker

function SalesPerson(name, department, target) {
    Worker.call(this, name, department);
    this.target = target || 100;
}

SalesPerson.prototype = Object.create(Worker.prototype);
SalesPerson.prototype.constructor = SalesPerson

function Engineer(name, department, projects, machine) {
    Worker.call(this, name, department, projects);
    this.machine = machine || '';
}

Engineer.prototype = Object.create(Worker.prototype);
Engineer.prototype.constructor = Engineer

var sre = new Manager
var pb = new Employee
var sn = new SalesPerson
var ss = new Worker
var sj = new Engineer

for (const prop in sj) {
    console.log(prop + " = " + sj[prop]);
}


sj.bonus = 1000;

console.log("bonus: " + sj.bonus);
console.log("bonus: " + ss.bonus);
Employee.prototype.bonus = 0;
console.log("bonus: " + sj.bonus);
console.log("bonus: " + ss.bonus);

var ss1 = new Engineer("sherin", "", ['java', 'js', 'kotlin'], 'mac');
for (const prop in ss1) {
    console.log("Property " + prop + " has value " + ss1[prop]);
}


