import PlaceParser from './Helper/placeParser';
import ParseDirection from './Helper/direction';
import { directions } from './Enum';
import {newPosition, validateNewPosition} from './Helper/newposition';
import _ from 'lodash';

const Robot = {
    initiate: (table) => {
        return {
            table: table,
            placed: false,
            position: {
                x: null,
                y: null
            },
            direction: null
        }
    },

    moveRobot: (robot) => {
        if (robot.placed) {
            const nextPosition = newPosition(robot);
            if (validateNewPosition(nextPosition, robot.table)) {
                robot.position.x = nextPosition.newX;
                robot.position.y = nextPosition.newY;
            }
        }
    },

    turnRobotLeft: (robot) => {
        if (robot.placed) {

            const result = _.indexOf(directions, robot.direction);
            if (result === 0) robot.direction = directions[directions.length - 1];
            else robot.direction = directions[result - 1];
        } 
    },

    turnRobotRight: (robot) => {
        if (robot.placed) {
            const result = _.indexOf(directions, robot.direction);
            if (result === 3) robot.direction = directions[0];
            else robot.direction = directions[result + 1];
        }
    },

    placeRobotOnTable: (command, robot) => {
        const result = PlaceParser.Parse(command);

        if (validateNewPosition({'newX': result[0], 'newY': result[1]}, robot.table)) {
            robot.position.x = parseInt(result[0]);
            robot.position.y= parseInt(result[1]);
            robot.direction = ParseDirection.Parse(result[2]);
            robot.placed = true;
        }
    },

    reportRobotPosition: (robot) => {
        if (robot.placed) {
            console.log('%d,%d,%s', robot.position.x, robot.position.y, robot.direction);
        } else {
            console.log('Robot is not placed on the table');
        }
    }
}

export default Robot;