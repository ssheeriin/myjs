function Employee() {
    this.name = '';
    this.department = 'general';
}

function Manager () {
    Employee.call(this);
    this.reports = [];
}

Manager.prototype = Object.create(Employee.prototype)
Manager.prototype.constructor = Manager;

function Worker() {
    Employee.call(this);
    this.projects = [];
}

Worker.prototype = Object.create(Employee.prototype);
Worker.prototype.constructor = Worker

function SalesPerson() {
    Worker.call(this);
    this.department = 'Sales';
    this.target = 100;
}

SalesPerson.prototype = Object.create(Worker.prototype);
SalesPerson.prototype.constructor = SalesPerson

function Engineer() {
    Worker.call(this);
    this.department = 'engineering';
    this.machine = ''
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



