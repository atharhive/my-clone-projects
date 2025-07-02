# MailFlow

MailFlow is a simplified email client application built by Athar.
 This project is a UI clone for learning purposes, demonstrating modern web development practices.

## What this project does

AtharMail provides basic email functionalities such as viewing inbox, starred emails, sent emails, drafts, and a bin. Users can compose and send new emails, and mark emails as read/unread.

## How to install & run it

### Prerequisites

*   Node.js (LTS version recommended)
*   MongoDB (for the server-side database)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url> atharmail
    cd atharmail
    ```
2.  **Server Setup:**
    ```bash
    cd server
    npm install
    ```
    Create a `.env` file in the `server` directory with the following content:
    ```
    PORT=8000
    DB_USERNAME=<Your MongoDB Username>
    DB_PASSWORD=<Your MongoDB Password>
    ```
    Replace `<Your MongoDB Username>` and `<Your MongoDB Password>` with your actual MongoDB credentials.

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
    *   `App.js`: The main React component, handling routing and overall application layout.
    *   `components/`: Contains various UI components like `Header`, `SideBar`, `ComposeMail`, `Emails`, etc.
    *   `constants/constant.js`: Stores application-wide constants like the logo URL.
    *   `config/sidebar.config.js`: Defines the structure and content of the sidebar navigation.
    *   `routes/routes.js`: Defines the client-side routes.
    *   `services/api.js`: Contains functions for interacting with the backend API.
    *   `services/api.urls.js`: Defines the API endpoints.

### Server (`server/`)

*   `index.js`: The entry point of the server application, setting up Express.js, CORS, and connecting to the database.
*   `routes/route.js`: Defines the API endpoints for email operations.
*   `controller/email-controller.js`: Contains the logic for handling email-related operations (save, get, toggle starred, delete, move to bin, toggle read).
*   `schemas/email.js`: Defines the Mongoose schema for storing email information in MongoDB.
*   `utils/db.js`: Handles the connection to the MongoDB database.

## Short explanation of core logic

Emails are stored in a MongoDB database. The client interacts with the server through RESTful API endpoints to perform operations like sending, retrieving, starring, deleting, and marking emails as read/unread. The client-side routing manages the display of different email views (inbox, starred, etc.).

## Built by Athar, UI cloned for learning only.
