# CODE_OVERVIEW.md for AtharShare

This document provides a brief overview of the key files and functions within the AtharShare project.

## Major Files and Their Purpose

### Client-side (`client/`)

*   `client/src/App.js`:
    *   **Purpose:** The primary React component that renders the user interface for file uploading and link display.
    *   **Important Functions/Modules:**
        *   `useState`, `useEffect`, `useRef`: React hooks for managing component state, side effects, and direct DOM interaction.
        *   `onUploadClick()`: Triggers the hidden file input.
        *   `getImage()` (within `useEffect`): Asynchronously handles file selection, creates `FormData`, calls `shareFile` from `api.js`, and updates the `result` state with the shareable link.
        *   `navigator.clipboard.writeText()`: Used by the "Copy Link" button to copy the generated URL to the user's clipboard.
*   `client/src/utils/api.js`:
    *   **Purpose:** Provides functions for making API calls to the backend server.
    *   **Important Functions/Modules:**
        *   `shareFile(data)`: Sends a POST request to the `/upload` endpoint with the file data.
*   `client/src/App.css`:
    *   **Purpose:** Contains the CSS styling for the `App.js` component, defining the layout, colors, and visual appearance.

### Server-side (`server/`)

*   `server/server.js`:
    *   **Purpose:** The main entry point for the Node.js Express server. It initializes the Express app, applies middleware (CORS, body parsers), connects to the database, and starts the server.
    *   **Important Functions/Modules:**
        *   `express()`: Initializes the Express application.
        *   `cors()`: Enables Cross-Origin Resource Sharing.
        *   `express.urlencoded()`, `express.json()`: Middleware for parsing incoming request bodies.
        *   `dotenv.config()`: Loads environment variables from `.env`.
        *   `connectDatabase()`: Establishes connection to MongoDB.
*   `server/routes/routes.js`:
    *   **Purpose:** Defines the API routes for the application.
    *   **Important Functions/Modules:**
        *   `router.post('/upload', ...)`: Defines the POST route for file uploads, using Multer middleware and `handleFileUpload` controller.
*   `server/controller/image-controller.js`:
    *   **Purpose:** Contains the business logic for handling file-related operations.
    *   **Important Functions/Modules:**
        *   `handleFileUpload(request, response)`:
            *   **Inputs:** `request` (Express request object containing file data), `response` (Express response object).
            *   **Outputs:** JSON response with `fileId` on success, or error message on failure.
            *   **Side Effects:** Creates a new `File` document in the MongoDB database.
*   `server/schemas/file.js`:
    *   **Purpose:** Defines the Mongoose schema for the `File` model, specifying the structure and types of data stored for each uploaded file in MongoDB.
*   `server/utils/db.js`:
    *   **Purpose:** Manages the connection to the MongoDB database using Mongoose.
    *   **Important Functions/Modules:**
        *   `connectDatabase()`: Connects to the MongoDB instance using the `MONGO_URI` from environment variables.
*   `server/utils/upload.js`:
    *   **Purpose:** Configures and exports the Multer middleware for handling multipart/form-data, primarily for file uploads.

## New Features Added

*   **Copy Link to Clipboard:** A "Copy Link" button has been added to the client-side UI, allowing users to easily copy the generated shareable file link to their clipboard.

## Features Removed

*   **Direct File Download via Server Endpoint:** The server-side `getImage` function and its corresponding route (`/file/:fileId`) have been removed. The application now focuses solely on providing a shareable link, and direct file downloads are no longer facilitated through a dedicated server endpoint.
*   Removed all `console.log` statements for cleaner code.

## Author

Built by Athar. UI cloned for learning only.
