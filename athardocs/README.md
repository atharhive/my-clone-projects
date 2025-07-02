# AtharDocs

AtharDocs is a real-time collaborative document editor built by Athar. This project is a UI clone for learning purposes.

## What this project does

AtharDocs allows multiple users to edit a document simultaneously, with changes reflected in real-time for all collaborators. Each document has a unique URL.

## How to install & run it

### Prerequisites

*   Node.js (LTS version recommended)
*   MongoDB

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url> athardocs
    cd athardocs
    ```
2.  **Server Setup:**
    ```bash
    cd server
    npm install
    ```
    Create a `.env` file in the `server` directory with your MongoDB credentials.

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
2.  **Start the Client:**
    ```bash
    cd ../client
    npm start
    ```

## How the main files & folders work together

### Client (`client/`)

*   `src/component/Editor.jsx`: The main component for the document editor.
*   `src/App.js`: Handles routing and document ID generation.

### Server (`server/`)

*   `index.js`: Server entry point, sets up Socket.IO.
*   `controller/document-controller.js`: Handles document data operations.
*   `schemas/document-schema.js`: Defines the MongoDB document schema.
*   `utils/db.js`: Manages MongoDB connection.

## Short explanation of core logic

Documents are stored in MongoDB. Socket.IO facilitates real-time communication between clients and the server, broadcasting changes to all connected users for a given document.

## Built by Athar, UI cloned for learning only.
