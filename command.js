"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnRightCommand = exports.TurnLeftCommand = exports.MoveCommand = void 0;
var MoveCommand = /** @class */ (function () {
    function MoveCommand(rover) {
        this.rover = rover;
    }
    MoveCommand.prototype.execute = function () {
        this.rover.move();
    };
    return MoveCommand;
}());
exports.MoveCommand = MoveCommand;
var TurnLeftCommand = /** @class */ (function () {
    function TurnLeftCommand(rover) {
        this.rover = rover;
    }
    TurnLeftCommand.prototype.execute = function () {
        this.rover.turnLeft();
    };
    return TurnLeftCommand;
}());
exports.TurnLeftCommand = TurnLeftCommand;
var TurnRightCommand = /** @class */ (function () {
    function TurnRightCommand(rover) {
        this.rover = rover;
    }
    TurnRightCommand.prototype.execute = function () {
        this.rover.turnRight();
    };
    return TurnRightCommand;
}());
exports.TurnRightCommand = TurnRightCommand;
