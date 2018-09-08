import prompt from 'prompt';
import PlayGround from './src/playground';
import Robot from './src/robot';
import Command from './src/Commands'
import _ from 'lodash';

var table = PlayGround.initiate(5, 5);
var robot = Robot.initiate(table);

function input() {
    prompt.get(['command'], (err, result) => {
        if (err) throw err;
        
        if (_.isEqual(result.command.toLowerCase(), "exit")) {
          return;
        }

        Command.parseAndExecute(result.command.toUpperCase(), robot);
        input();
    });
}

console.log("You can exit any time issuing EXIT command.");
prompt.start();
input();
