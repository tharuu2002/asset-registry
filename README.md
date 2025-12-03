# Simple Asset Registry System  
A simple and clean **Asset Registry Web Application** built using:

- **Node.js + Express** (Backend API)
- **React.js** (Frontend)
- **PostgreSQL** (Database)

This project allows users to add, track, and manage **software** and **hardware** assets with a confirmation workflow and real-time UI updates.

---

## 📸 Screenshot  
*(Place your screenshot file in the project root so it appears below the README.)*

---

## Features

### Asset Management
- Add new assets easily through a clean UI  
- Choose asset category: **Software** or **Hardware**  
- Form fields adapt dynamically based on selected category  
- Confirmation popup before saving asset  
- Newly added assets instantly appear at the **top of the list**

### Status Indicators
- Assets marked **Active → shown in Green**  
- Assets marked **Inactive → shown in Red**

### Backend API
- REST API built with Node.js + Express
- PostgreSQL database for persistence

---

## Tech Stack

**Frontend:** React.js, Axios  
**Backend:** Node.js, Express.js  
**Database:** PostgreSQL  
**ORM / Query Tool:** (Add if used: Sequelize / Prisma / Knex / pg library)

---

## Project Structure

asset-registy/
├── client/ 
│ ├── node_modules/
│ ├── public/
│ ├── src/
│ ├── .gitignore
│ ├── eslint.config.js
│ ├── index.html
│ ├── package-lock.json
│ ├── package.json
│ ├── README.md
│ └── vite.config.js
│
├── server/ # Node.js Backend (Express API)
│ ├── node_modules/
│ ├── .env
│ ├── db.js 
│ ├── index.js 
│ ├── package-lock.json
│ ├── package.json
│ └── README.md
│
├── Screenshot.png
└── README.md 

