//making function
function sayHello(nameOfPerson, age) {
  //Argument: The way to give information to fuction, while operating it.
  console.log(
    "Hello! My name is " + nameOfPerson + ", and I'm " + age + " yrs old."
  );
}

sayHello("hyun", 10);
sayHello("danny", 9);
sayHello("nico", 8);

const hey = {
  name: "hyun",
  sayHello: function () {
    console.log("hooo!");
  },
};

hey.sayHello();
