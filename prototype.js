function User(){
  this.name = "";
  this.life = 100;
  this.giveLife = function giveLife(targetPlayer){
    targetPlayer.life += 1;
    console.log(this.name+" Cam gave one life to "+targetPlayer.name);
  }
}

var cam = new User();
var lindsey = new User();
cam.name = "cam";
lindsey.name= "lindsey";

cam.giveLife(lindsey);
console.log("cam" + cam.life);
console.log("lindsey" + lindsey.life);

User.prototype.uppercut = function uppercut(targetPlayer){
  targetPlayer.life -= 3;
  console.log(this.name+" just uppercutted "+targetPlayer.name);
};
lindsey.uppercut(cam);
console.log("cam" + cam.life);
console.log("lindsey" + lindsey.life);

User.prototype.magic = 60;
console.log(cam.magic):
console.log(lindsey.magic):
