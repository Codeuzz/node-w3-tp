# node-w3-tp

### Overview

This API requires authentication via a login to get an access token (stored in an HTTP-only cookie) before accessing protected routes.

---

### 1. Login

**Endpoint:**  
`POST http://localhost:8000/login`

**Request Body (JSON):**

```json
{
  "email": "admin@example.com",
  "password": "supersecret"
}
```

### 2. Access the routes

**Endpoints:**

- `GET http://localhost:8000/materials`
- `GET http://localhost:8000/realisation`
- `POST http://localhost:8000/realisation`
- `PUT http://localhost:8000/updateRealisation`

### 3. Using Cookies for Authentication

- After logging in, the server sets an HTTP-only cookie named `accessToken`.
- Your HTTP client (browser, Postman, etc.) must include this cookie in subsequent requests to access protected endpoints.
- **In Postman:** Use the "Cookies" tab to ensure the `accessToken` cookie is sent with your requests.
- **In browser:** Cookies are handled automatically.

---

### 6. Logging out

You can then log out with the following
**Endpoint:**  
`POST http://localhost:8000/logout`
