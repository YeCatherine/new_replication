function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  return "My	name	is	" + this.name + "	and	I	am	" + this.age;
};

function myNew(newObj) {
  let myObj = new newObj();

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
console.log(john.introduce()); //	My	name	is	John	and	I	am	30
console.log(jack.introduce()); //	My	name	is	Jack	and	I	am	40
