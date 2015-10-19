////////////////////////////movies.js

module.exports = {

printAvatar: function(){
  console.log("Avatar");
},
printChappie: function(){
  console.log("Chappie");
},

favMovie: "The Matrix"
};


///////////////////////////////app.js
var movies = require('./moivies');
movies.printAvatar
movies.printChappie
console.log(movies.favMovie);
