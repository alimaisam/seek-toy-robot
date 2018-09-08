import _ from 'lodash';
import Robot from '../robot'

const validCommands = ['RIGHT', 'LEFT', 'MOVE', 'PLACE', 'REPORT'];

const Commands = {
    parseAndExecute: (command, robot) => {
        const splitCommand = command.split(' ');
        if (_.includes(validCommands, splitCommand[0])) {
            switch(splitCommand[0]) {
                case 'RIGHT': {
                    Robot.turnRobotRight(robot);
                    break;
                }
                case 'LEFT': {
                    Robot.turnRobotLeft(robot);
                    break;
                }
                case 'MOVE': {
                    Robot.moveRobot(robot);
                    break;
                }
                case 'PLACE': {
                    if (splitCommand.length > 0) {
                        Robot.placeRobotOnTable(splitCommand[1], robot);
                    }
                    break;
                }
                case 'REPORT': {
                    Robot.reportRobotPosition(robot);
                    break;
                }
                default: {
                    break;
                }
            }
        }
        return false;
    }
}

export default Commands;