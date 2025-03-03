import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>      
        <Route path="/dashboard" element={<Dashboard />} />
        

      </Routes>
    </Router>
  );
}

export default App;
