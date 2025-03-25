import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import QuizGeneration from "./components/QuizGeneration";
import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("error fetching data", error));

    console.log("test");
  }, []);

  return (
    <Router>
      {/* <div>{message}</div> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/quiz" element={<QuizGeneration />} />
      </Routes>
    </Router>
  );
}

export default App;























