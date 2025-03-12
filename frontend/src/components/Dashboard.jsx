import React, { useState } from 'react';
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

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Error from API:", errorData);
        return; // Stop execution if there's an error
      }

      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error("Error fetching data:", error); // Fixed reference to `error`
    }
  };


  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        {/* Hero Section */}
        <div className="bg-blue-100 text-center p-10 rounded-lg shadow-md">
          <h1 className="text-4xl font-extrabold text-blue-700">
            Solve Your Doubts in Seconds with AI
          </h1>
          <p className="text-lg text-gray-700 mt-2">
            Instantly get solutions to your academic questions using AI-powered learning.
          </p>
        </div>

        {/* AI-Powered Doubt Solving Section */}
        <div className="mt-10 bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold">Ask Your Question</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question here..."
              className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Get Answer
            </button>
          </form>
          {response && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="text-gray-700">
                <strong>Response:</strong> {response}
              </p>
            </div>
          )}
        </div>

        {/* Course Recommendations */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold">Recommended Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">AI for Beginners</h3>
              <p className="text-gray-600">Learn how AI works and its applications in education.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Data Structures & Algorithms</h3>
              <p className="text-gray-600">Master DSA with real-world problems.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Blockchain Basics</h3>
              <p className="text-gray-600">Understand blockchain technology and its impact.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
