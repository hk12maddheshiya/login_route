# login_route
Setup a login route with connected db postgreSQL with a ORM Prisma and returning a JWT

# Backend Project

## Description
This project is a backend setup using Node.js, Express.js, and Prisma. It includes authentication functionality and database integration.

## Prerequisites
Make sure you have the following installed on your system:
- Node.js
- npm (Node Package Manager)
- Prisma CLI

## Getting Started

### Step 1: Install Dependencies
Run the following command to install the required dependencies:
```bash
npm install
```

### Step 2: Generate Prisma Client
To generate the Prisma client, run:
```bash
npx prisma generate
```

### Step 3: Check Database
You can view and interact with your database using Prisma Studio:
```bash
npx prisma studio
```

### Step 4: Run the Application
Start the application by running:
```bash
node auth.js
```

## Features
- User authentication using JWT
- Prisma ORM for database operations
- Database visualization with Prisma Studio

## Commands Summary
| Command                   | Description                                |
|---------------------------|--------------------------------------------|
| `npm install`             | Install project dependencies              |
| `npx prisma generate`     | Generate Prisma client                    |
| `npx prisma studio`       | Open Prisma Studio to view the database   |
| `node auth.js`            | Start the backend server                  |



