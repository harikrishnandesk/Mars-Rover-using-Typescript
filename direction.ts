import { Position } from './position';

export interface Direction {
    move(x: number, y: number): Position;
    turnLeft(): Direction;
    turnRight(): Direction;
    getName(): string;
}

export class North implements Direction {
    move(x: number, y: number): Position {
        return { x, y: y + 1 };
    }

    turnLeft(): Direction {
        return new West();
    }

    turnRight(): Direction {
        return new East();
    }

    getName(): string {
        return 'North';
    }
}

export class South implements Direction {
    move(x: number, y: number): Position {
        return { x, y: y - 1 };
    }

    turnLeft(): Direction {
        return new East();
    }

    turnRight(): Direction {
        return new West();
    }

    getName(): string {
        return 'South';
    }
}

export class East implements Direction {
    move(x: number, y: number): Position {
        return { x: x + 1, y };
    }

    turnLeft(): Direction {
        return new North();
    }

    turnRight(): Direction {
        return new South();
    }

    getName(): string {
        return 'East';
    }
}

export class West implements Direction {
    move(x: number, y: number): Position {
        return { x: x - 1, y };
    }

    turnLeft(): Direction {
        return new South();
    }

    turnRight(): Direction {
        return new North();
    }

    getName(): string {
        return 'West';
    }
}
