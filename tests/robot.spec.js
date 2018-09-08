"use strict";

import Robot from '../src/robot';
import Table from '../src/playground';
import {expect} from "chai";

describe('Create and Controls Robot', () => {
    describe('Initializes a robot', () => {
        it('should initialize a robot', () => {
            const table = Table.initiate(5, 5);
            const robot = Robot.initiate(table);
            expect(robot).to.be.an('object');
            expect(robot).to.have.property('table');
            expect(robot).to.have.property('position');
            expect(robot).to.have.property('placed').eq(false);
            expect(robot).to.have.property('direction').eq(null);
        })
    });

    describe('Controls the robot', () => {
        var robot = null;
        beforeEach(() => {
            const table = Table.initiate(5, 5);
            robot = Robot.initiate(table);
            expect(Robot.placeRobotOnTable('1,1,north', robot)).to.be.true;
            
        })

        it('should place robot anywhere on the table again', () => {
            expect(Robot.placeRobotOnTable('2,4,north', robot)).to.be.true;
        })

        it ('should allow robot to move on the table', () => {
            expect(Robot.moveRobot(robot)).to.be.true;
        })

        it ('should allow robot to turn left on the table', () => {
            expect(Robot.turnRobotLeft(robot)).to.be.true;
        })

        it ('should allow robot to turn right on the table', () => {
            expect(Robot.turnRobotRight(robot)).to.be.true;
        })

        it ('should print the current robot position', () => {
            expect(Robot.reportRobotPosition(robot)).to.have.string('1,1,NORTH');
        })
    });

    describe('Robot initialized but not placed on the table', () => {
        var robot = null;
        beforeEach(() => {
            const table = Table.initiate(5, 5);
            robot = Robot.initiate(table);
        })

        it('should return false when move command is executed', () => {
            expect(Robot.moveRobot(robot)).to.be.false;
        })

        it('should return false when left command is executed', () => {
            expect(Robot.turnRobotLeft(robot)).to.be.false;
        })

        it('should return false when right command is executed', () => {
            expect(Robot.turnRobotRight(robot)).to.be.false;
        })

        it('should return false when report command is executed', () => {
            expect(Robot.reportRobotPosition(robot)).to.be.false;
        })
    })

    describe('Robot cannot be placed', () => {
        var robot = null;
        beforeEach(() => {
            const table = Table.initiate(5, 5);
            robot = Robot.initiate(table);
        })

        it('shouldn\'t allow robot to be placed out the table', () => {
            expect(Robot.placeRobotOnTable('2,5,north', robot)).to.be.false;
        })
    })
})