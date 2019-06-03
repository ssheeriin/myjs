function variableDeclaration() {
  const z = 12;
  if (true) {
    var x = 11;
    let y = 20;
  }
  console.log(x);
  //  console.log(y); //err
  console.log(z);
}
console.log("variableDeclaration")
console.log("--------------------");
variableDeclaration();


function testVariableHoisting() {
  console.log("t->" + t);
  // console.log(s); //err
  let s = 1;
  var t = 2;
}

console.log("testVariableHoisting");
console.log("--------------------");
testVariableHoisting();

var car = {
  name : 'Name',
  make : 1983,
  101 : 'a numeric named property'
};

console.log(car['101']);
console.log(car[101]);

function testStringLiterals() {
  var name = 'sherin';
  var addr = "blr";

  var greet = `hello ${name}, welcome to ${addr}`;

  console.log(greet);
}
console.log("testStringLiterals");
console.log("--------------------");

testStringLiterals();

function testBlockStatements() {
  var ss = 10;
  {
    var ss =20;
  }
console.log(ss);
// let and const are block scoped
}
console.log("testBlockStatements");
console.log("--------------------");

testBlockStatements();

function testExceptionHandling() {
    let val = 10;

    try {
      throw val;
    } catch (e){
      console.log("err caught - "  + e);
    }
    try {
      throw "An Error"
    } catch (error) {
      console.log("another error caught - " + error);
    } 
}

console.log("testExceptionHandling");
console.log("--------------------");

testExceptionHandling();

function testClosure() {
    var pi = 3.14;
    var total = 0;
    return function (r) {
        let tmp = pi * r * r;
        total += tmp;
        return total;
    }
}

console.log("testClosure");
console.log("--------------------");

var tmp = testClosure();
console.log(testClosure()(10));
console.log(tmp(10));


function testArrowFunctions() {
  var list = ["one", "two", "three"];
  console.log(list.map(function(elt) {return elt.length;}));
  console.log(list.map(elt => elt.length));
}

console.log("testArrowFunctions");
console.log("--------------------");

testArrowFunctions();