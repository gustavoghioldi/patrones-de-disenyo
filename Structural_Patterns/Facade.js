var Mortgage = function(name) {
    this.name = name;
}
 
Mortgage.prototype = {
 
    applyFor: function(amount) {
        // access multiple subsystems...
        var result = "approved";
        if (!new Bank().verify(this.name, amount)) {
            result = "denied";
        } else if (!new Credit().get(this.name)) {
            result = "denied";
        } else if (!new Blacklist().check(this.name)) {
            result = "denied";
        }
        return this.name + " has been " + result +
               " for a " + amount + " mortgage";
    }
}
 
var Bank = function() {
    this.verify = function(name, amount) {
        if (amount > 100000) {
            return false;
        }
        return true;
    }
}
 
var Credit = function() {
    this.get = function(name) {
        // complex logic ...
        return true;
    }
}
 
var Blacklist = function() {
    this.check = function(name) {
        if (name === "Splinter") {
            return false;
        }
        return true;
    }
}
 
var mortgage = new Mortgage("Michelangelo");
var result = mortgage.applyFor(10000000);
console.log(result);

var mortgage = new Mortgage("Leonardo");
var result = mortgage.applyFor(1000);
console.log(result);

var mortgage = new Mortgage("Splinter");
var result = mortgage.applyFor(10);
console.log(result);