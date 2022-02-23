function Alert() {
    this.handlers = [];  // observers
}
 
Alert.prototype = {
 
    subscribe: function(fn) {
        this.handlers.push(fn);
    },
 
    unsubscribe: function(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },
 
    fire: function(o, thisObj) {
        var scope = thisObj || {};
        this.handlers.forEach(function(item) {
            item.call(scope, o);
        });
    }
}
 
var leonardoHandler = function(item) { 
   console.log("fired Leonardo: " + item); 
};
var donatelloHandler = function(item) { 
    console.log("fired Donatello: " + item); 
 };
 var michelangeloHandler = function(item) { 
    console.log("fired Michelangelo: " + item); 
 };
 var raphaelHandler = function(item) { 
    console.log("fired Raphael: " + item); 
 };

var alert = new Alert();
alert.subscribe(leonardoHandler);
alert.subscribe(donatelloHandler);
alert.subscribe(michelangeloHandler);
alert.subscribe(raphaelHandler);
alert.fire('Alert #Pizza');
console.log("unsubscribe Donatello and Leonardo")
alert.unsubscribe(donatelloHandler)
alert.unsubscribe(leonardoHandler)
alert.fire('Alert #more Pizza');