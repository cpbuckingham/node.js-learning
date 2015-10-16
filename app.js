var cam = {

    printFirstName: function(){
        console.log("My name is cam");
        console.log(this === cam);
    }
};

cam.printFirstName();


//the default calling context is global
function doSomething(){
    console.log("\nI am worthless");
    console.log(this === global);

}
doSomething();