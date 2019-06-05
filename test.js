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
console.log("variableDeclaration");
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
  name: "Name",
  make: 1983,
  101: "a numeric named property"
};

console.log(car["101"]);
console.log(car[101]);

function testStringLiterals() {
  var name = "sherin";
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
    var ss = 20;
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
  } catch (e) {
    console.log("err caught - " + e);
  }
  try {
    throw "An Error";
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
  return function(r) {
    let tmp = pi * r * r;
    total += tmp;
    return total;
  };
}

console.log("testClosure");
console.log("--------------------");

var tmp = testClosure();
console.log(testClosure()(10));
console.log(tmp(10));

function testArrowFunctions() {
  var list = ["one", "two", "three"];
  console.log(
    list.map(function(elt) {
      return elt.length;
    })
  );
  console.log(list.map(elt => elt.length));
}

console.log("testArrowFunctions");
console.log("--------------------");

testArrowFunctions();

function testMapsAndSets() {
  var myMap = new Map();
  myMap.set("key", "value");
  myMap.set("key2", "value2");

  for (const [k, v] of myMap) {
    console.log(k + "=" + v);
  }

  var mySet = new Set();
  mySet.add("One");
  mySet.add("two");

  for (const elt of mySet) {
    console.log(elt);
  }
}
console.log("testMapsAndSets");
console.log("----------------");

testMapsAndSets();

function testObjectandCreation() {
  //obj initializer
  var car = {
    name: "car",
    make: 2019,
    101: "another property with number as property",
    p: "property which is a string"
  };

  for (const property in car) {
    if (car.hasOwnProperty(property)) {
      const element = car[property];
      console.log(element);
    }
  }

  // constr fn
  function Car2(name, make) {
    this.label = name;
    this.make = make;
  }

  var car2 = new Car2("car2", 2020);
  for (const property in car2) {
    if (car2.hasOwnProperty(property)) {
      const element = car2[property];
      console.log(element);
    }
  }

  // obj.create
  var car3 = Object.create(Car2);
  car3.label = "car3 name";
  car3.make = 2021;
  console.log(car3.label);
  console.log(car3.make);
}

console.log("testObjectAndCreation");
console.log("----------------------");
testObjectandCreation();

function testObjectThisAndGetterSetters() {
  var apple = {
    color: "red",
    get getColor() {
      return this.color + "|";
    },
    set setColor(color) {
      this.color = color + "*";
    }
  };

  console.log(apple.getColor);
  apple.setColor = "green";
  console.log(apple.getColor);

  var d = Date.prototype;
  Object.defineProperty(d, "year", {
    get: function() {
      return this.getFullYear();
    },
    set: function(y) {
      this.setFullYear(y);
    }
  });

  var now = new Date();
  console.log(now.year);
  now.year = 2022
  console.log(now);
  
}

console.log("testObjectThisAndGetterSetters");
console.log("----------------------");
testObjectThisAndGetterSetters();
