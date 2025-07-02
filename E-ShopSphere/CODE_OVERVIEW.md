# CODE_OVERVIEW.md for E-ShopSphere

This document provides a brief overview of the key files and functions within the E-ShopSphere project.

## Major Files and Their Purpose

### Client-side (`client/`)

*   `client/src/pages/Home.jsx`:
    *   **Purpose:** Displays the main landing page with product listings and banners.
    *   **Important Functions/Modules:**
        *   `useEffect`: Fetches product data on component mount.
        *   `useSelector`, `useDispatch`: Redux hooks for state management.
*   `client/src/Components/Header/Header.jsx`:
    *   **Purpose:** Implements the navigation bar, including search and user authentication buttons.
*   `client/src/Components/ItemDetails/DetailView.jsx`:
    *   **Purpose:** Displays detailed information about a selected product.
    *   **Important Functions/Modules:**
        *   `useEffect`: Fetches product details based on the product ID.
*   `client/src/Components/Cart/Cart.jsx`:
    *   **Purpose:** Manages the shopping cart, displaying added items and total price.
    *   **Important Functions/Modules:**
        *   `addToCart`, `removeFromCart`: Redux actions for cart manipulation.
        *   `buyNow`: Initiates the payment process.
*   `client/src/services/api.js`:
    *   **Purpose:** Centralized module for making API calls to the backend.
    *   **Important Functions/Modules:**
        *   `getProducts`, `getProductById`, `userLogIn`, `userSignUp`, `payUsingPaytm`: Functions for interacting with various backend endpoints.
*   `client/src/utilities/common-utils.js`:
    *   **Purpose:** Contains general utility functions, such as `addEllipsis` for text truncation.
*   `client/src/utilities/paytm.js`:
    *   **Purpose:** Handles Paytm payment gateway integration on the client-side.

### Server-side (`server/`)

*   `server/index.js`:
    *   **Purpose:** The main server file, responsible for setting up the Express app, middleware, and database connection.
*   `server/routes/route.js`:
    *   **Purpose:** Defines the API routes and links them to the corresponding controller functions.
*   `server/controller/product-controller.js`:
    *   **Purpose:** Contains the logic for handling product-related operations (fetching all products, fetching product by ID).
    *   **Important Functions/Modules:**
        *   `getProducts(request, response)`: Fetches all products from the database.
        *   `getProductById(request, response)`: Fetches a single product by its ID.
*   `server/controller/user-controller.js`:
    *   **Purpose:** Contains the logic for user authentication (login and signup).
    *   **Important Functions/Modules:**
        *   `userLogIn(request, response)`: Authenticates user credentials.
        *   `userSignUp(request, response)`: Registers a new user.
*   `server/controller/payment-controller.js`:
    *   **Purpose:** Handles payment gateway integration with Paytm.
    *   **Important Functions/Modules:**
        *   `addPaymentGateway(request, response)`: Initiates the payment process.
        *   `paymentResponse(request, response)`: Handles the response from the payment gateway.
*   `server/model/productSchema.js`:
    *   **Purpose:** Defines the Mongoose schema for the `Product` model.
*   `server/model/userSchema.js`:
    *   **Purpose:** Defines the Mongoose schema for the `User` model.
*   `server/database/db.js`:
    *   **Purpose:** Handles the connection to the MongoDB database.
    *   **Important Functions/Modules:**
        *   `Connection()`: Establishes the connection to MongoDB.

## New Features Added

*   **Improved Error Handling:** Enhanced error handling in server-side controllers for more robust responses.

## Features Removed

*   No significant features were removed; focus was on refactoring and improving existing functionality.

## Author

Built by Athar. UI cloned for learning only.
