# Code Overview - My Blog Website

This document provides a brief overview of the key files, functions, and modules within the "My Blog Website" project.

## Client-side (Frontend)

### `client/src/App.js`
-   **Purpose**: The root component that sets up the application's routing and integrates global contexts (authentication and theme).
-   **Important Functions/Modules**:
    -   `PrivateRoute`: A component that protects routes, ensuring only authenticated users can access certain parts of the application.
    -   `AppContent`: The main application logic wrapped by `ThemeContextProvider`.
    -   `App`: Renders the `ThemeContextProvider` which wraps `AppContent`.

### `client/src/pages/`
This directory now houses all the UI components, previously in `client/src/components`.

### `client/src/pages/components/account/Login.jsx`
-   **Purpose**: Handles user registration and login.
-   **Important Functions/Modules**:
    -   `loginUser()`: Authenticates a user by sending credentials to the backend.
    -   `signupUser()`: Registers a new user.
    -   `toggleSignup()`: Toggles between login and signup forms.

### `client/src/pages/components/create/CreatePost.jsx`
-   **Purpose**: Allows users to create new blog posts.
-   **Important Functions/Modules**:
    -   `savePost()`: Sends new post data to the backend for creation.
    -   `handleChange()`: Updates the post state as the user types.

### `client/src/pages/components/create/Update.jsx`
-   **Purpose**: Allows users to update existing blog posts.
-   **Important Functions/Modules**:
    -   `updateBlogPost()`: Sends updated post data to the backend.
    -   `handleChange()`: Updates the post state as the user types.

### `client/src/pages/components/details/DetailView.jsx`
-   **Purpose**: Displays a single blog post and its associated comments.
-   **Important Functions/Modules**:
    -   `deleteBlog()`: Deletes the current blog post.

### `client/src/pages/components/details/comments/Comments.jsx`
-   **Purpose**: Manages and displays comments for a blog post.
-   **Important Functions/Modules**:
    -   `addComment()`: Adds a new comment to the current post.
    -   `handleChange()`: Updates the comment state as the user types.

### `client/src/pages/components/header/Header.jsx`
-   **Purpose**: Provides navigation links and a logout button.
-   **Important Functions/Modules**:
    -   `logout()`: Clears session storage and redirects to the login page.

### `client/src/pages/components/home/Categories.jsx`
-   **Purpose**: Displays a list of blog categories and a button to create a new blog.

### `client/src/service/api.js`
-   **Purpose**: Centralized API service for all frontend-to-backend communication.
-   **Important Functions/Modules**:
    -   `axiosInstance`: Configured Axios instance with interceptors for request/response handling.
    -   `processResponse()`: Helper to standardize successful API responses.
    -   `ProcessError()`: Helper to handle and standardize API errors.
    -   `createAPI()`: A new helper function to create API calls, simplifying the `API` object construction.

### `client/src/context/ThemeContext.js` (New Feature)
-   **Purpose**: Provides a context for managing the application's theme (light/dark mode).
-   **Important Functions/Modules**:
    -   `ColorModeContext`: React Context for accessing the `toggleColorMode` function.
    -   `ThemeContextProvider`: A component that provides the theme and the `toggleColorMode` function to its children.
    -   `toggleColorMode()`: Toggles the theme between 'light' and 'dark'.

## Server-side (Backend)

### `server/index.js`
-   **Purpose**: The main entry point for the backend server. Initializes Express.js, connects to the database, and sets up middleware and routes.

### `server/routes/route.js`
-   **Purpose**: Defines all the API routes (e.g., `/signup`, `/login`, `/create`, `/posts`).

### `server/controller/`
-   **Purpose**: Contains the business logic for each API endpoint. Functions here interact with models and perform operations like user authentication, post creation, and comment management.

### `server/database/db.js`
-   **Purpose**: Handles the connection to the MongoDB database using Mongoose.

### `server/model/`
-   **Purpose**: Defines the Mongoose schemas for the application's data models (e.g., `User.js`, `Post.js`, `Comment.js`).

## New Features Added

-   **Dark Mode Toggle**: Implemented a light/dark theme toggle using `ThemeContext.js` and integrated into `App.js`.

## Features Removed

-   **Contact Page**: The dedicated "Contact" page, its routes, and navigation links have been removed.

## Author

Built by Athar. UI cloned for learning only.
