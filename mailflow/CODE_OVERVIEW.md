# CODE_OVERVIEW.md for MailFlow

This document provides a brief overview of the key files and functions within the MailFlow project.

## Major Files and Their Purpose

### Client-side (`client/`)

*   `client/src/App.js`:
    *   **Purpose:** The root component that sets up the application structure and routing.
*   `client/src/components/Emails.jsx`:
    *   **Purpose:** Displays a list of emails based on the selected type (inbox, starred, etc.).
    *   **Important Functions/Modules:**
        *   `useEffect`: Fetches emails when the `type` or `starredEmail` state changes.
        *   `selectAllEmails(e)`: Handles selecting/deselecting all emails.
        *   `deleteSelectedEmails()`: Moves selected emails to the bin or permanently deletes them.
        *   `toggleReadSelectedEmails(value)`: Marks selected emails as read or unread.
*   `client/src/components/ComposeMail.jsx`:
    *   **Purpose:** Provides the interface for composing and sending new emails.
    *   **Important Functions/Modules:**
        *   `sendEmail()`: Sends the composed email to the server.
*   `client/src/utils/api.js`:
    *   **Purpose:** Centralized module for making API calls to the backend.
    *   **Important Functions/Modules:**
        *   `API_ATHARMAIL(serviceUrlObject, requestData, type)`: Generic function for making API requests.
*   `client/src/utils/api.urls.js`:
    *   **Purpose:** Defines the URL paths and HTTP methods for all API endpoints.

### Server-side (`server/`)

*   `server/index.js`:
    *   **Purpose:** The main server file, responsible for setting up the Express app, middleware, and database connection.
*   `server/routes/route.js`:
    *   **Purpose:** Defines the API routes and links them to the corresponding controller functions.
    *   **Important Functions/Modules:**
        *   `routes.post('/save', saveSendEmails)`: Route for saving and sending emails.
        *   `routes.get('/emails/:type', getEmails)`: Route for fetching emails by type.
        *   `routes.post('/starred', toggleStarredEmail)`: Route for starring/unstarring emails.
        *   `routes.post('/read', toggleReadEmails)`: Route for marking emails as read/unread.
        *   `routes.delete('/delete', deleteEmails)`: Route for deleting emails.
        *   `routes.post('/bin', moveEmailsToBin)`: Route for moving emails to the bin.
*   `server/controller/email-controller.js`:
    *   **Purpose:** Contains the logic for handling email operations.
    *   **Important Functions/Modules:**
        *   `saveSendEmails(request, response)`:
            *   **Inputs:** Email data from the request body.
            *   **Outputs:** Success or error message.
            *   **Side Effects:** Saves a new email document to the database.
        *   `getEmails(request, response)`:
            *   **Inputs:** Email type from request parameters.
            *   **Outputs:** List of emails or error message.
        *   `toggleStarredEmail(request, response)`:
            *   **Inputs:** Email ID and starred status.
            *   **Outputs:** Success or error message.
            *   **Side Effects:** Updates the `starred` status of an email in the database.
        *   `toggleReadEmails(request, response)`:
            *   **Inputs:** Email IDs and read status.
            *   **Outputs:** Success or error message.
            *   **Side Effects:** Updates the `read` status of emails in the database.
        *   `deleteEmails(request, response)`:
            *   **Inputs:** Email IDs.
            *   **Outputs:** Success or error message.
            *   **Side Effects:** Deletes emails from the database.
        *   `moveEmailsToBin(request, response)`:
            *   **Inputs:** Email IDs.
            *   **Outputs:** Success or error message.
            *   **Side Effects:** Moves emails to the bin by updating their `bin` status.
*   `server/schemas/email.js`:
    *   **Purpose:** Defines the Mongoose schema for the `Email` model, including fields like `to`, `from`, `subject`, `body`, `date`, `starred`, `bin`, `type`, and `read`.
*   `server/utils/db.js`:
    *   **Purpose:** Handles the connection to the MongoDB database.
    *   **Important Functions/Modules:**
        *   `connectDB()`: Establishes the connection to MongoDB.

## New Features Added

*   **Mark as Read/Unread:** Added functionality to mark selected emails as read or unread, with corresponding buttons in the UI.

## Features Removed

*   **"All Mail" Category:** The "All Mail" filtering option has been removed from the email categories, simplifying the available views.

## Author

Built by Athar. UI cloned for learning only.

## Built by Athar, UI cloned for learning only.
