///////////movies.js
module.exports= function(){
  return{
      favMovie:""
  }
};
///////////lindsey.js
var movies = require ('./movies');
var lindseysMovies = movies();
lindseysMovies.favMovie = "The Notebook";
console.log("Lindseys favorite movie is: "+lindseysMovies.favMovie)

///////////cam.js
var movies = require ('./movies');
var camsMovies = movies();
console.log("Cam's favorite movie is "+camsMovies.favMovie);

///////////app.js
require('./lindsey');
require('./cam');
