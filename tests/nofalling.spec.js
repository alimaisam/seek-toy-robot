"use strict";

import Robot from '../src/robot';
import Table from '../src/playground';
import {expect} from "chai";

describe('Control the Robot', () => {
    describe('Robot is present on the table', () => {
        var robot = null;
        beforeEach(() => {
            const table = Table.initiate(5, 5);
            robot = Robot.initiate(table);
            expect(Robot.placeRobotOnTable('3,3,north', robot)).to.be.true;
        })

        it('shouldn\'t fall from top left', () => {
            expect(Robot.placeRobotOnTable('0,4,north', robot)).to.be.true;
            expect(Robot.moveRobot(robot)).to.be.false;

            expect(Robot.reportRobotPosition(robot)).to.have.string('0,4,NORTH');

            expect(Robot.placeRobotOnTable('0,4,west', robot)).to.be.true;
            expect(Robot.moveRobot(robot)).to.be.false;

            expect(Robot.reportRobotPosition(robot)).to.have.string('0,4,WEST');
        })

        it('shouldn\'t fall from top right', () => {
            expect(Robot.placeRobotOnTable('4,4,north', robot)).to.be.true;
            expect(Robot.moveRobot(robot)).to.be.false;

            expect(Robot.reportRobotPosition(robot)).to.have.string('4,4,NORTH');

            expect(Robot.placeRobotOnTable('4,4,east', robot)).to.be.true;
            expect(Robot.moveRobot(robot)).to.be.false;

            expect(Robot.reportRobotPosition(robot)).to.have.string('4,4,EAST');
        })

        it('shouldn\'t fall from bottom left', () => {
            expect(Robot.placeRobotOnTable('0,0,west', robot)).to.be.true;
            expect(Robot.moveRobot(robot)).to.be.false;

            expect(Robot.reportRobotPosition(robot)).to.have.string('0,0,WEST');

            expect(Robot.placeRobotOnTable('0,0,south', robot)).to.be.true;
            expect(Robot.moveRobot(robot)).to.be.false;

            expect(Robot.reportRobotPosition(robot)).to.have.string('0,0,SOUTH');
        })

        it('shouldn\'t fall from bottom right', () => {
            expect(Robot.placeRobotOnTable('4,0,east', robot)).to.be.true;
            expect(Robot.moveRobot(robot)).to.be.false;

            expect(Robot.reportRobotPosition(robot)).to.have.string('4,0,EAST');

            expect(Robot.placeRobotOnTable('4,0,south', robot)).to.be.true;
            expect(Robot.moveRobot(robot)).to.be.false;

            expect(Robot.reportRobotPosition(robot)).to.have.string('4,0,SOUTH');
        })
    })
})