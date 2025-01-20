import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import StudentDashboard from './pages/StudentDashboard';
import ParentPortal from './pages/ParentPortal';
import GroupChat from './pages/GroupChat';
import GroupMeeting from './pages/GroupMeeting';
import Lessons from './pages/Lessons';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-gray-900 flex flex-col">
        <Navbar />

        <div className="h-full flex-1 px-4 py-8">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/parent-portal" element={<ParentPortal />} />
            <Route path="/group-chat" element={<GroupChat />} />
            <Route path="/group-meeting" element={<GroupMeeting />} />
            <Route path="/lessons" element={<Lessons />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}