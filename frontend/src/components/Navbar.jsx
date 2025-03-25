import { React, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold hover:text-blue-200">
                    AiCADEMY
                </Link>
                <ul className="flex space-x-5">
                    <li>
                        <Link
                            to="/"
                            className="px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/courses"
                            className="px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                        >
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/quiz"
                            className="px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                        >
                            Quiz
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;