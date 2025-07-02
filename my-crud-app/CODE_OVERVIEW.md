# Code Overview - My CRUD Application

This document provides a brief overview of the key files, functions, and modules within the "My CRUD Application" project.

## Client-side (Frontend)

### `crud-app/src/App.js`
-   **Purpose**: The root component that sets up the application's routing.

### `crud-app/src/pages/`
This directory now houses all the UI components, previously in `crud-app/src/Component`.

### `crud-app/src/pages/Home.jsx`
-   **Purpose**: The main landing page of the application.

### `crud-app/src/pages/AddUser.jsx`
-   **Purpose**: Component for adding a new user.
-   **Important Functions/Modules**:
    -   `addUserDetails()`: Sends new user data to the backend for creation.

### `crud-app/src/pages/AllUsers.jsx`
-   **Purpose**: Component for displaying all users.
-   **Important Functions/Modules**:
    -   `getAllUsers()`: Fetches all user data from the backend.
    -   `deleteUserData()`: Deletes a user by ID.

### `crud-app/src/pages/EditUser.jsx`
-   **Purpose**: Component for editing an existing user.
-   **Important Functions/Modules**:
    -   `loadUserDetails()`: Fetches details of a specific user for editing.
    -   `editUserDetails()`: Sends updated user data to the backend.

### `crud-app/src/pages/NavBar.jsx`
-   **Purpose**: Provides navigation links for the application.

### `crud-app/src/pages/NotFound.jsx`
-   **Purpose**: Displays a custom 404 page for invalid routes.

### `crud-app/src/Service/api.js`
-   **Purpose**: Centralized API service for all frontend-to-backend communication.
-   **Important Functions/Modules**:
    -   `API`: An object containing functions for `getUsers`, `addUser`, `deleteUser`, and `editUser`.

## Server-side (Backend)

### `crud-service/index.js`
-   **Purpose**: The main entry point for the backend server. Initializes Express.js, connects to the database, and sets up middleware and routes.

### `crud-service/server/route.js`
-   **Purpose**: Defines all the API routes for user management.

### `crud-service/controller/user-controller.js`
-   **Purpose**: Contains the business logic for user-related API endpoints.

### `crud-service/database/db.js`
-   **Purpose**: Handles the connection to the MongoDB database.

### `crud-service/model/userSchema.js`
-   **Purpose**: Defines the Mongoose schema for the User data model.

## New Features Added

-   No new features were explicitly added as per the checklist, focusing on refactoring and cleanup.

## Features Removed

-   **JSON Server Dependency**: The `json-server` and its related scripts were removed from the client-side as a dedicated backend is in use.

## Author

Built by Athar. UI cloned for learning only.
