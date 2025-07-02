# My Blog Website

This project is a personal blog website built by Athar. The UI was cloned for learning purposes only.

## What this project does

This blog website allows users to:
- Create an account and log in.
- Create, read, update, and delete blog posts.
- View blog posts by category.
- Comment on blog posts.
- Toggle between light and dark themes.

## How to install & run it

### Prerequisites

- Node.js (LTS version recommended)
- MongoDB (local or cloud-based)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/atharvadeosthale/my-blog-website.git
    cd my-blog-website
    ```

2.  **Server Setup:**
    ```bash
    cd server
    npm install
    ```
    Create a `.env` file in the `server` directory with the following content:
    ```
    PORT=8000
    MONGODB_URI=<Your MongoDB Connection String>
    JWT_SECRET_KEY=<Your JWT Secret Key>
    ```
    Replace `<Your MongoDB Connection String>` with your MongoDB connection URI (e.g., `mongodb://localhost:27017/myblog` or a MongoDB Atlas URI).
    Replace `<Your JWT Secret Key>` with a strong, random string.

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
    The server will run on `http://localhost:8000`.

2.  **Start the Client:**
    ```bash
    cd ../client
    npm start
    ```
    The client application will open in your browser, usually at `http://localhost:3000`.

## How the main files & folders work together

The project is structured into two main parts: `client` (frontend) and `server` (backend).

### Client (Frontend)

-   **`client/src/App.js`**: The main application component, handling routing and theme context.
-   **`client/src/pages/`**: Contains all the UI components and pages of the application.
    -   `account/Login.jsx`: Handles user login and signup.
    -   `about/About.jsx`: Information about the author.
    -   `banner/Banner.jsx`: The main banner displayed on the home page.
    -   `create/CreatePost.jsx`: Form for creating new blog posts.
    -   `create/Update.jsx`: Form for updating existing blog posts.
    -   `details/DetailView.jsx`: Displays a single blog post and its comments.
    -   `details/comments/`: Components related to comments.
    -   `header/Header.jsx`: Navigation bar.
    -   `home/Home.jsx`: The main landing page, displaying categories and posts.
    -   `home/post/`: Components for displaying individual posts and a list of posts.
-   **`client/src/context/`**: Provides global state management.
    -   `DataProvider.js`: Manages user authentication state.
    -   `ThemeContext.js`: Manages the light/dark theme toggle.
-   **`client/src/service/api.js`**: Handles API calls to the backend.
-   **`client/src/constants/config.js`**: Defines API service URLs and notification messages.
-   **`client/src/utils/common-utils.js`**: Utility functions for common tasks like token management.

### Server (Backend)

-   **`server/index.js`**: The entry point of the server application, setting up Express.js and connecting to the database.
-   **`server/routes/route.js`**: Defines all API endpoints.
-   **`server/controller/`**: Contains the logic for handling API requests.
-   **`server/database/db.js`**: Handles the MongoDB connection.
-   **`server/model/`**: Defines Mongoose schemas for data models (e.g., User, Post, Comment).
-   **`server/utils/upload.js`**: Handles file uploads (e.g., post images).

## Short explanation of core logic

The application uses a RESTful API architecture. The React frontend communicates with the Express.js backend via Axios. User authentication is handled using JWT (JSON Web Tokens). Blog posts and comments are stored in a MongoDB database. Images for posts are uploaded and stored using GridFS. The application also features a theme toggle for light and dark modes, managed by React Context.
