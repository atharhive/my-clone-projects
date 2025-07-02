# CODE_OVERVIEW.md for AtharDocs

## Major Files and Their Purpose

### Client-side (`client/`)

*   `client/src/App.js`:
    *   **Purpose:** Manages routing and generates unique document IDs for new documents.
*   `client/src/component/Editor.jsx`:
    *   **Purpose:** Implements the rich text editor using Quill.js and handles real-time updates via Socket.IO.
    *   **Important Functions/Modules:**
        *   `useState`, `useEffect`: React hooks for state management and side effects.
        *   `Quill`: The rich text editor library.
        *   `socket.io-client`: For connecting to the Socket.IO server.
        *   `documentTitle` state: New feature for managing the document's title.

### Server-side (`server/`)

*   `server/index.js`:
    *   **Purpose:** The main server file. Initializes Socket.IO and handles real-time document synchronization.
    *   **Important Functions/Modules:**
        *   `Socket.IO`: Enables real-time, bidirectional communication.
        *   `io.on('connection', ...)`: Handles new client connections.
        *   `socket.on('get-document', ...)`: Fetches document data from the database.
        *   `socket.on('send-changes', ...)`: Broadcasts document changes to other clients.
        *   `socket.on('save-document', ...)`: Saves document content to the database.
*   `server/controller/document-controller.js`:
    *   **Purpose:** Contains logic for interacting with the document database.
    *   **Important Functions/Modules:**
        *   `getDocument(id)`: Retrieves a document by its ID.
        *   `updateDocument(id, data)`: Updates a document's content.
*   `server/schemas/document-schema.js`:
    *   **Purpose:** Defines the Mongoose schema for document data in MongoDB.
*   `server/utils/db.js`:
    *   **Purpose:** Manages the connection to the MongoDB database.
    *   **Important Functions/Modules:**
        *   `connectDB()`: Establishes the database connection.

## New Features Added

*   **Document Title:** A text field has been added to the editor interface (`Editor.jsx`) to allow users to set and view a title for their document.

## Features Removed

*   **Procfile:** The `Procfile` has been removed from the server directory, as it is not essential for general deployment and simplifies the project structure.

## Author

Built by Athar. UI cloned for learning only.
