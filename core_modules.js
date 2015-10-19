var fs = require('fs');
//write to file
fs.writeFileSync("corn.txt", "corn is good");
//read file
console.log(fs.readFileSync("corn.txt").toString());
//path
var path require('path');
var websiteHome = "Desktop/cam/cpbuckingham/index.html"
var websiteAbout = "Desktop/cam/cpbuckingham/about.html"
console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));
//setInterval (setInterval is reoccuring, diff than timeout)
setInterval(function(){
  console.log("beef");
}, 2000);

console.log(__dirname);
console.log(__filename);
