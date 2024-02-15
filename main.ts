// main.ts
import * as readlineSync from 'readline-sync';
import { Command, getCommand, getDirection } from './utils';
import { Grid } from './grid';
import { Obstacle } from './obstacle';
import { Rover } from './rover';


try {
    const width = readlineSync.question('Enter grid width: ');
    const height = readlineSync.question('Enter grid height: ');

    if (!width || !height) {
        throw new Error('Invalid grid dimensions. Please provide valid width and height.');
    }

    const grid = new Grid({ width: parseInt(width), height: parseInt(height) });

    const obstacleCount = readlineSync.question('Enter the number of obstacles: ');
    for (let i = 0; i < parseInt(obstacleCount); i++) {
        const obstacleX = readlineSync.question(`Enter obstacle ${i + 1} X coordinate: `);
        const obstacleY = readlineSync.question(`Enter obstacle ${i + 1} Y coordinate: `);

        if (!obstacleX || !obstacleY) {
            throw new Error('Invalid obstacle coordinates. Please provide valid X and Y coordinates.');
        }

        grid.addObstacle(new Obstacle(parseInt(obstacleX), parseInt(obstacleY)));
    }

    const roverX = readlineSync.question('Enter rover X coordinate: ');
    const roverY = readlineSync.question('Enter rover Y coordinate: ');
    const roverDirection = readlineSync.question('Enter rover direction (North, South, East, West): ');

    if (!roverX || !roverY || !roverDirection) {
        throw new Error('Invalid rover parameters. Please provide valid X coordinate, Y coordinate, and direction.');
    }

    const rover = new Rover(parseInt(roverX), parseInt(roverY), getDirection(roverDirection), grid);

    const commandCount = readlineSync.question('Enter the number of commands: ');
    const commands: Command[] = [];

    for (let i = 0; i < parseInt(commandCount); i++) {
        const commandType = readlineSync.question(`Enter command ${i + 1} type (Move, TurnLeft, TurnRight): `);

        if (!commandType) {
            throw new Error('Invalid command type. Please provide a valid command type.');
        }

        commands.push(getCommand(commandType, rover));
    }

    rover.executeCommands(commands);
    console.log(rover.sendStatusReport());
} catch (error) {
    console.error(`An error occurred: ${error.message}`);
}
