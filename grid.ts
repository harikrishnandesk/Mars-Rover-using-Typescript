import { Obstacle } from './obstacle';
import { Position } from './position';

export class Grid {
    private obstacles: Obstacle[] = [];

    constructor(private size: { width: number; height: number }) {}

    addObstacle(obstacle: Obstacle): void {
        this.obstacles.push(obstacle);
    }

    isValidPosition(position: Position): boolean {
        return position.x >= 0 && position.x < this.size.width && position.y >= 0 && position.y < this.size.height;
    }

    hasObstacle(x: number, y: number): boolean {
        return this.obstacles.some((obstacle) => obstacle.x === x && obstacle.y === y);
    }
}
