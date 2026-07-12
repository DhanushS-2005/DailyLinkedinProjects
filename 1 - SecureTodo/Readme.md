# ✅ Secure Todo Application

## Overview

The **Secure Todo Application** is a full-stack web application developed using **Java Spring Boot**, **React.js**, and **MySQL**. It enables users to securely manage their daily tasks with authentication and authorization. Users can register, log in, and perform CRUD operations on their personal todo items. The project demonstrates secure REST API development using **Spring Security** and **JWT Authentication**, along with frontend-backend integration.

---

## Features

### User Authentication
- User Registration
- User Login
- JWT Authentication
- Password Encryption using BCrypt
- Secure Protected APIs

### Todo Management
- Add a new task
- View all tasks
- Update task details
- Delete a task
- Mark task as Completed/Pending
- Search tasks by title

### Dashboard
- Total Tasks
- Completed Tasks
- Pending Tasks

---

## Technologies Used

### Frontend
- React.js
- React Router DOM
- Axios
- Bootstrap 5

### Backend
- Java
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA
- Hibernate
- Maven

### Database
- MySQL

### Development Tools
- IntelliJ IDEA
- VS Code
- MySQL Workbench
- Postman
- Git & GitHub

---

## Project Structure

```
SecureTodoApplication
│
├── backend
│   ├── config
│   ├── controller
│   ├── entity
│   ├── repository
│   ├── security
│   ├── service
│   ├── util
│   └── resources
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   ├── App.jsx
│   └── main.jsx
│
└── README.md
```

---

## REST API Endpoints

### Authentication APIs

- POST `/api/auth/register`
- POST `/api/auth/login`

### Todo APIs

- GET `/api/todos`
- GET `/api/todos/{id}`
- POST `/api/todos`
- PUT `/api/todos/{id}`
- DELETE `/api/todos/{id}`
- GET `/api/todos/search?keyword=task`

---

# How to Run the Project

## Prerequisites

Before running the project, ensure the following software is installed:

- Java 21 or above
- Maven
- Node.js
- MySQL Server
- Git

---

## Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/secure-todo-application.git
```

Navigate to the project folder.

```bash
cd secure-todo-application
```

---

## Step 2: Create the Database

```sql
CREATE DATABASE secure_todo_db;
```

---

## Step 3: Configure Backend

Update the `application.properties` file.

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/secure_todo_db
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

jwt.secret=your-secret-key
jwt.expiration=86400000
```

---

## Step 4: Run the Backend

Navigate to the backend directory.

```bash
cd backend
```

Run the Spring Boot application.

```bash
mvn spring-boot:run
```

Or run the main application class from IntelliJ IDEA.

Backend URL:

```
http://localhost:8080
```

---

## Step 5: Run the Frontend

Open another terminal.

Navigate to the frontend directory.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start the React application.

```bash
npm run dev
```

Frontend URL:

```
http://localhost:5173
```

---

## Application Workflow

1. Register a new user account.
2. Log in using your credentials.
3. Receive a JWT token after successful authentication.
4. Access protected Todo APIs.
5. Create new tasks.
6. View all tasks.
7. Update task details or mark tasks as completed.
8. Delete completed or unwanted tasks.
9. Search tasks by title.

---

## Learning Outcomes

This project helped in understanding:

- Spring Security
- JWT Authentication
- User Registration & Login
- Password Encryption (BCrypt)
- Secure REST APIs
- CRUD Operations
- React Routing
- Axios API Integration
- MySQL Database Connectivity
- Spring Data JPA
- Hibernate ORM
- Authentication & Authorization
- Responsive UI using Bootstrap

---

## Future Enhancements

- Email Verification
- Forgot Password & Reset Password
- Refresh Token Authentication
- User Profile Management
- Task Categories
- Due Date & Reminders
- Priority Levels
- Pagination & Sorting
- Dark Mode
- Docker Deployment
- CI/CD Pipeline
- Cloud Deployment (AWS/Azure)

---

## Developed By

**Dhanush S**

Java Full Stack Developer

### Connect With Me

- GitHub: https://github.com/DhanushS-2005
- LinkedIn: https://www.linkedin.com/in/dhanush-s-b9887b301/

---

⭐ **If you found this project useful, consider giving it a Star on GitHub!**