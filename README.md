# restaurant-management-react-springboot-jpa

A full-stack **Restaurant Management** application that allows administrators and staff to manage menu items, table reservations, orders, and customer information efficiently. Built using **React** for the frontend and **Spring Boot with JPA and MySQL** for the backend, the app is optimized for responsiveness and smooth data interaction.

---

## 📚 Overview
  
This system is designed for restaurant owners or staff to: 

- Manage menu items (CRUD) 
- Handle table bookings and customer information    
- Track and update order statuses    
- Maintain all data in a structured MySQL database   
- Use a clean, responsive UI for both desktop and mobile views

---

## 🛠️ Tech Stack

### Frontend
- **React.js** – Modern UI library
- **React Router** – Page navigation
- **Axios** – REST API integration
- **Tailwind CSS / Material UI** – UI styling
- **Context API / Redux (optional)** – State management

### Backend
- **Spring Boot** – Java-based REST API framework
- **Spring Data JPA** – ORM for database operations
- **MySQL** – Relational database for persistent storage
- **Lombok** – Boilerplate reduction for entities and services
- **Spring Security (optional)** – For user roles and authentication

---

## ✨ Features

- 🍽️ **Menu Management** – Add, edit, delete food & drink items
- 📅 **Table Reservation** – Book tables with date/time and customer details
- 📦 **Order Management** – Create, update, and complete customer orders
- 👥 **Customer Records** – View and manage customer info and order history
- 🔎 **Search & Filter** – Filter menu or orders by category or status
- 💾 **Persistent Storage** – All data is stored and retrieved from MySQL
- 📱 **Responsive UI** – Works on phones, tablets, and desktops

---

## 📁 Project Structure
```
Directory structure:
└── baladurgag24-restaurant-management-react-springboot-jpa/
    ├── README.md
    ├── LICENSE.txt
    ├── Backend/
    │   ├── mvnw
    │   ├── mvnw.cmd
    │   ├── pom.xml
    │   └── src/
    │       ├── main/
    │       │   ├── java/
    │       │   │   └── com/
    │       │   │       └── example/
    │       │   │           ├── Controller/
    │       │   │           │   └── RestaurantController.java
    │       │   │           ├── Demo/
    │       │   │           │   └── RestaurantApplication.java
    │       │   │           ├── Exception/
    │       │   │           │   └── RestaurantNotFoundException.java
    │       │   │           ├── Model/
    │       │   │           │   └── Restaurant.java
    │       │   │           ├── Repository/
    │       │   │           │   └── RestaurantRepository.java
    │       │   │           └── Service/
    │       │   │               └── RestaurantService.java
    │       │   └── resources/
    │       │       └── application.properties
    │       └── test/
    │           └── java/
    │               └── com/
    │                   └── example/
    │                       └── demo/
    │                           └── RestaurantApplicationTests.java
    └── Frontend/
        ├── package.json
        ├── public/
        │   ├── ab.avif
        │   ├── as.avif
        │   ├── bb.avif
        │   ├── index.html
        │   ├── manifest.json
        │   └── robots.txt
        └── src/
            ├── App.css
            ├── App.js
            ├── App.test.js
            ├── index.css
            ├── index.js
            ├── reportWebVitals.js
            ├── setupTests.js
            ├── layout/
            │   └── Navbar.js
            ├── pages/
            │   ├── Home.css
            │   ├── Home.js
            │   ├── login.css
            │   ├── login.js
            │   ├── Signup.css
            │   └── Signup.js
            └── users/
                ├── AddUser.css
                ├── AddUser.js
                ├── EditUser.css
                ├── EditUser.js
                ├── ViewUser.css
                └── ViewUser.js
```
