Sure, Vishal! Here's a **cleaned up and professional version** of your `README.md`. I’ve:

* Removed unnecessary `---`, stars `*`, and extra hashtags
* Added **clear section headings**
* Improved spacing and formatting
* Made sure it's scannable and easy for others to understand

---

```markdown
# Node.js Authentication API

A secure and scalable authentication system built with **Node.js**, **Express.js**, **MongoDB**, and **JWT**. It supports user registration, login, and access to protected routes using token-based authentication.

## Features

- User Registration & Login
- JWT-based Authentication
- Password Hashing with Bcrypt
- Protected Routes
- Environment-based Configuration

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT, bcrypt
- **Utilities:** dotenv, nodemon
- **Testing:** Postman

## Project Structure

```

node-auth-api/
│
├── controllers/       → Registration and login logic
├── models/            → Mongoose user schema
├── middleware/        → JWT authentication middleware
├── routes/            → API route definitions
├── config/            → Database connection setup
├── .env               → Environment variables
├── server.js          → App entry point
└── package.json       → Dependencies and scripts

```

## API Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| POST   | `/api/register`  | Register a new user      |
| POST   | `/api/login`     | Login and receive token  |
| GET    | `/api/profile`   | Access user profile info |

> ⚠️ Protected routes require the header:  
> `Authorization: Bearer <token>`

## Environment Variables

Create a `.env` file at the root of the project:

```

PORT=5000
MONGODB\_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/authDB
JWT\_SECRET=your\_jwt\_secret\_key

````

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/node-auth-api.git
cd node-auth-api
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

Create a `.env` file and add your MongoDB URI and JWT secret.

### 4. Start the Development Server

```bash
npm run dev
```

## Sample Request

**POST** `/api/login`

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user_id",
    "email": "user@example.com"
  }
}
```

## Future Enhancements

* Refresh Token Support
* Forgot / Reset Password Flow
* Email Verification
* OAuth (Google, GitHub) Login
* Role-based Access Control

## License

Licensed under the [MIT License](LICENSE).

## Author

Developed with ❤️ by [Vishal Singh](https://github.com/thevishingh)

```

---

Let me know if you’d like to add badges, a live demo link, or API docs using Swagger.
```
