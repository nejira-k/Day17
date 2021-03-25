const _ = require('lodash');
// Only change code below this line

var users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },
    {
        firstName: "Jim",
        lastName: "Carrey",
        age: 54,
        gender: "male"
    },
    {
        firstName: "Kate",
        lastName: "Winslet",
        age: "40",
        gender: "female"
    }
];

function getUsers() {
    var output = [];
for (var i = 0; i < users.length; i++) {
    var output = users[i];
    for (var j = 0; j < output.length; j++){
    }
 }
 return output;
}
console.log(getUsers());

function findUser(lastName, gender) {
    try {
       const found =_.find(obj, [lastName, gender]);
       return found;
    } catch (error) {
        return "Cannot read property 'firstName' of undefined";
        console.log();
    }
}

getUsers();
console.log(findUser("Winslet", "female"));
module.exports = findUser;