import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";

function App() {
  console.log("testing ")
  const [message, setMessage] = useState("");
 
  useEffect(() => {
    fetch("http://localhost:3000/message")
    .then((res) => res.json())
    .then((data) => setMessage(data.message));
  }, []);
  
  return (
    <Router>
      <Routes>      
       {console.log(message)};
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
