import { useState } from 'react';
import Navbar from './Navbar';

const Dashboard = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/solve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Error from API:", data);
        return;
      }

      setResponse(data.response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-6">

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-center p-12 rounded-xl shadow-lg">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-md">
            Solve Your Doubts Instantly with AI
          </h1>
          <p className="text-lg text-blue-100 mt-4">
            Get quick and accurate answers to your academic questions using AI.
          </p>
        </div>

        {/* AI-Powered Doubt Solving Section */}
        <div className="mt-12 bg-white p-8 shadow-xl rounded-xl border border-gray-200">
          <h2 className="text-3xl font-semibold text-gray-800">Ask Your Question</h2>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question here..."
                className="flex-grow p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md"
              >
                Get Answer
              </button>
            </div>
          </form>
          {response && (
            <div className="mt-6 p-6 bg-gray-100 rounded-xl shadow-md border border-gray-200">
              <p className="text-gray-800 font-medium">
                <strong>Response:</strong> {response}
              </p>
            </div>
          )}
        </div>

        {/* Course Recommendations */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800">Recommended Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {/* AI for Beginners */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-300 p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200">
              <h3 className="text-xl font-bold text-blue-800">AI for Beginners</h3>
              <p className="text-gray-600 mt-2">
                Learn how AI works and its applications in education.
              </p>
            </div>
            {/* DSA */}
            <div className="bg-gradient-to-br from-green-100 to-green-300 p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200">
              <h3 className="text-xl font-bold text-green-800">Data Structures & Algorithms</h3>
              <p className="text-gray-600 mt-2">
                Master DSA with real-world problems.
              </p>
            </div>
            {/* Blockchain Basics */}
            <div className="bg-gradient-to-br from-purple-100 to-purple-300 p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200">
              <h3 className="text-xl font-bold text-purple-800">Blockchain Basics</h3>
              <p className="text-gray-600 mt-2">
                Understand blockchain technology and its impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
