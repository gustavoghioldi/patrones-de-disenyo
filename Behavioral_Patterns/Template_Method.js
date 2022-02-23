var datastore = {
    process: function() {
        this.step1();
        this.step2();
        this.step3();
        return "Finish!";
    }
};
 
function inherit(proto) {
    var F = function() { };
    F.prototype = proto;
    return new F();
}
 

 

var mySql = inherit(datastore);

// implement template steps
mySql.step1 = function() {
    console.log("Attention!!");
};
mySql.step2 = function() {
    console.log("Ready!!!");
};
mySql.step3 = function() {
    console.log("Go!!!");
};
console.log(mySql.process());

mySql.step1 = function() {
    console.log("ATENCION!!");
};
mySql.step2 = function() {
    console.log("LISTOS!!!");
};
mySql.step3 = function() {
    console.log("PARTIR!!!");
};
console.log(mySql.process());
