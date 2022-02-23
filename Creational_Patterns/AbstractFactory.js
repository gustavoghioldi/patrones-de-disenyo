function Turtle(name) {
    this.name = name;
 
    this.say = function () {
        console.log("I am a Turtle my name is: " + name);
    };
}

function TMNT(name) {
    this.name = name;
 
    this.say = function () {
        console.log("I am a TMNT, my name is: " + name);
    };
}
 
function Factory() {
    this.createTurtle = function(name) {
        return new Turtle(name);
    };
    this.createTMNT = function(name) {
        return new TMNT(name);
    };
}
 
 
var tmnts = [];
var turtleFactory = new Factory();

tmnts.push(turtleFactory.createTMNT("Donatello"));
tmnts.push(turtleFactory.createTMNT("Raphael"));
tmnts.push(turtleFactory.createTMNT("Michelangelo"));
tmnts.push(turtleFactory.createTurtle("Barba"));

tmnts.forEach((tmnt)=>{
    tmnt.say();
})
