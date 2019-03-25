const EventEmitter = require('./events');
const later = require('later');
later.date.localTime();

//clase programador
class Programador  extends EventEmitter {

//[{hora: "21:04",temperatura: 22},{hora: "21:05",temperatura: 18},{hora: "18:0$


 constructor (prog){
super();
const sched = later.parse.text('at' + prog.hora);
prog.forEach(x => {later.setInterval(() => this.emit('ideal',prog.temperatura),sched)});
  }

}
exports = module.exports = Programador;


