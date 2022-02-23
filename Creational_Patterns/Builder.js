function TMNT() {
    this.construct = function(builder) {
        builder.step1();
        builder.step2();
        return builder.get();
    }
}
 
function MasterBuilder() {
    this.master = null;
 
    this.step1 = function() {
        this.master = new Master();
    };
 
    this.step2 = function() {
        this.master.addWeapon();
    };
 
    this.get = function() {
        return this.master;
    };
}
 
function TurtleBuilder() {
    this.turtle = null;
 
    this.step1 = function() {
        this.turtle = new Turtle();
    };
 
    this.step2 = function() {
        this.turtle.addWeapon();
    };
 
    this.get = function() {
        return this.turtle;
    };
}
 
function Turtle() {
    this.weapons = 0;
 
    this.addWeapon = function() {
        this.weapons = 1;
    };
 
    this.say = function() {
        console.log("i am a turtle y have "+this.weapons+" weapon")
    };
}
 
function Master() {
    this.weapon = 0;
 
    this.addWeapon = function() {
        this.weapons = "all";
    };
 
    this.say = function() {
        console.log("i am a master y have "+this.weapons+" weapon")
    };
}
 

var tmnt = new TMNT();
var masterBuilder = new MasterBuilder();
var turtleBuilder = new TurtleBuilder();
var master = tmnt.construct(masterBuilder);
var turtle = tmnt.construct(turtleBuilder);

master.say();
turtle.say();

