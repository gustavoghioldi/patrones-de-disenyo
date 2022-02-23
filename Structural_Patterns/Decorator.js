var Turtle = function(name) {
    this.name = name;
 
    this.say = function() {
        console.log("i am a turtle, my name is "+this.name)
    };
}
 
var DecoratedNinjaTurtle = function(turtle, weapon, color) {
    this.turtle = turtle;
    this.name = turtle.name;  // ensures interface stays the same
    this.weapon = weapon;
    this.color = color;
 
    this.say = function() {
        console.log("i am a TMNT my name is: "+this.name+" i have : "+this.weapon+", my color is: "+this.color)
    };
}
 

var turtle = new Turtle("Leonardo");
turtle.say();

var turtleDecorated = new DecoratedNinjaTurtle(turtle, "tachi", "blue");
turtleDecorated.say();

