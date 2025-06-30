# Red Teamer Interactive Prompting Site

This is a simple web application that allows users to interact with the Gemini API. It's designed for prompt engineering and red teaming exercises. The site logs all submitted prompts to a MongoDB database for analysis.

## Features

-   Frontend to send prompts to Google's Gemini API.
-   Backend Express server to securely handle API requests.
-   Logs all prompts, variations, timestamps, and IP addresses to a MongoDB database.
-   A `/logs.html` page to view the submitted prompts.

## Setup

1.  **Navigate to the project directory:**
    ```bash
    cd red-teamer-interactive-prompting
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Create a `.env` file** in the root directory. Copy the content from `.env.example` and fill in your details:
    -   `GEMINI_API_KEY`: Your API key from Google AI Studio.
    -   `MONGO_URI`: Your MongoDB connection string.

4.  **Start the server:**
    ```bash
    node server.js
    ```

5.  Open your browser and navigate to `http://localhost:3000`. To view logs, go to `http://localhost:3000/logs.html`. 