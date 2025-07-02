# CODE_OVERVIEW.md for TaskFlow

This document provides a brief overview of the key files and functions within the TaskFlow project.

## Major Files and Their Purpose

### Client-side (`client/`)

*   `client/src/App.js`:
    *   **Purpose:** The main application component, responsible for rendering the task list and input form.
*   `client/src/index.js`:
    *   **Purpose:** The entry point of the React application, rendering the root component and setting up the Redux store.
*   `client/src/components/`:
    *   **Purpose:** Houses various reusable UI components, such as the task input form and individual task items.
*   `client/src/redux/`:
    *   **Purpose:** Manages the application's state using Redux, including actions, reducers, and the store.

### Server-side (`server/`)

*   `server/index.js`:
    *   **Purpose:** The main server file, responsible for setting up the Express.js application, connecting to the database, and defining middleware.
*   `server/routes/`:
    *   **Purpose:** Defines the API routes for task-related operations (create, read, update, delete).
*   `server/controller/`:
    *   **Purpose:** Contains the business logic for handling task requests and interacting with the database.
*   `server/database/`:
    *   **Purpose:** Handles the connection to the MongoDB database.
*   `server/model/`:
    *   **Purpose:** Defines the Mongoose schema for the `Todo` model.

## New Features Added

*   No new features have been added yet; the focus is on refactoring and adhering to the checklist.

## Features Removed

*   Removed all `console.log` statements for cleaner code.

## Author

Built by Athar. UI cloned for learning only.
