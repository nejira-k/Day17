const _ = require("lodash");
// Only change code below this line

var users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 24,
    gender: "male",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 5,
    gender: "female",
  },
  {
    id: 3,
    firstName: "Jim",
    lastName: "Carrey",
    age: 54,
    gender: "male",
  },
  {
    id: 4,
    firstName: "Kate",
    lastName: "Winslet",
    age: "40",
    gender: "female",
  },
];

function getUsers() {
  var output = [];
  users.forEach(output => {
      console.log(output.id + "-" + output.firstName + "" + output.lastName + " is " + output.age + ", " + output.gender);
  });
    return output;
  }

console.log(getUsers());

function findUserById(id) {
    try {
        var user = _.find(users, function(obj) {
            return obj.description === id;
        })
        return user;
    } catch (error) {
        return "Cannot read property 'id";
        console.log();
    }   
}

getUsers();
findUserById(9);
module.exports = findUserById;