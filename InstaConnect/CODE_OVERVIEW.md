# CODE_OVERVIEW.md for InstaConnect

This document provides a brief overview of the key files and functions within the InstaConnect project.

## Major Files and Their Purpose

### Client-side (`client/`)

*   `client/src/App.js`:
    *   **Purpose:** The main application component, responsible for setting up the React Router and defining the application's routes.
*   `client/src/index.js`:
    *   **Purpose:** The entry point of the React application, rendering the root component.
*   `client/src/components/`:
    *   **Purpose:** Houses various reusable UI components used throughout the application.
*   `client/src/redux/`:
    *   **Purpose:** Manages the application's state using Redux, including actions, reducers, and the store.

### Server-side (`server/`)

*   `server/index.js`:
    *   **Purpose:** The main server file, responsible for setting up the Express.js application, connecting to the database, and defining middleware.
*   `server/routes/`:
    *   **Purpose:** Defines the API routes and links them to the corresponding controller functions.
*   `server/controller/`:
    *   **Purpose:** Contains the business logic for handling requests and interacting with data.
*   `server/database/`:
    *   **Purpose:** Handles the connection to the MongoDB database.
*   `server/model/`:
    *   **Purpose:** Defines Mongoose schemas for database models.
*   `server/utils/`:
    *   **Purpose:** Houses utility functions used across the server-side.

## New Features Added

*   No new features have been added yet; the focus is on refactoring and adhering to the checklist.

## Features Removed

*   Removed all `console.log` statements for cleaner code.

## Author

Built by Athar. UI cloned for learning only.
