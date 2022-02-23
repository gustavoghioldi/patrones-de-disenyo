var Node = function (name) {
    this.children = [];
    this.name = name;
}
 
Node.prototype = {
    add: function (child) {
        this.children.push(child);
    },
 
    remove: function (child) {
        var length = this.children.length;
        for (var i = 0; i < length; i++) {
            if (this.children[i] === child) {
                this.children.splice(i, 1);
                return;
            }
        }
    },
 
    getChild: function (i) {
        return this.children[i];
    },
 
    hasChildren: function () {
        return this.children.length > 0;
    }
}
 
// recursively traverse a (sub)tree
 
function traverse(indent, node) {
    log.add(Array(indent++).join("-") + node.name);
 
    for (var i = 0, len = node.children.length; i < len; i++) {
        traverse(indent, node.getChild(i));
    }
}
 
// logging helper
 
var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log); log = ""; }
    }
})();
 

var tree = new Node("TNMTS");
var left = new Node("Master")
var right = new Node("Turtles");
var splinter = new Node("Splinter");
var leonardo = new Node("Leonardo");
var donatello = new Node("Donatello");
var raphael = new Node("Donatello");
var michelangelo = new Node("Michelangelo");
tree.add(left);
tree.add(right);

left.add(splinter);

right.add(leonardo);
right.add(donatello);
right.add(raphael);
right.add(michelangelo);

traverse(1, tree);

log.show();
