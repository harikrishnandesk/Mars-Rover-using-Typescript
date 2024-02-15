# Mars Rover Simulator

**Explore the Martian landscape with your very own command-driven rover!**

This project, written in TypeScript, allows you to navigate a virtual grid on Mars, avoiding obstacles and following your instructions.

## Getting Started

**Prerequisites:**

- Node.js and npm (or yarn) installed on your system

**Running the Simulator:**

1. Clone this repository or download the code.
2. Open a terminal in the project directory.
3. Run `tsc main.ts` to compile the TypeScript code to JavaScript.
5. Run `npm main.js` to start the simulator.

## How to Play

1. Enter the grid dimensions (width and height).
2. Place obstacles on the grid by providing their coordinates.
3. Set the rover's initial position and direction.
4. Enter a sequence of commands for the rover (Move, TurnLeft, TurnRight).
5. The rover will execute your commands and report its final position and direction.

## Features

- Interactive grid setup and rover configuration.
- Multiple obstacle placements.
- Error handling for invalid user input.
- Clear and concise output with the rover's final status.

## Project Structure

The project is organized into several TypeScript files:

- `command.ts`: Defines command interfaces and implementations.
- `direction.ts`: Defines direction interfaces and implementations.
- `grid.ts`: Defines the grid with obstacle management.
- `obstacle.ts`: Represents an obstacle on the grid.
- `position.ts`: Represents a position on the grid.
- `rover.ts`: Defines the rover object and its functionality.
- `utils.ts`: Utility functions for parsing user input and creating commands.
- `main.ts`: The entry point of the application, handling user interaction and rover execution.

## Input Examples

- When prompted for rover direction, enter one of: `North`, `South`, `East`, `West`.
- Commands: `Move`, `TurnLeft`, `TurnRight`.

## Awesome Design

This project's design focuses on user-friendliness and clarity. The command-line interface guides the user through each step, making it easy to set up the grid, configure the rover, and issue commands. Additionally, error handling provides informative messages when invalid input is entered.

## Contributing

We welcome contributions to this project! Feel free to fork the repository, make changes, and submit pull requests.


