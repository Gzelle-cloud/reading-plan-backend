# Reading Plan Backend

This repository contains the backend for the Reading Plan application. The backend handles API requests for managing books, categories, and user data.

## Features

- **Get All Books**: Fetches all books stored in the database.
- **Add Book**: Allows users to add a new book with a title and category.
- **Edit Book**: Allows users to update a book's title and category.
- **Delete Book**: Allows users to delete a book by its ID.

## Installation

1. Clone the repository:
   git clone https://github.com/Gzelle-cloud/reading-plan-backend.git
2. Navigate to the project directory:
   cd reading-plan-backend
3. Install dependencies:
   npm install
5. Set up environment variables. Create a .env file in the root directory and add the necessary variables.
6. Run the server:
   npm start

## API Endpoints
#### GET /: Returns all books stored in the database.
#### POST /savebooks: Adds a new book. Expects a JSON body with the title and category fields.
#### PUT /editBook: Updates an existing book. Expects a JSON body with _id, title, and category fields.
#### DELETE /deleteBook: Deletes a book by its _id.

## Technologies Used
#### Node.js: JavaScript runtime for the server.
#### Express.js: Web framework for building the API.
#### MongoDB: Database for storing book data.
#### Axios: HTTP client for making API requests from the frontend.
   
## License

This project is open-source and available under the [MIT License](LICENSE).
