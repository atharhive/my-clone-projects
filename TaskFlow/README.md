# TaskFlow

TaskFlow is a modern task management application built by Athar, demonstrating a UI clone for learning purposes.

## What this project does

TaskFlow provides a simple and intuitive interface for users to create, manage, and track their daily tasks. It allows users to add new tasks, mark them as complete, and delete them, helping to improve productivity and organization.

## How to install & run it

### Prerequisites

*   Node.js (LTS version recommended)
*   MongoDB (for the server-side database)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url> TaskFlow
    cd TaskFlow
    ```
2.  **Server Setup:**
    ```bash
    cd server
    npm install
    ```
    Create a `.env` file in the `server` directory with your MongoDB credentials and other necessary environment variables.

3.  **Client Setup:**
    ```bash
    cd ../client
    npm install
    ```

### Running the Application

1.  **Start the Server:**
    ```bash
    cd server
    npm start
    ```
    The server will run on `http://localhost:8000` (or the PORT you specified in `.env`).

2.  **Start the Client:**
    ```bash
    cd ../client
    npm start
    ```
    The client application will open in your browser, usually at `http://localhost:3000`.

## How the main files & folders work together

### Client (`client/`)

*   `public/`: Contains static assets like `index.html`.
*   `src/`:
    *   `components/`: Reusable UI components.
    *   `App.js`: Main application component.
    *   `index.js`: Entry point for the React application.
    *   `core/`: Contains core application logic, including:
        *   `redux/`: Redux store, actions, and reducers for state management.

### Server (`server/`)

*   `index.js`: The entry point of the server application, setting up Express.js and connecting to the database.
*   `routes/`: Defines API endpoints.
*   `controller/`: Contains the logic for handling various operations.
*   `database/`: Handles the connection to the MongoDB database.
*   `model/`: Defines Mongoose schemas for database models.

## Short explanation of core logic

The application uses a MERN stack (MongoDB, Express.js, React, Node.js). The client-side (React) interacts with the server-side (Express.js) through RESTful API endpoints to manage tasks. Redux is used for client-side state management.

## Built by Athar, UI cloned for learning only.
