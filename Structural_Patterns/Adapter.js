var Target =  function() {
    this.request = function() {
        return 'Target: The default target\'s behavior.';
    }
}

function Adaptee() {
    this.request = function() {
        return '.eetpadA eht fo roivaheb laicepS';
    }
}

function Adapter(adaptee) {
    this.request = function() {
        return adaptee.request().split('').reverse().join('');
    }
} 

function clientCode(target) {
    console.log(target.request())
}


var target = new Target()
clientCode(target)
var adaptee = new Adaptee()
clientCode(adaptee)

var adapter = new Adapter(adaptee)
clientCode(adapter)
