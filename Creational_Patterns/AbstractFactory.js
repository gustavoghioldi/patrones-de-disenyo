function Turtle(name) {
    this.name = name;
 
    this.say = function () {
        console.log("I am :" + name);
    };
}
 
function TMNTFactory() {
    this.create = function(name) {
        return new Turtle(name);
    };
}
 
 
var tmnts = [];
var turtleFactory = new TMNTFactory();

tmnts.push(turtleFactory.create("Donatello"));
tmnts.push(turtleFactory.create("Raphael"));
tmnts.push(turtleFactory.create("Michelangelo"));
tmnts.push(turtleFactory.create("Leonardo"));

tmnts.forEach((tmnt)=>{
    tmnt.say();
})
