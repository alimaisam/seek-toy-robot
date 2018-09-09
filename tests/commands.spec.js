"use strict";

import Robot from '../src/robot';
import Table from '../src/playground';
import Commands from '../src/Commands';
import {expect} from "chai";

describe('Parse and execute commands', () => {
    describe('Execute Place Command', () => {
        var robot = null;
        beforeEach(() => {
            const table = Table.initiate(5, 5);
            robot = Robot.initiate(table);
            Robot.placeRobotOnTable('1,1,north', robot);
        })

        it('should parse and execute the place command and return true', () => {
            const result = Commands.parseAndExecute(('place 1,1,north').toUpperCase(), robot);
            expect(result).to.be.true;
        })

        it('should parse and execute the left command and return true', () => {
            const result = Commands.parseAndExecute(('left').toUpperCase(), robot);
            expect(result).to.be.true;
        })

        it('should parse and execute the right command and return true', () => {
            const result = Commands.parseAndExecute(('right').toUpperCase(), robot);
            expect(result).to.be.true;
        })

        it('should parse and execute the move command and return true', () => {
            const result = Commands.parseAndExecute(('move').toUpperCase(), robot);
            expect(result).to.be.true;
        })

        it('should parse and execute the report command and output result', () => {
            const result = Commands.parseAndExecute(('report').toUpperCase(), robot);
            expect(result).to.have.string('1,1,NORTH');
        })

        it('should parse and execute the command and return false for the invalid command', () => {
            const result = Commands.parseAndExecute(('pace').toUpperCase(), robot);
            expect(result).to.be.false;
        })

        it('should return false if the place command dont have any parameters', () => {
            const result = Commands.parseAndExecute(('place').toUpperCase(), robot);
            expect(result).to.be.false;
        })

        it('should return false if the place command dont have correct parameters', () => {
            const result = Commands.parseAndExecute(('place hi,hello,north').toUpperCase(), robot);
            expect(result).to.be.false;
        })
    })
})
