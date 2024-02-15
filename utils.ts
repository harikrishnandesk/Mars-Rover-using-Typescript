import { Direction, North, South, East, West } from './direction';
import { Rover } from './rover';
import { Command, MoveCommand, TurnLeftCommand, TurnRightCommand } from './command';

export function getDirection(direction: string): Direction {
    switch (direction.toLowerCase()) {
        case 'north':
            return new North();
        case 'south':
            return new South();
        case 'east':
            return new East();
        case 'west':
            return new West();
        default:
            throw new Error('Invalid direction');
    }
}

export function getCommand(type: string, rover: Rover): Command {
    switch (type.toLowerCase()) {
        case 'move':
            return new MoveCommand(rover);
        case 'turnleft':
            return new TurnLeftCommand(rover);
        case 'turnright':
            return new TurnRightCommand(rover);
        default:
            throw new Error('Invalid command type');
    }
}
export { Command };
