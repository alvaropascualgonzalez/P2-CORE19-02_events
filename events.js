//const EventEmitter = require('./events')

class EventEmitter{
//const ee = new EventEmitter()

constructor(){
this.ee= [];
}
on(evento, callback){
this.ee[evento]= callback;
}
emit(ev,args){
this.ee[ev](args);
}
}
exports = module.exports = EventEmitter;


