"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommand = exports.getDirection = void 0;
var direction_1 = require("./direction");
var command_1 = require("./command");
function getDirection(direction) {
    switch (direction.toLowerCase()) {
        case 'north':
            return new direction_1.North();
        case 'south':
            return new direction_1.South();
        case 'east':
            return new direction_1.East();
        case 'west':
            return new direction_1.West();
        default:
            throw new Error('Invalid direction');
    }
}
exports.getDirection = getDirection;
function getCommand(type, rover) {
    switch (type.toLowerCase()) {
        case 'move':
            return new command_1.MoveCommand(rover);
        case 'turnleft':
            return new command_1.TurnLeftCommand(rover);
        case 'turnright':
            return new command_1.TurnRightCommand(rover);
        default:
            throw new Error('Invalid command type');
    }
}
exports.getCommand = getCommand;
