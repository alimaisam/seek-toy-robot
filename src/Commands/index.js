import _ from 'lodash';
import Robot from '../robot'

const validCommands = ['RIGHT', 'LEFT', 'MOVE', 'PLACE', 'REPORT'];

const Commands = {
    parseAndExecute: (command, robot) => {
        const splitCommand = command.split(' ');
        if (_.includes(validCommands, splitCommand[0])) {
            switch(splitCommand[0]) {
                case 'RIGHT': {
                    return Robot.turnRobotRight(robot);
                }
                case 'LEFT': {
                    return Robot.turnRobotLeft(robot);
                }
                case 'MOVE': {
                    return Robot.moveRobot(robot);
                }
                case 'PLACE': {
                    if (splitCommand.length > 0) {
                        return Robot.placeRobotOnTable(splitCommand[1], robot);
                    }
                    break;
                }
                case 'REPORT': {
                    return Robot.reportRobotPosition(robot);
                }
            }
        }
        return false;
    }
}

export default Commands;