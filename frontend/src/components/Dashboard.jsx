import React from 'react'
import Navbar from './Navbar';

const Dashboard = () => {
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
          <input
            type="text"
            placeholder="Type your question here..."
            className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Get Answer
          </button>
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
  )
}

export default Dashboard