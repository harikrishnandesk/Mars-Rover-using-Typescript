"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rover = void 0;
var Rover = /** @class */ (function () {
    function Rover(x, y, direction, grid) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.grid = grid;
    }
    Rover.prototype.executeCommands = function (commands) {
        for (var _i = 0, commands_1 = commands; _i < commands_1.length; _i++) {
            var command = commands_1[_i];
            command.execute();
        }
    };
    Rover.prototype.move = function () {
        var newPosition = this.direction.move(this.x, this.y);
        if (this.grid.isValidPosition(newPosition)) {
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    };
    Rover.prototype.turnLeft = function () {
        this.direction = this.direction.turnLeft();
    };
    Rover.prototype.turnRight = function () {
        this.direction = this.direction.turnRight();
    };
    Rover.prototype.sendStatusReport = function () {
        return "Rover is at (".concat(this.x, ", ").concat(this.y, ") facing ").concat(this.direction.getName(), ". ").concat(this.grid.hasObstacle(this.x, this.y) ? 'Obstacle detected.' : 'No obstacles detected.');
    };
    return Rover;
}());
exports.Rover = Rover;
