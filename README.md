# Bookpal Reviews Backend
This project is the backend service for the Library Review web application. It provides REST API endpoints for managing user reviews and retrieving book information. The backend connects to a MongoDB database for storing user and review data and integrates with the Google Books API to fetch book details.

The server is built with Node.js and Express and is designed to support the React frontend by delivering review data and book metadata.

## Technologies Used

Node.js
Express.js
MongoDB
Mongoose
Google Books API
dotenv for environment variables
Bcrypt
JsonWebToken

### Authentication
- User registration with encrypted passwords
- User login with JWT authentication
- Token validation for protected routes

### Review Management
- Create and store book reviews
- Store ratings from 1–5
- Associate reviews with users
- Retrieve the latest reviews
- Retrieve reviews for a specific book


## Database Models
### User
The User model stores account information and relationships between users.
Fields:
username – Unique username for the user
email – Unique email address
password – Hashed password used for authentication
role – User role (default: "user")
savedUsers – Array of references to other users for quick access
createdAt – Timestamp when the user account was created
updatedAt – Timestamp when the user account was last updated

### Review
The Review model stores user reviews for books.
Fields:
bookId – Google Books volume ID
user – Reference to the user who wrote the review
reviewText – Text content of the review
rating – Rating from 1 to 5
createdAt – Timestamp when the review was created
updatedAt – Timestamp when the review was last updated

## API Endpoints

### Authentication

Register a new user

```
POST /api/auth/register
```

Login user

```
POST /api/auth/login
```

Validate user token

```
GET /api/auth/validate
```

---

### Users

Get all users

```
GET /api/users
```

Get user profile

```
GET /api/users/:id
```

Get reviews written by a user

```
GET /api/users/:id/reviews
```

Get saved users

```
GET /api/users/me/saved
```

Save a user

```
POST /api/users/:id/save
```

Remove saved user

```
DELETE /api/users/:id/save
```

---

### Reviews (CRUD)

Create a review

```
POST /api/reviews
```

Get reviews for a book

```
GET /api/reviews/:bookId
```

Get reviews written by the logged-in user

```
GET /api/reviews/my-reviews
```

Update a review

```
PUT /api/reviews/:id
```

Delete a review

```
DELETE /api/reviews/:id
```

Get latest reviews

```
GET /api/reviews/latest
```

---

### Books

Search books

```
GET /api/books/search
```

Get book details

```
GET /api/books/:bookId
```

Get average rating for a book

```
GET /api/books/rating/:bookId
```

