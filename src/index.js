/**
 * @param name {string}
 * Person's name
 * @param age {string}
 * Person's age
 * @constructor function Person
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

/**
 * @function expression Person.prototype.introduce
 * @returns {string} the introduce method of Person
 */
Person.prototype.introduce = function () {
  return "My name is " + this.name + " and I am " + this.age;
};

/**
 * @function myNew
 * @param newObj {object} the object for prototyping
 * @returns {{}} the new object of Person
 */
function myNew(newObj) {
  let myObj = {};
  myObj.__proto__ = newObj.prototype;
  myObj.constructor = newObj;
  newObj.call(myObj);

  let myKeys = Object.keys(myObj);
  let j = 1;
  for (let i = 0; i < myKeys.length; i++) {
    if (myObj.hasOwnProperty(myKeys[i])) {
      myObj[myKeys[i]] = arguments[j];
      j++;
    }
  }
  return myObj;
}

var john = myNew(Person, "John", 30);
console.log("myNew --", john);

var jack = new Person("Jack", 40);
console.log("Person --", jack);
console.log(john.introduce());
console.log(jack.introduce());
