import React from 'react';
import * as Sentry from '@sentry/browser';

export default function StudentDashboard() {
  // In a real app, you'd fetch tasks, homework, quizzes, and points from a database
  // For now, let's show some placeholders

  // Simulate loading state
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function loadData() {
      try {
        console.log('Fetching student data...');
        setLoading(true);
        // Fake a call to the backend
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (error) {
        console.error('Error loading student data:', error);
        Sentry.captureException(error);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-gray-600">Loading Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="h-full">
      <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>
      <p className="mb-4">Here you can view your upcoming tasks, homework, and quizzes.</p>
      <div className="mb-4">
        <strong>Points Earned:</strong> 20
      </div>
      <ul className="list-disc pl-6">
        <li>Task 1: Read Chapter 5 (Due: Tomorrow)</li>
        <li>Task 2: Complete Quiz 2 (Due: Friday)</li>
      </ul>
    </div>
  );
}