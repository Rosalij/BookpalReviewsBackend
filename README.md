This project is the backend service for the Library Review web application. It provides REST API endpoints for managing user reviews and retrieving book information. The backend connects to a MongoDB database for storing user and review data and integrates with the Google Books API to fetch book details.

The server is built with Node.js and Express and is designed to support the React frontend by delivering review data and book metadata.

# Technologies Used

Node.js
Express.js
MongoDB
Mongoose
Google Books API
dotenv for environment variables
Bcrypt
JsonWebToken

## Authentication

User registration with encrypted passwords

User login with JWT authentication

Token validation for protected routes


## Database Models
# User
The User model stores account information and relationships between users.

Fields:
username – Unique username for the user
email – Unique email address
password – Hashed password used for authentication
role – User role (default: "user")
savedUsers – Array of references to other users for quick access
createdAt – Timestamp when the user account was created
updatedAt – Timestamp when the user account was last updated

# Review
The Review model stores user reviews for books.

Fields:
bookId – Google Books volume ID
user – Reference to the user who wrote the review
reviewText – Text content of the review
rating – Rating from 1 to 5
createdAt – Timestamp when the review was created
updatedAt – Timestamp when the review was last updated
