const events = require('events');
const util = require('util');

// const myEmitter = new events.EventEmitter;

// myEmitter.on('test', function(arg) {
//     console.log(arg);
// });

// myEmitter.emit('test', 'hello world');

const teams = function(name) {
    this.name = name;
};

util.inherits(teams, events.EventEmitter)

const Aresnal = new teams('Aresnal');
const RealMadrid = new teams('RealMadrid');
const AlNassr = new teams('AlNassr');

const teamArray = [Aresnal, RealMadrid, AlNassr];

teamArray.forEach((team) => {
    team.on('nation', function(nation) {
        console.log(team.name + ' is ' + nation + ' football club');
    });
});

Aresnal.emit('nation', 'English');