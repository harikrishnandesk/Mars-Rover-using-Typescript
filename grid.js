"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
var Grid = /** @class */ (function () {
    function Grid(size) {
        this.size = size;
        this.obstacles = [];
    }
    Grid.prototype.addObstacle = function (obstacle) {
        this.obstacles.push(obstacle);
    };
    Grid.prototype.isValidPosition = function (position) {
        return position.x >= 0 && position.x < this.size.width && position.y >= 0 && position.y < this.size.height;
    };
    Grid.prototype.hasObstacle = function (x, y) {
        return this.obstacles.some(function (obstacle) { return obstacle.x === x && obstacle.y === y; });
    };
    return Grid;
}());
exports.Grid = Grid;
