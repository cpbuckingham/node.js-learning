///////////movies.js
module.exports={
  favMovie:""
};

///////////lindsey.js
var movies = require ('./movies');
movies.favMovie="The Notebook";
console.log("Lindsey's favorite movie is "+movies.favMovie);

///////////cam.js
var movies = require ('./movies');
console.log("Cam's favorite movie is "+movies.favMovie);

///////////app.js
require('./lindsey');
require('./cam');
