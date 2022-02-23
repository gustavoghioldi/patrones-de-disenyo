function TurtlePrototype(proto) {
    this.proto = proto;
 
    this.clone = function (name, color, weapon) {
        var turtle = new Turtle();
        turtle.name = name;
        turtle.color = color;
        turtle.weapon = weapon;
        turtle.status = proto.status;
 
        return turtle;
    };
}
 
function Turtle(status) {
 
    this.name = null;
    this.color = null;
    this.weapon = null;
    this.status = null;
    
    this.say = function() {
        console.log("im "+this.name)
    }
}

tmnts = [
    {
    "name": "Leonardo",
    "color": "blue",
    "weapon": "tachi"
    },
    {
    "name": "Michelangelo",
    "color": "orange",
    "weapon": "nunchakus"
    },
    {
    "name": "Donatello",
    "color": "Violet",
    "weapon": "bo"
    },
    {
    "name": "Raphael",
    "color": "red",
    "weapon": "say"
    },
]

var proto = new Turtle("Ninja");
var prototype = new TurtlePrototype(proto);
var turtles = []

turtles= []

tmnts.forEach((tmnt)=> {
    turtles.push(prototype.clone(tmnt.name, tmnt.color, tmnt.weapon));
});

turtles.forEach((i)=>{
    i.say()
});