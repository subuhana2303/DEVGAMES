# DevGames Server

Express + MongoDB backend for DevGames

## Setup

1. Clone the repo
2. `cd server`
3. `npm install`
4. Create a `.env` file with:
---

PORT=5000
MONGO_URI=your_mongo_uri_here
JWT_SECRET=your_jwt_secret

---

## Scripts

- `npm run dev` — Start server with nodemon
- `npm start` — Start server without nodemon

## API Routes

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/users/profile/:id`
- `GET /api/users/leaderboard`
- `POST /api/match/start`
