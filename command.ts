// command.ts
import { Rover } from './rover';  // Import Rover here

interface Command {
    execute(): void;
}

class MoveCommand implements Command {
    constructor(private rover: Rover) {}

    execute(): void {
        this.rover.move();
    }
}

class TurnLeftCommand implements Command {
    constructor(private rover: Rover) {}

    execute(): void {
        this.rover.turnLeft();
    }
}

class TurnRightCommand implements Command {
    constructor(private rover: Rover) {}

    execute(): void {
        this.rover.turnRight();
    }
}

export { Command, MoveCommand, TurnLeftCommand, TurnRightCommand }; 
