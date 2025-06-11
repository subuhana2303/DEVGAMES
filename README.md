# 🕹️DevGames Project

DevGames is a full-stack web application where users can register, log in, solve programming problems, and participate in head-to-head coding matchups. Ideal for developers looking to improve their problem-solving skills through friendly competition.

---

## 🚀 Features

- 🔐 User authentication system (Login/Register)
- ⚔️ Matchmaking-based coding duels
- 📚 Programming problems categorized by topic and difficulty
- 🧑‍💻 Leaderboard to track top performers
- 🌐 RESTful API architecture with modular backend

---

## 🛠️ Tech Stack

**Frontend** (optional/for future):
- HTML, CSS (Tailwind CSS), JavaScript, React (planned)

**Backend**:
- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv, cors, bcryptjs, jsonwebtoken

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

## 🤝 Contribution Guide

1. Fork the repo 🍴
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to your fork: `git push origin feature-name`
5. Create a pull request ✅


---

## 📄 License

This project is under the [MIT License](LICENSE).

---

## 💬 Contact

Built with ❤️ by SUBUHANA B (https://github.com/subuhana2303)

---
