"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var utils_1 = require("./utils");
var grid_1 = require("./grid");
var obstacle_1 = require("./obstacle");
var rover_1 = require("./rover");
try {
    var width = readlineSync.question('Enter grid width: ');
    var height = readlineSync.question('Enter grid height: ');
    if (!width || !height) {
        throw new Error('Invalid grid dimensions. Please provide valid width and height.');
    }
    var grid = new grid_1.Grid({ width: parseInt(width), height: parseInt(height) });
    var obstacleCount = readlineSync.question('Enter the number of obstacles: ');
    for (var i = 0; i < parseInt(obstacleCount); i++) {
        var obstacleX = readlineSync.question("Enter obstacle ".concat(i + 1, " X coordinate: "));
        var obstacleY = readlineSync.question("Enter obstacle ".concat(i + 1, " Y coordinate: "));
        if (!obstacleX || !obstacleY) {
            throw new Error('Invalid obstacle coordinates. Please provide valid X and Y coordinates.');
        }
        grid.addObstacle(new obstacle_1.Obstacle(parseInt(obstacleX), parseInt(obstacleY)));
    }
    var roverX = readlineSync.question('Enter rover X coordinate: ');
    var roverY = readlineSync.question('Enter rover Y coordinate: ');
    var roverDirection = readlineSync.question('Enter rover direction (North, South, East, West): ');
    if (!roverX || !roverY || !roverDirection) {
        throw new Error('Invalid rover parameters. Please provide valid X coordinate, Y coordinate, and direction.');
    }
    var rover = new rover_1.Rover(parseInt(roverX), parseInt(roverY), (0, utils_1.getDirection)(roverDirection), grid);
    var commandCount = readlineSync.question('Enter the number of commands: ');
    var commands = [];
    for (var i = 0; i < parseInt(commandCount); i++) {
        var commandType = readlineSync.question("Enter command ".concat(i + 1, " type (Move, TurnLeft, TurnRight): "));
        if (!commandType) {
            throw new Error('Invalid command type. Please provide a valid command type.');
        }
        commands.push((0, utils_1.getCommand)(commandType, rover));
    }
    rover.executeCommands(commands);
    console.log(rover.sendStatusReport());
}
catch (error) {
    console.error("An error occurred: ".concat(error.message));
}
