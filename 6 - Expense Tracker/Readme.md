# 💰 Expense Tracker

A full-stack Expense Tracker application built using **React.js**, **Spring Boot**, and **MySQL**. It helps users manage daily expenses with an interactive dashboard, analytics, and charts.

---

## 🚀 Features

- ➕ Add Expense
- 📋 View All Expenses
- ✏️ Update Expense
- ❌ Delete Expense
- 🔍 Search Expenses by Title
- 📂 Filter by Category
- 📅 Filter by Date
- 📆 Filter by Date Range
- 📊 Dashboard Summary
- 🥧 Category-wise Pie Chart
- 📈 Monthly Expense Bar Chart
- 📉 Expense Trend Line Chart
- 📱 Responsive UI

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Bootstrap 5
- Chart.js
- React ChartJS 2
- React Toastify

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL
- Maven
- Lombok

### Database
- MySQL

---

## 📂 Project Structure

```
ExpenseTracker
│
├── ExpenseTrackerBackend
│   ├── controller
│   ├── dto
│   ├── entity
│   ├── repository
│   ├── service
│   ├── serviceImpl
│   └── resources
│
└── ExpenseTrackerFrontend
    ├── components
    ├── pages
    ├── services
    ├── assets
    └── App.jsx
```

---

## ⚙️ Backend Setup

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/ExpenseTracker.git
```

### 2. Open Backend

```bash
cd ExpenseTrackerBackend
```

### 3. Create Database

```sql
CREATE DATABASE expense_tracker;
```

### 4. Configure Database

Update `application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/expense_tracker
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 5. Run Backend

Using IntelliJ IDEA

Run

```
ExpenseTrackerBackendApplication.java
```

or using Maven

```bash
mvn spring-boot:run
```

Backend runs on

```
http://localhost:8080
```

---

## 💻 Frontend Setup

### Open Frontend Folder

```bash
cd ExpenseTrackerFrontend
```

### Install Dependencies

```bash
npm install
```

### Install Required Packages

```bash
npm install axios react-router-dom bootstrap react-toastify chart.js react-chartjs-2
```

### Start React App

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## 📡 API Endpoints

### Expense APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/expenses` | Get All Expenses |
| GET | `/expenses/{id}` | Get Expense By ID |
| POST | `/expenses` | Add Expense |
| PUT | `/expenses/{id}` | Update Expense |
| DELETE | `/expenses/{id}` | Delete Expense |
| GET | `/expenses/search?title=` | Search Expense |
| GET | `/expenses/category/{category}` | Filter by Category |
| GET | `/expenses/date` | Filter by Date |
| GET | `/expenses/date-range` | Filter by Date Range |

---

### Dashboard APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/dashboard/summary` | Dashboard Summary |
| GET | `/dashboard/category` | Pie Chart Data |
| GET | `/dashboard/monthly` | Bar Chart Data |

---

## 📊 Dashboard

The dashboard provides:

- Total Expense
- Total Transactions
- Category-wise Expense Analysis
- Monthly Expense Analysis
- Expense Trend Analysis

---

## 📷 Screenshots

Add your screenshots here.

```
assets/
├── dashboard.png
├── expense-list.png
├── add-expense.png
├── charts.png
```

---

## 🎯 Future Enhancements

- User Authentication
- Expense Budget Management
- Export Reports (PDF/Excel)
- Dark Mode
- Expense Categories Management
- Income Tracking
- Monthly Budget Alerts

---

## 👨‍💻 Author

**Dhanush S**

- GitHub: https://github.com/DhanushS-2005
- LinkedIn: https://www.linkedin.com/in/dhanush-s

---

## ⭐ Support

If you like this project, don't forget to **Star ⭐ the repository**.