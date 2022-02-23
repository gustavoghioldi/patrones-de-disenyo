var Splinter = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("I am Splinter i am unique");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 
 
var instance1 = Splinter.getInstance();
var instance2 = Splinter.getInstance();

console.log("only one Splinter? " + (instance1 === instance2));  
