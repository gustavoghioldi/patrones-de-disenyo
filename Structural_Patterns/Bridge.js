var TMNT = function (output) {
    this.output = output;
 
    this.fight = function () { this.output.fight(); }
    this.run = function () { this.output.run(); }
    this.jump = function () { this.output.jump(); }
};
 
// output devices
var Master = function () {
    this.fight = function () { console.log("fight as a master"); }
    this.run  = function () { console.log("run as a master"); }
    this.jump  = function () { console.log("jump as a master"); }
};
 
var Turtle = function () {
    this.fight = function () { console.log("fight as a TMNT"); }
    this.run  = function () { console.log("run as a TMNT"); }
    this.jump  = function () { console.log("jump as a TMNT"); }
};

var master = new Master();
var turtle = new Turtle();

var tmnt = new TMNT(master);
tmnt.fight();
tmnt.run();
tmnt.jump();


var tmnt = new TMNT(turtle);
tmnt.fight();
tmnt.run();
tmnt.jump();
