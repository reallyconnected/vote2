const EventEmmitter = require('events');

var url = "www.vote2.org";

class Logger extends EventEmmitter {
    log(message){
        console.log(message);
        this.emit('Logged',"Woopee!!!!");
    }
}

module.exports = Logger;