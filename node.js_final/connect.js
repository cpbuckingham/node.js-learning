/**
 * Created by cpbuckingham on 10/20/15.
 */
//npm install connect

var connect = require('connect');
var http = require('http');

//connect takes middleware and stack it on top of eachother
//meaning these functions can be called on top of each other
var app = connect();


//code to handle users request is called middle request
function doFirst(request, response, next){
    console.log("Bacon");
    next();
    //^goes to next object in the stack
}
function doSecond(request, response, next){
    console.log("Cheese");
    next();
}
app.use(doFirst);
app.use(doSecond);

http.createServer(app).listen(8888);
console.log("server is running....so you better go catch it");
