# InstaConnect

InstaConnect is a social media application built by Athar, demonstrating a UI clone for learning purposes.

## What this project does

InstaConnect aims to replicate the core functionalities of a popular photo-sharing platform, allowing users to share images, view posts from others, and interact through likes and comments. It focuses on a visually appealing feed and user profiles.

## How to install & run it

### Prerequisites

*   Node.js (LTS version recommended)
*   MongoDB (for the server-side database)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url> InstaConnect
    cd InstaConnect
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
    *   `pages/`: Main page components (Login, Signup, Home).
    *   `core/`: Contains core application logic and utilities, including:
        *   `components/`: Reusable UI components.
        *   `redux/`: Redux store, actions, and reducers for state management.

### Server (`server/`)

*   `index.js`: The entry point of the server application, setting up Express.js and connecting to the database.
*   `routes/`: Defines API endpoints.
*   `controller/`: Contains the logic for handling various operations.
*   `database/`: Handles the connection to the MongoDB database.
*   `model/`: Defines Mongoose schemas for database models.
*   `utils/`: Contains utility functions.

## Short explanation of core logic

The application uses a MERN stack (MongoDB, Express.js, React, Node.js). The client-side (React) interacts with the server-side (Express.js) through RESTful API endpoints for user authentication, post management, and interactions. Redux is used for client-side state management.

## Built by Athar, UI cloned for learning only.
