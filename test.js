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

variableDeclaration();


function testVariableHoisting() {
  console.log("t->" + t);
  // console.log(s); //err
  let s = 1;
  var t = 2;
}

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

testStringLiterals();


