# My CRUD Application

This project is a simple CRUD (Create, Read, Update, Delete) application built by Athar. The UI was cloned for learning purposes only.

## What this project does

This application allows users to:
- Add new users to a database.
- View a list of all existing users.
- Edit the details of an existing user.
- Delete users from the database.

## How to install & run it

### Prerequisites

- Node.js (LTS version recommended)
- MongoDB (local or cloud-based)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/atharvadeosthale/my-crud-app.git
    cd my-crud-app
    ```

2.  **Server Setup:**
    ```bash
    cd crud-service
    npm install
    ```
    Create a `.env` file in the `crud-service` directory with the following content:
    ```
    PORT=8080
    MONGODB_URI=<Your MongoDB Connection String>
    ```
    Replace `<Your MongoDB Connection String>` with your MongoDB connection URI (e.g., `mongodb://localhost:27017/crudapp` or a MongoDB Atlas URI).

3.  **Client Setup:**
    ```bash
    cd ../crud-app
    npm install
    ```

### Running the Application

1.  **Start the Server:**
    ```bash
    cd crud-service
    npm start
    ```
    The server will run on `http://localhost:8080`.

2.  **Start the Client:**
    ```bash
    cd ../crud-app
    npm start
    ```
    The client application will open in your browser, usually at `http://localhost:3000`.

## How the main files & folders work together

The project is structured into two main parts: `crud-app` (frontend) and `crud-service` (backend).

### Client (`crud-app` - Frontend)

-   **`crud-app/src/App.js`**: The main application component, handling routing.
-   **`crud-app/src/pages/`**: Contains all the UI components and pages of the application.
    -   `Home.jsx`: The landing page.
    -   `AddUser.jsx`: Form for adding new users.
    -   `AllUsers.jsx`: Displays a list of all users.
    -   `EditUser.jsx`: Form for editing existing user details.
    -   `NavBar.jsx`: Navigation bar.
    -   `NotFound.jsx`: Page displayed for invalid routes.
-   **`crud-app/src/Service/api.js`**: Handles API calls to the backend.

### Server (`crud-service` - Backend)

-   **`crud-service/index.js`**: The entry point of the server application, setting up Express.js and connecting to the database.
-   **`crud-service/server/route.js`**: Defines all API endpoints.
-   **`crud-service/controller/user-controller.js`**: Contains the logic for handling user-related API requests (add, get, edit, delete).
-   **`crud-service/database/db.js`**: Handles the MongoDB connection.
-   **`crud-service/model/userSchema.js`**: Defines the Mongoose schema for the User data model.

## Short explanation of core logic

The application uses a RESTful API architecture. The React frontend communicates with the Express.js backend via Axios. User data is stored in a MongoDB database. The application provides standard CRUD operations for managing user records.
