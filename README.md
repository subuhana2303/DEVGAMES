# 🕹️ DevGames — Real-Time Coding Duel Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Issues](https://img.shields.io/github/issues/subuhana2303/DevGames)](https://github.com/subuhana2303/DevGames/issues)
[![Stars](https://img.shields.io/github/stars/subuhana2303/DevGames?style=social)](https://github.com/subuhana2303/DevGames/stargazers)

---

## 🚀 Overview

**DevGames** is a full-stack, real-time **coding duel platform** where users can sign in, match with other developers, and compete on solving algorithmic problems in a collaborative code editor. It's built with React, Node.js, MongoDB, and Socket.IO.


---

## 🧩 Features

- 👤 **Authentication** – Secure login & signup using JWT
- ⚔️ **Matchmaking** – Match players into real-time duels
- ✍️ **Collaborative Code Editor** – Live syncing using WebSocket
- 🧠 **Problem Bank** – Filter problems by topic & difficulty
- 📊 **Leaderboard** – Track user performance & rankings
- 🔒 **Protected Routes** – Role & session-based access control

---

## 📁 Folder Structure

```
DevGames/
│
├── client/                # Frontend (optional or WIP)
│
├── server/                # Backend logic
│   ├── config/            # DB connection (db.js)
│   ├── controllers/       # auth, user, match logic
│   ├── middleware/        # JWT auth middleware
│   ├── models/            # Mongoose models (User, Match, Problem)
│   ├── routes/            # API route files
│   └── server.js          # Main entry point
│
├── shared/                # Shared data (problems.json, topics.js)
├── .env.example           # Sample environment file
├── .gitignore             # Git ignore rules
├── package.json
├── README.md
```

---

## 🛠️ Tech Stack

| Layer     | Technology                    |
|-----------|-------------------------------|
| Frontend  | React + Vite + TailwindCSS    |
| Backend   | Node.js + Express             |
| Database  | MongoDB + Mongoose            |
| Realtime  | WebSocket via Socket.IO       |
| Auth      | JWT + bcrypt                  |

---

## 🧱 Key Modules

| Module       | Description                               |
|--------------|-------------------------------------------|
| 👥 Auth       | Signup/Login with token verification      |
| ⚔️ Match      | Create and join real-time duels           |
| 📚 Problem    | JSON-based problem listing by topic       |
| 🧠 Context    | Global state with React Context API       |
| 💬 Sockets    | Real-time sync for shared editor          |

---

## 🧪 Demo 

![Screenshot 2025-06-11 175328](https://github.com/user-attachments/assets/f228b654-c265-4ac7-b43c-8fcfedd2741c)

---

## 🔧 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/your-username/DevGames.git
cd DevGames

# 2. Navigate to the backend
cd server

# 3. Install dependencies
npm install

# 4. Configure environment
cp .env.example .env
# Then fill in values like MONGO_URI and JWT_SECRET

# 5. Start the server
npm run dev
```

Make sure MongoDB is running locally or set up with [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

---

## 🌱 Environment Variables

`.env.example` contains:
```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

---

## 📚 Problem Format (shared/problems.json)

```json
{
  "id": "p1",
  "title": "Two Sum",
  "description": "Given an array of integers, return indices of two numbers that add up to a target.",
  "inputFormat": "nums = [2, 7, 11, 15], target = 9",
  "outputFormat": "[0, 1]",
  "difficulty": "Easy",
  "topic": "Arrays"
}
```

Topics list is in `shared/topics.js`.

---

## 🌐 API Overview

| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| POST   | /api/auth/register  | User registration      |
| POST   | /api/auth/login     | User login             |
| GET    | /api/users/:id      | Get user profile       |
| GET    | /api/users/leader   | View leaderboard       |
| POST   | /api/match/start    | Start a new match      |

---

## 🤝 Contribution Guidelines
We welcome contributions!
To contribute:

-🍴 Fork the repo

-🌿 Create a new branch

-✅ Make your changes

-🔁 Submit a pull request


---

## 📜 License

This project is under the [MIT License](LICENSE).

---

## 👩‍💻 Author

**Subuhana Basheer**  
GitHub: [@subuhana2303](https://github.com/subuhana2303)  
Email: subuhanabasheer41@gmail.com


---
"Code is not just logic; it's an experience." 💻
