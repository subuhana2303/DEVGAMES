import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Matchmaking from './pages/Matchmaking';
import DuelRoom from './pages/DuelRoom';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matchmaking" element={<Matchmaking />} />
          <Route path="/duel/:roomId" element={<DuelRoom />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
