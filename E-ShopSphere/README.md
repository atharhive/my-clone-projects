# ShopNest

ShopNest is a modern e-commerce application built by Athar. This project is a UI clone for learning purposes, demonstrating modern web development practices.

## What this project does

ShopNest provides a platform for users to browse products, view product details, add items to a shopping cart, and proceed to checkout. It features a responsive design and a user-friendly interface.

## How to install & run it

### Prerequisites

*   Node.js (LTS version recommended)
*   MongoDB (for the server-side database)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url> E-ShopSphere
    cd E-ShopSphere
    ```
2.  **Server Setup:**
    ```bash
    cd server
    npm install
    ```
    Create a `.env` file in the `server` directory with your MongoDB credentials and other necessary environment variables.

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
    *   `pages/`: Contains main page components like `Home.jsx` and `NotFound.jsx`.
    *   `Components/`: Contains various UI components like `Header`, `Cart`, `ItemDetails`, `Login`.
    *   `constant/`: Stores application-wide constants.
    *   `context/`: Manages application-wide state.
    *   `reducers/`: Redux reducers for state management.
    *   `redux/`: Redux actions for product and cart management.
    *   `services/`: Contains API service calls (e.g., `api.js`).
    *   `templates/`: Provides theming and styling.
    *   `utilities/`: Contains utility functions (e.g., `common-utils.js`, `paytm.js`).

### Server (`server/`)

*   `index.js`: The entry point of the server application, setting up Express.js, CORS, and connecting to the database.
*   `routes/route.js`: Defines the API endpoints.
*   `controller/`: Contains the logic for handling various operations (product, user, payment, cart).
*   `model/`: Defines Mongoose schemas for database models.
*   `database/db.js`: Handles the connection to the MongoDB database.
*   `paytm/`: Contains Paytm integration files.

## Short explanation of core logic

The application uses a MERN stack (MongoDB, Express.js, React, Node.js). The client-side (React) interacts with the server-side (Express.js) through RESTful API endpoints to fetch product data, manage user authentication, handle cart operations, and process payments. Redux is used for client-side state management.

## Built by Athar, UI cloned for learning only.
