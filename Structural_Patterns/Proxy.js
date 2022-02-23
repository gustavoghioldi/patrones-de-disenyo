function TMNT() {
 
    this.animal = function(name) {
        
        if (name === "Splinter") {
            return "Rat";
        } else {
            return "Turtle";
        }
    };
}
 
function TMNTProxy() {
    var tmnts = new TMNT();
    var cache = {};
    return {
        animal: function(name) {
            if (!cache[tmnts.animal(name)]) {
                cache[tmnts.animal(name)] = tmnts.animal(name);
            }
            console.log(name + ": " + cache[tmnts.animal(name)]);
            return cache[tmnts.animal(name)];
        },
        getCount: function() {
            var count = 0;
            for (var code in cache) { count++; }
            return count;
        }
    };
};
 
 

var tmnt = new TMNTProxy();

tmnt.animal("Leonardo");
tmnt.animal("Donatello");
tmnt.animal("Michelangelo");
tmnt.animal("Raphael");
tmnt.animal("Splinter");

console.log("\nCache size: " + tmnt.getCount());
