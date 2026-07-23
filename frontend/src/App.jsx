import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Notices from "./pages/Notices";
import Alumni from "./pages/Alumni";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/notices" element={<Notices />} />
      <Route path="/alumni" element={<Alumni />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;