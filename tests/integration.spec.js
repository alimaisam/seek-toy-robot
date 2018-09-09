"use strict";

import Robot from '../src/robot';
import Table from '../src/playground';
import Commands from '../src/Commands';
import {expect} from "chai";

function applyCommand(command, robot) {
    Commands.parseAndExecute(command, robot);

}

describe('Integration Tests', () => {
    var robot = null;
    beforeEach(() => {
        const table = Table.initiate(5, 5);
        robot = Robot.initiate(table);
        
    })

    it('Integration Test 1', () => {
        const commands = [
            'PLACE 0,0,NORTH',
            'MOVE',
            'REPORT'
        ]

        commands.forEach(command => applyCommand(command, robot));
        expect(Robot.reportRobotPosition(robot)).to.have.string('0,1,NORTH');
    })

    it('Integration Test 2', () => {
        const commands = [
            'PLACE 0,0,NORTH',
            'LEFT',
            'REPORT'
        ]

        commands.forEach(command => applyCommand(command, robot));
        expect(Robot.reportRobotPosition(robot)).to.have.string('0,0,WEST');
    })

    it('Integration Test 3', () => {
        const commands = [
            'PLACE 1,2,EAST',
            'MOVE',
            'MOVE',
            'LEFT',
            'MOVE',
            'REPORT'
        ]

        commands.forEach(command => applyCommand(command, robot));
        expect(Robot.reportRobotPosition(robot)).to.have.string('3,3,NORTH');
    })

    it('Integration Test 4', () => {
        const commands = [
            'PLACE 0,0,NORTH',
            'LEFT',
            'LEFT',
            'LEFT',
            'LEFT',
            'REPORT'
        ]

        commands.forEach(command => applyCommand(command, robot));
        expect(Robot.reportRobotPosition(robot)).to.have.string('0,0,NORTH');
    })

    it('Integration Test 5', () => {
        const commands = [
            'PLACE 0,0,NORTH',
            'RIGHT',
            'RIGHT',
            'RIGHT',
            'RIGHT',
            'REPORT'
        ]

        commands.forEach(command => applyCommand(command, robot));
        expect(Robot.reportRobotPosition(robot)).to.have.string('0,0,NORTH');
    })
})