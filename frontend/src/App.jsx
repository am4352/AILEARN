import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
