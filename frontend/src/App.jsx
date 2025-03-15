import { BrowserRouter as Router, Routes, Route , Link} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Quiz from "./components/Quiz";
import { useState , useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
 
  useEffect(() => {
    fetch("http://localhost:3000/")
    .then((res) => res.json())
    .then((data) => setMessage(data.message))
    .catch((error) => { console.error("error fetching data", error) })
   
  }, []);
  
  return (
    <Router>
      {/* <div>{message }</div> */}
      <Routes>           
        <Route path="/" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
