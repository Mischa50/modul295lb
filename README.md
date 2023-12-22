# Modul 295 Prüfung

**Author:** Mischa Barmettler

## Endpoints

### 1. List all tasks

- **URL:** `/tasks`
- **Method:** `GET`
- **Authentication:** Required
- **Description:** Retrieves a list of all tasks.

### 2. Add a new task

- **URL:** `/tasks`
- **Method:** `POST`
- **Authentication:** Required
- **Description:** Adds a new task to the list.

### 3. Get task by ID

- **URL:** `/tasks/:taskID`
- **Method:** `GET`
- **Authentication:** Required
- **Description:** Retrieves details of a specific task by its ID.

### 4. Update task by ID

- **URL:** `/tasks/:taskID`
- **Method:** `PATCH`
- **Authentication:** Required
- **Description:** Updates details of a specific task by its ID.

### 5. Delete task by ID

- **URL:** `/tasks/:taskID`
- **Method:** `DELETE`
- **Authentication:** Required
- **Description:** Deletes a specific task by its ID.

### 6. User Login

- **URL:** `/login`
- **Method:** `POST`
- **Authentication:** Not Required
- **Description:** Logs in a user with valid credentials.

### 7. Verify User Login

- **URL:** `/verify`
- **Method:** `GET`
- **Authentication:** Required
- **Description:** Verifies if a user is logged in.

### 8. User Logout

- **URL:** `/logout`
- **Method:** `DELETE`
- **Authentication:** Required
- **Description:** Logs out the currently logged-in user.
