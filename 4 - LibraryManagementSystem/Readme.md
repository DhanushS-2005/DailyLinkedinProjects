# 📚 Library Management System

## Overview

The **Library Management System** is a full-stack web application developed using **Java Spring Boot**, **React.js**, and **MySQL**. The application enables users to manage authors and books through an intuitive interface while demonstrating **One-to-Many** and **Many-to-One** entity relationships using Spring Data JPA and Hibernate. It is designed as a learning project to understand CRUD operations, RESTful APIs, entity mapping, and frontend-backend integration.

---

## Features

### Author Management
- Add a new author
- View all authors
- Update author details
- Delete an author

### Book Management
- Add a new book
- View all books
- Update book details
- Delete a book
- Search books by title

### Dashboard
- Display total number of authors
- Display total number of books

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

## Entity Relationship

This project demonstrates the following JPA relationships:

- One Author can have multiple Books (`@OneToMany`)
- Multiple Books belong to one Author (`@ManyToOne`)

---

## Project Structure

```
LibraryManagementSystem
│
├── backend
│   ├── controller
│   ├── entity
│   ├── repository
│   ├── service
│   └── resources
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   └── App.jsx
│
└── README.md
```

---

## REST API Endpoints

### Author APIs

- GET `/authors`
- GET `/authors/{id}`
- POST `/authors`
- PUT `/authors/{id}`
- DELETE `/authors/{id}`

### Book APIs

- GET `/books`
- GET `/books/{id}`
- POST `/books`
- PUT `/books/{id}`
- DELETE `/books/{id}`
- GET `/books/search?keyword=bookname`

---

# How to Run the Project

## Prerequisites

Before running the project, make sure the following software is installed:

- Java 21 or above
- Maven
- Node.js
- MySQL Server
- Git

---

## Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/library-management-system.git
```

Move into the project directory:

```bash
cd library-management-system
```

---

## Step 2: Create the Database

Open MySQL and execute:

```sql
CREATE DATABASE library_db;
```

---

## Step 3: Configure Backend

Open the backend project and update the `application.properties` file.

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/library_db
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

## Step 4: Run the Backend

Navigate to the backend folder.

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

Navigate to the frontend folder.

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

## Sample Login Flow

1. Start the backend server.
2. Start the React frontend.
3. Open `http://localhost:5173`.
4. Add authors.
5. Add books by selecting an author.
6. View, edit, delete, and search books.

---

## Learning Outcomes

This project helped in understanding:

- Spring Boot REST APIs
- CRUD Operations
- React Routing
- Axios API Integration
- MySQL Database Connectivity
- Spring Data JPA
- Hibernate ORM
- Entity Relationships
- One-to-Many Mapping
- Many-to-One Mapping
- Search Functionality
- Responsive UI using Bootstrap

---

## Future Enhancements

- User Authentication using Spring Security
- JWT Authentication
- Book Borrow and Return Module
- Fine Calculation
- Pagination
- Sorting
- Dashboard Analytics
- Docker Deployment
- Cloud Deployment

---

## Developed By

**Dhanush S**

Java Full Stack Developer

### Connect With Me

- GitHub: https://github.com/DhanushS-2005
- LinkedIn: https://www.linkedin.com/in/dhanush-s-b9887b301/

---

⭐ **If you found this project useful, don't forget to star the repository!**