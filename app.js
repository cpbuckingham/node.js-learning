/**
 * Created by cpbuckingham on 10/14/15.
 */
console.log('bacon');

var person = {
    fn: "cam",
    ln: "buckingham",
    age: 28};
console.log(person);

function addNumber(a,b){
return a + b;
}
console.log(addNumber(7,3));

function worthless(){}
console.log(worthless());

var printBacon = function(){
    console.log("bacon is healthy, don't believe the Doctors");
}
setTimeout(printBacon, 5000);
