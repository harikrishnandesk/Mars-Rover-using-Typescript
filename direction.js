"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.West = exports.East = exports.South = exports.North = void 0;
var North = /** @class */ (function () {
    function North() {
    }
    North.prototype.move = function (x, y) {
        return { x: x, y: y + 1 };
    };
    North.prototype.turnLeft = function () {
        return new West();
    };
    North.prototype.turnRight = function () {
        return new East();
    };
    North.prototype.getName = function () {
        return 'North';
    };
    return North;
}());
exports.North = North;
var South = /** @class */ (function () {
    function South() {
    }
    South.prototype.move = function (x, y) {
        return { x: x, y: y - 1 };
    };
    South.prototype.turnLeft = function () {
        return new East();
    };
    South.prototype.turnRight = function () {
        return new West();
    };
    South.prototype.getName = function () {
        return 'South';
    };
    return South;
}());
exports.South = South;
var East = /** @class */ (function () {
    function East() {
    }
    East.prototype.move = function (x, y) {
        return { x: x + 1, y: y };
    };
    East.prototype.turnLeft = function () {
        return new North();
    };
    East.prototype.turnRight = function () {
        return new South();
    };
    East.prototype.getName = function () {
        return 'East';
    };
    return East;
}());
exports.East = East;
var West = /** @class */ (function () {
    function West() {
    }
    West.prototype.move = function (x, y) {
        return { x: x - 1, y: y };
    };
    West.prototype.turnLeft = function () {
        return new South();
    };
    West.prototype.turnRight = function () {
        return new North();
    };
    West.prototype.getName = function () {
        return 'West';
    };
    return West;
}());
exports.West = West;
