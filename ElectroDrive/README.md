# ElectroDrive

ElectroDrive is a modern web application built by Athar, demonstrating a UI clone for learning purposes.

## What this project does

ElectroDrive aims to replicate the user interface of a popular electric vehicle manufacturer's website, focusing on interactive elements and a sleek design. It showcases various models, features, and a seamless user experience.

## How to install & run it

### Prerequisites

*   Node.js (LTS version recommended)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url> ElectroDrive
    cd ElectroDrive
    ```
2.  **Server Setup:**
    ```bash
    cd server
    npm install
    ```

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
    *   `Components/`: Reusable UI components.
    *   `core/`: Contains core application logic and utilities, including:
        *   `constants/`: Stores application-wide constants.
    *   `App.js`: Main application component, handling routing.
    *   `index.js`: Entry point for the React application.

### Server (`server/`)

*   `index.js`: The entry point of the server application, setting up Express.js.
*   `routes/`: Defines API endpoints.
*   `controller/`: Contains the logic for handling various operations.
*   `utils/`: Contains utility functions.

## Short explanation of core logic

The application uses a MERN stack (MongoDB, Express.js, React, Node.js). The client-side (React) interacts with the server-side (Express.js) through RESTful API endpoints to fetch data and manage application state. The focus is on a visually appealing and interactive front-end.

## Built by Athar, UI cloned for learning only.
