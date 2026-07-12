# 👨‍💼 Employee Management System

## Overview

The **Employee Management System** is a full-stack web application developed using **Java Spring Boot**, **React.js**, and **MySQL**. It allows users to efficiently manage employee records by performing CRUD operations such as adding, viewing, updating, deleting, searching, and sorting employees. This project demonstrates RESTful API development, frontend-backend integration, and database management using Spring Data JPA.

---

## Features

### Employee Management
- Add a new employee
- View all employees
- Update employee details
- Delete an employee
- Search employees by name
- Sort employees by name, salary, or department

### Dashboard
- Display total number of employees
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
EmployeeManagementSystem
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

### Employee APIs

- GET `/employees`
- GET `/employees/{id}`
- POST `/employees`
- PUT `/employees/{id}`
- DELETE `/employees/{id}`
- GET `/employees/search?keyword=John`
- GET `/employees/sort?field=name`

---

# How to Run the Project

## Prerequisites

Make sure the following software is installed:

- Java 21 or above
- Maven
- Node.js
- MySQL Server
- Git

---

## Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/employee-management-system.git
```

Navigate to the project directory:

```bash
cd employee-management-system
```

---

## Step 2: Create the Database

```sql
CREATE DATABASE employee_db;
```

---

## Step 3: Configure Backend

Update the `application.properties` file:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
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
4. Add employee records.
5. View all employees.
6. Search employees by name.
7. Sort employees by different fields.
8. Update or delete employee records.

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
- Search Functionality
- Sorting using Spring Data JPA
- Responsive UI with Bootstrap
- Frontend and Backend Integration

---

## Future Enhancements

- Employee Authentication & Authorization
- Role-Based Access Control
- Profile Image Upload
- Pagination
- Export Employee Data to Excel/PDF
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

⭐ **If you found this project useful, consider giving it a star on GitHub!**