var Participant = function(name) {
    this.name = name;
    this.chatroom = null;
};
 
Participant.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function(message, from) {
        console.log(from.name + " to " + this.name + ": " + message);
    }
};
 
var Chatroom = function() {
    var participants = {};
 
    return {
 
        register: function(participant) {
            participants[participant.name] = participant;
            participant.chatroom = this;
        },
 
        send: function(message, from, to) {
            if (to) {                      // single message
                to.receive(message, from);    
            } else {                       // broadcast message
                for (key in participants) {   
                    if (participants[key] !== from) {
                        participants[key].receive(message, from);
                    }
                }
            }
        }
    };
};
 
var michelangelo = new Participant("Michelangelo");
var raphael = new Participant("Raphael");
var leonardo = new Participant("Leonardo");
var donatello = new Participant("Donatello");
var splinter = new Participant("Splinter");

var chatroom = new Chatroom();
chatroom.register(michelangelo);
chatroom.register(raphael);
chatroom.register(leonardo);
chatroom.register(donatello);
chatroom.register(splinter);

michelangelo.send("I want a Pizza.");
raphael.send("Hey, michel i want pizza too.", michelangelo);
michelangelo.send("Can you buy some pizza?? ", splinter)
splinter.send("Alert TMNT!!! they already ate too much pizza!!!!");