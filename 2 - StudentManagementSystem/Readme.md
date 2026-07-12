# 🎓 Student Management System

## Overview

The **Student Management System** is a full-stack web application developed using **Java Spring Boot**, **React.js**, and **MySQL**. It provides an efficient way to manage student records by performing CRUD operations such as adding, viewing, updating, deleting, and searching students. This project demonstrates RESTful API development, frontend-backend integration, and database management using Spring Data JPA.

---

## Features

### Student Management
- Add a new student
- View all students
- Update student details
- Delete a student
- Search students by name
- View complete student information

### Dashboard
- Display total number of students
- Responsive and user-friendly interface

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

## Project Structure

```
StudentManagementSystem
│
├── backend
│   ├── controller
│   ├── entity
│   ├── repository
│   ├── service
│   ├── resources
│   └── StudentManagementSystemApplication.java
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

### Student APIs

- GET `/students`
- GET `/students/{id}`
- POST `/students`
- PUT `/students/{id}`
- DELETE `/students/{id}`
- GET `/students/search?keyword=John`

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
git clone https://github.com/your-username/student-management-system.git
```

Navigate to the project directory:

```bash
cd student-management-system
```

---

## Step 2: Create the Database

```sql
CREATE DATABASE student_db;
```

---

## Step 3: Configure Backend

Update the `application.properties` file:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/student_db
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

## Step 4: Run the Backend

Navigate to the backend folder:

```bash
cd backend
```

Run the Spring Boot application:

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

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm run dev
```

Frontend URL:

```
http://localhost:5173
```

---

## Application Workflow

1. Start the backend server.
2. Start the React frontend.
3. Open `http://localhost:5173`.
4. Add new student records.
5. View all students.
6. Search students by name.
7. Edit student information.
8. Delete student records when required.

---

## Learning Outcomes

This project helped in understanding:

- Spring Boot REST API Development
- CRUD Operations
- React Routing
- Axios API Integration
- MySQL Database Connectivity
- Spring Data JPA
- Hibernate ORM
- Search Functionality
- Frontend and Backend Integration
- Responsive UI Design with Bootstrap

---

## Future Enhancements

- Student Login & Authentication
- Role-Based Access Control
- Student Profile Photo Upload
- Pagination
- Sorting
- Export Student Data to Excel/PDF
- Dashboard Analytics
- Email Notifications
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

⭐ **If you found this project useful, don't forget to give it a Star on GitHub!**