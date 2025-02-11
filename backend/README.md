# Backend API Documentation

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




## Endpoint: `/user/login`

### Description
This endpoint is used to log in an existing user. It validates the input data, checks if the user exists, compares the password, and returns a JWT token along with the user data.

### Method
`POST`

### Request Body
The request body should be a JSON object containing the following fields:
- `email`: A valid email address.
- `password`: A string with at least 6 characters.

#### Example
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response
The response will be a JSON object containing the JWT token and the user data.

#### Success Response
- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzlkYjBkNzhhYTAzMDgxOTdhMjIzNTAiLCJpYXQiOjE3MzgzODc2NzF9.Xw7_zLCYA7ZkbOwB3KS_8oIwJTNFfDC_LTPZUTmQXjQ",
    "user": {
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "password": "$2b$10$/AQlAQo32x7Sw/aq3v4OouWbjp.ZlzKosEZA1S3DZmGvpWHNmu4pi",
      "_id": "679db0d78aa0308197a22350",
      "__v": 0
    }
  }
  ```

#### Error Responses
- **Status Code**: `400 Bad Request`
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
          "msg": "password must be at least 6 characters",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```
- **Status Code**: `401 Unauthorized`
  - **Body**:
    ```json
    {
      "msg": "invalid email or password"
    }
    ```

### Notes
- Ensure that the `Content-Type` header is set to `application/json` when making the request.
- The password is compared in a hashed format for security reasons.


## Endpoint: `/user/profile`

### Description
This endpoint is used to get the profile of the logged-in user. It requires authentication.

### Method
`GET`

### Response
The response will be a JSON object containing the user data.

#### Success Response
- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "user": {
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "_id": "679db0d78aa0308197a22350",
      "__v": 0
    }
  }
  ```

#### Error Responses
- **Status Code**: `401 Unauthorized`
  - **Body**:
    ```json
    {
      "msg": "Unauthorized"
    }
    ```

### Notes
- Ensure that the `Authorization` header is set to `Bearer <token>` when making the request.

## Endpoint: `/user/logout`

### Description
This endpoint is used to log out the user. It clears the JWT token from the cookies and blacklists the token.

### Method
`GET`

### Response
The response will be a JSON object confirming the logout.

#### Success Response
- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "msg": "Logged Out"
  }
  ```

### Notes
- Ensure that the `Authorization` header is set to `Bearer <token>` when making the request.



## Endpoint: `/captain/register`

### Description
This endpoint is used to register a new captain. It validates the input data, checks if the captain already exists, hashes the password, creates the captain, and returns a JWT token along with the captain data.

### Method
`POST`

### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters.
  - `lastname`: A string with at least 3 characters.
- `email`: A valid email address.
- `password`: A string with at least 6 characters.
- `vehicle`: An object containing:
  - `color`: A string with at least 3 characters.
  - `plate`: A string with at least 3 characters.
  - `capacity`: A number representing the capacity.
  - `vehicleType`: A string that must be one of `car`, `motorcycle`, or `auto`.

#### Example
```json
{
  "fullname": {
    "firstname": "Hardy",
    "lastname": "Lawrence"
  },
  "email": "hardy@example.com",
  "password": "passwo..",
  "vehicle": {
    "color": "red",
    "plate": "MP 04 XY 5665",
    "capacity": 3,
    "vehicleType": "car"
  }
}
```

### Response
The response will be a JSON object containing the JWT token and the captain data.

#### Success Response
- **Status Code**: `201 Created`
- **Body**:
  ```json
  {
    "token": "eyJhb.....",
    "captain": {
      "fullname": {
        "firstname": "Haddy",
        "lastname": "Lawrence"
      },
      "email": "haddy@example.com",
      "password": "$2b$10$1Eb.N....",
      "status": "inactive",
      "vehicle": {
        "color": "red",
        "plate": "MP 04 XY 5665",
        "capacity": 3,
        "vehicleType": "car"
      },
      "_id": "679f88a15...",
      "__v": 0
    }
  }
  ```

