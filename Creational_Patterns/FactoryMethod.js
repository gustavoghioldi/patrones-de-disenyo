function Factory() {
    this.createTMNT = function (name) {
        var character;
 
        if (name === "Splinter") {
            character = new Master(name);
        } else if (name == "Donatello" || name == "Raphael" || name =="Michelangelo" || name =="Leonardo") {
            character = new TMNT(name);
        } else {
            character = new NoCharacter(name);
        }
 
        character.name = name;
 
        character.say = function () {
            console.log("i am: "+this.name+" i am :"+this.type)
        }
        return character;
    }
}
 
var Master = function (name) {
    this.type = "master";
};
 
var TMNT = function (name) {
    this.type = "turtle";
};

var NoCharacter = function (name) {
    this.type = "NoCharacter";
};


var tmnts = [];
var factory = new Factory();

tmnts.push(factory.createTMNT("Leonardo"));
tmnts.push(factory.createTMNT("Splinter"));
tmnts.push(factory.createTMNT("Barba"));

tmnts.forEach((tmnt)=> {
    tmnt.say();
});