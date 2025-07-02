# AtharShare

AtharShare is a secure and efficient file sharing application built by Athar. This project is a UI clone for learning purposes, demonstrating modern web development practices.

## What this project does

AtharShare allows users to upload files and generate a unique, shareable link. This link can then be distributed to others, enabling them to access the uploaded file. The application focuses on simplicity and secure file sharing.

## How to install & run it

### Prerequisites

*   Node.js (LTS version recommended)
*   MongoDB (for the server-side database)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url> athar-share
    cd athar-share
    ```
2.  **Server Setup:**
    ```bash
    cd server
    npm install
    ```
    Create a `.env` file in the `server` directory with the following content:
    ```
    PORT=8000
    MONGO_URI=<Your MongoDB Connection String>
    ```
    Replace `<Your MongoDB Connection String>` with your actual MongoDB connection string (e.g., from MongoDB Atlas or a local instance).

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

*   `public/`: Contains static assets like `index.html`, manifest, and favicons.
*   `src/`:
    *   `App.js`: The main React component, handling file selection, upload, and displaying the shareable link.
    *   `App.css`: Styling for the `App.js` component.
    *   `core/`:
        *   `utils/api.js`: Contains functions for interacting with the backend API (e.g., `shareFile`).
    *   `assets/`: Stores static assets like the application logo.

### Server (`server/`)

*   `server.js`: The entry point of the server application, setting up Express.js, CORS, and connecting to the database.
*   `routes/routes.js`: Defines the API endpoints for file upload and retrieval.
*   `controller/image-controller.js`: Contains the logic for handling file uploads and managing file data in the database.
*   `schemas/file.js`: Defines the Mongoose schema for storing file information in MongoDB.
*   `utils/db.js`: Handles the connection to the MongoDB database.
*   `utils/upload.js`: Configures Multer for handling file uploads.
*   `uploads/`: Directory where uploaded files are temporarily stored.

## Short explanation of core logic

When a user selects a file in the client, it's sent to the `/upload` endpoint on the server. The server uses Multer to process the file and stores its metadata (path, name) in a MongoDB database. A unique ID is generated for the file, and this ID is returned to the client. The client then constructs a shareable link using this ID.

## Built by Athar, UI cloned for learning only.
