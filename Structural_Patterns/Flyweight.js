function Flyweight (animal, name) {

    this.animal = animal;
    this.name = name;
};
 
var FlyWeightFactory = (function () {
    var flyweights = {};
 
    return {
 
        get: function ( animal, name) {
            if (!flyweights[animal]) {
                flyweights[animal] = 
                    new Flyweight(animal, name);
            }
            return flyweights[animal];
        },
 
        getCount: function () {
            var count = 0;
            for (var f in flyweights) count++;
            return count;
        }
    }
})();
 
function TMNTCollection () {
    var tmnt = {};
    var count = 0;
 
    return {
        add: function (animal, name, color, weapon) {
            tmnt[weapon] = 
                new TMNT(animal, name, color, weapon);
            count++;
        },
 
        get: function (weapon) {
            return tmnt[weapon];
        },
 
        getCount: function () {
            return count;
        }
    };
}
 
var TMNT = function (animal, name, color, weapon) {
    this.flyweight = FlyWeightFactory.get(animal, name);
    this.color = color;
    this.weapon = weapon;
    // ...
}
 

 

var tmnts = new TMNTCollection();

tmnts.add("turtle", "Leonardo", "blue", "tachi");
tmnts.add("turtle", "Donatello", "violet", "bo");
tmnts.add("turtle", "Raphael", "red", "say");
tmnts.add("turtle", "Michelangelo", "orange", "nunchakus");
tmnts.add("rat",   "Splinter");

console.log("TMNTS: " + tmnts.getCount());
console.log("Flyweights TMNTS: " + FlyWeightFactory.getCount());
