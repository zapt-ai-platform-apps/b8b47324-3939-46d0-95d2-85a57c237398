import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-200 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="cursor-pointer hover:underline">
            Sign In
          </Link>
        </li>
        <li>
          <Link to="/student-dashboard" className="cursor-pointer hover:underline">
            Student Dashboard
          </Link>
        </li>
        <li>
          <Link to="/parent-portal" className="cursor-pointer hover:underline">
            Parent Portal
          </Link>
        </li>
        <li>
          <Link to="/group-chat" className="cursor-pointer hover:underline">
            Group Chat
          </Link>
        </li>
        <li>
          <Link to="/group-meeting" className="cursor-pointer hover:underline">
            Group Meeting
          </Link>
        </li>
        <li>
          <Link to="/lessons" className="cursor-pointer hover:underline">
            Lessons
          </Link>
        </li>
      </ul>
    </nav>
  );
}