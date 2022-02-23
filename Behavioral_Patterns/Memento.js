var Turtle = function(name) {
    this.name = name;

}
 
Turtle.prototype = {
 
    hydrate: function() {
        var memento = JSON.stringify(this);
        return memento;
    },
 
    dehydrate: function(memento) {
        var m = JSON.parse(memento);
        this.name = m.name;
        
    }
}
 
var CareTaker = function() {
    this.mementos = {};
 
    this.add = function(key, memento) {
        this.mementos[key] = memento;
    },
 
    this.get = function(key) {
        return this.mementos[key];
    }
}

var leonardo = new Turtle("Leonardo");
var donatello = new Turtle("Donatello");
var caretaker = new CareTaker();

console.log("-- save new states");

caretaker.add(1, leonardo.hydrate());
caretaker.add(2, donatello.hydrate());

console.log("-- mess up their names");

leonardo.name = "King Kong";
donatello.name = "Superman";

console.log("-- Get names");
console.log(leonardo.name);
console.log(donatello.name);

console.log("-- Restore Leonardo");
leonardo.dehydrate(caretaker.get(1));
console.log(leonardo.name);
console.log(donatello.name);

console.log("-- Restore Donatello");
donatello.dehydrate(caretaker.get(2));
console.log(leonardo.name);
console.log(donatello.name);
