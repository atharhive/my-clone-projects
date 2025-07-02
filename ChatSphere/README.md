# ChatSphere

ChatSphere is a real-time messaging application built by Athar, demonstrating a UI clone for learning purposes.

## What this project does

ChatSphere aims to replicate the core functionalities of a popular messaging platform, allowing users to send and receive messages in real-time. It includes features like user authentication, chat history, and real-time message updates.

## How to install & run it

### Prerequisites

*   Node.js (LTS version recommended)
*   MongoDB (for the server-side database)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url> ChatSphere
    cd ChatSphere
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

4.  **Socket Setup:**
    ```bash
    cd ../socket
    npm install
    ```

### Running the Application

1.  **Start the Server:**
    ```bash
    cd server
    npm start
    ```
    The server will run on `http://localhost:8000` (or the PORT you specified in `.env`).

2.  **Start the Socket Server:**
    ```bash
    cd socket
    npm start
    ```
    The socket server will run on `http://localhost:9000`.

3.  **Start the Client:**
    ```bash
    cd ../client
    npm start
    ```
    The client application will open in your browser, usually at `http://localhost:3000`.

## How the main files & folders work together

### Client (`client/`)

*   `public/`: Contains static assets like `index.html`.
*   `src/`:
    *   `core/`: Contains core application logic and utilities, including:
        *   `components/`: Reusable UI components.
        *   `context/`: Manages application-wide state.
        *   `service/`: Contains API service calls.
        *   `utils/`: Contains utility functions.
    *   `App.js`: Main application component, handling routing.
    *   `index.js`: Entry point for the React application.

### Server (`server/`)

*   `index.js`: The entry point of the server application, setting up Express.js and connecting to the database.
*   `routes/`: Defines API endpoints.
*   `controller/`: Contains the logic for handling various operations.
*   `database/`: Handles the connection to the MongoDB database.
*   `model/`: Defines Mongoose schemas for database models.

### Socket (`socket/`)

*   `index.js`: The entry point for the Socket.IO server, handling real-time communication.

## Short explanation of core logic

The application uses a MERN stack (MongoDB, Express.js, React, Node.js) with Socket.IO for real-time communication. The client-side (React) interacts with the server-side (Express.js) for user authentication and data storage, while Socket.IO handles the real-time messaging functionality.

## Built by Athar, UI cloned for learning only.
