
import { Command } from './command';
import { Direction } from './direction';  // Import Direction here
import { Grid } from './grid';  // Import Grid here

import { Obstacle } from './obstacle';
import { Position } from './position';

export class Rover {
    constructor(private x: number, private y: number, private direction: Direction, private grid: Grid) {}

    executeCommands(commands: Command[]): void {
        for (const command of commands) {
            command.execute();
        }
    }

    move(): void {
        const newPosition = this.direction.move(this.x, this.y);
        if (this.grid.isValidPosition(newPosition)) {
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    }

    turnLeft(): void {
        this.direction = this.direction.turnLeft();
    }

    turnRight(): void {
        this.direction = this.direction.turnRight();
    }

    sendStatusReport(): string {
        return `Rover is at (${this.x}, ${this.y}) facing ${this.direction.getName()}. ${
            this.grid.hasObstacle(this.x, this.y) ? 'Obstacle detected.' : 'No obstacles detected.'
        }`;
    }
}
