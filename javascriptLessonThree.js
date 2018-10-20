/* var table =
[ [ 'a', 'b', 'c', 'd' ],
  [ '1', '2', '3', '4' ],
  [ 'e', 'f', 'g', 'h' ],
  [ '5', '6', '7', '8' ] ]

for(var i = 0; i < table.length; i++){
    for(var j = 0; j < table[i].length; j++) {
        console.log(table[i][j])
    }
}
*/

/*
var person1 = {
    firstName: "John",
    lastName: "Smith",
    age: 40,
}
var person2 = {
    firstName: "Marcus",
    lastName: "Aurelius",
    age: 2048,
}
var person3 = {
    firstName: "Jennifer",
    lastName: "Lawrence",
    age: 29,
}

var people = [
   {
        firstName: "John",
        lastName: "Smith",
        age: 40
    },
    { 
        firstName: "Marcus",
        lastName: "Aurelius",
        age: 1897
    },
    {
        firstName: "Jennifer",
        lastName: "Lawrence",
        age: 29
    }
]


for(var i = 0; i < people.length; i++){
console.log(people[i].firstname);
}*/



var maths = {
   add: function(x, y){
       return x + y
   },
   subtract: function(x, y){
       return x - y
   }
}

console.log(maths.add(11, 6))
console.log(maths["add"](11, 6))