#### Error Responses
- **Status Code**: `400 Bad Request`
  - **Body**:
    ```json
    {
      "msg": "captain already exist"
    }
    ```
- **Status Code**: `401 Unauthorized`
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "firstname must be at least 3 character",
          "param": "fullname.firstname",
          "location": "body"
        },
        {
          "msg": "password must be at least 6 character",
          "param": "password",
          "location": "body"
        },
        {
          "msg": "color must be at least 3 character",
          "param": "vehicle.color",
          "location": "body"
        },
        {
          "msg": "plate must be at least 3 character",
          "param": "vehicle.plate",
          "location": "body"
        },
        {
          "msg": "capacity must be at least 1 character",
          "param": "vehicle.capacity",
          "location": "body"
        },
        {
          "msg": "vehicle must be at least 3 character",
          "param": "vehicle.vehicleType",
          "location": "body"
        }
      ]
    }
    ```
    or
    ```json
    {
      "err": "unable to create captain"
    }
    ```

### Notes
- Ensure that the `Content-Type` header is set to `application/json` when making the request.
- The password is stored in a hashed format for security reasons.


## Endpoint: `/captain/login`

### Description
This endpoint is used to log in an existing captain. It validates the input data, checks if the captain exists, compares the password, and returns a JWT token along with the captain data.

### Method
`POST`

### Request Body
The request body should be a JSON object containing the following fields:
- `email`: A valid email address.
- `password`: A string with at least 6 characters.

#### Example
```json
{
  "email": "haddy@example.com",
  "password": "password123"
}
```

### Response
The response will be a JSON object containing the JWT token and the captain data.

#### Success Response
- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "token": "eyJhbGciOiJIU...",
    "captain": {
      "fullname": {
        "firstname": "Haddy",
        "lastname": "Lawrence"
      },
      "email": "haddy@example.com",
      "password": "$2b$10$...",
      "status": "inactive",
      "vehicle": {
        "color": "red",
        "plate": "MP 04 XY 5665",
        "capacity": 3,
        "vehicleType": "car"
      },
      "_id": "679f88a15...",
      "__v": 0
    }
  }
  ```

#### Error Responses
- **Status Code**: `400 Bad Request`
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid email",
          "param": "email",
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
- **Status Code**: `401 Unauthorized`
  - **Body**:
    ```json
    {
      "msg": "invalid email or password"
    }
    ```

### Notes
- Ensure that the `Content-Type` header is set to `application/json` when making the request.
- The password is compared in a hashed format for security reasons.

## Endpoint: `/captain/getCaptain`

### Description
This endpoint is used to get the profile of the logged-in captain. It requires authentication token.

### Method
`GET`

### Response
The response will be a JSON object containing the captain data.

#### Success Response
- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "captain": {
      "fullname": {
        "firstname": "Haddy",
        "lastname": "Lawrence"
      },
      "email": "haddy@example.com",
      "status": "inactive",
      "vehicle": {
        "color": "red",
        "plate": "MP 04 XY 5665",
        "capacity": 3,
        "vehicleType": "car"
      },
      "_id": "679f88a1526db...",
      "__v": 0
    }
  }
  ```

#### Error Responses
- **Status Code**: `401 Unauthorized`
  - **Body**:
    ```json
    {
      "msg": "Unauthorized"
    }
    ```

### Notes
- Ensure that the `Authorization` header is set to `Bearer <token>` when making the request.

## Endpoint: `/captain/logout`

### Description
This endpoint is used to log out the captain. It clears the JWT token from the cookies and blacklists the token.

### Method
`GET`

### Response
The response will be a JSON object confirming the logout.

#### Success Response
- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "msg": "Logged Out"
  }
  ```

### Notes
- Ensure that the `Authorization` header is set to `Bearer <token>` when making the request.