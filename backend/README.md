# User Registration API

## Endpoint: `/user/register`

### Description
This endpoint is used to register a new user. It validates the input data, checks if the user already exists, hashes the password, creates the user, and returns a JWT token along with the user data.

### Method
`POST`

### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters.
  - `lastname`: A string with at least 3 characters.
- `email`: A valid email address.
- `password`: A string with at least 6 characters.

#### Example
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response
The response will be a JSON object containing the JWT token and the user data.

#### Success Response
- **Status Code**: `201 Created`
- **Body**:
  ```json
  {
    "token": "eyJhbGciO....",
    "user": {
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "password": "$2b$1....",
      "_id": "67",
      "__v": 0
    }
  }
  ```

#### Error Responses
- **Status Code**: `400 Bad Request`
  - **Body**:
    ```json
    {
      "msg": "user already exist"
    }
    ```
- **Status Code**: `401 Unauthorized`
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "FirstName must be have at least 3 characters",
          "param": "fullname.firstname",
          "location": "body"
        },
        {
          "msg": "password must be at least 6 characters",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```
    or
    ```json
    {
      "err": "unable to create user"
    }
    ```

### Notes
- Ensure that the `Content-Type` header is set to `application/json` when making the request.
- The password is stored in a hashed format for security reasons.