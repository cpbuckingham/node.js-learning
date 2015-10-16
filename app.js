var cam = {
    favFood: "bacon",
    favMovie: "Chappie"
};

var Person = cam;
//^reference, not a copy
Person.favFood = "salad";
console.log(cam.favFood);


//diff b/w == & =
console.log(19=='19');//true
//^compare values
console.log(19==='19');//false
//^compare values and types
