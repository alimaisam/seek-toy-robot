"use strict";

import Table from '../src/playground'
import {expect} from "chai";

describe('Create a Playground', () => {
    describe('Creates 5x5 Table', () => {
        it('should create a 5x5 table', () => {
            const table = Table.initiate(5, 5);
            expect(table).to.be.an("object");
            expect(table)
                .to.have.property("x")
                .eq(5);
            expect(table)
                .to.have.property("y")
                .eq(5);
        })
    })

    describe('Creates 3x7 Table', () => {
        it('should create a 3x7 table', () => {
            const table = Table.initiate(3, 7);
            expect(table).to.be.an("object");
            expect(table)
                .to.have.property("x")
                .eq(3);
            expect(table)
                .to.have.property("y")
                .eq(7);
        })
    })

    describe('Wont Create a table if area is not correctly defined', () => {
        it('should throw error', () => {
            expect(() => {
                Table.initiate(0, 0);
            }).to.throw("Table size should be greater than 0");
        
            expect(() => {
                Table.initiate(-3, 5);
            }).to.throw("Table size should be greater than 0");

            expect(() => {
                Table.initiate(5, -3);
            }).to.throw("Table size should be greater than 0");
        })
    })
})