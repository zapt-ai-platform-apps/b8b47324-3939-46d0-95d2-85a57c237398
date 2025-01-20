import React from 'react';
import * as Sentry from '@sentry/browser';

export default function Lessons() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function loadLessons() {
      try {
        console.log('Loading lessons...');
        setLoading(true);
        // Fake a call to the backend
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (error) {
        console.error('Error loading lessons:', error);
        Sentry.captureException(error);
      }
    }
    loadLessons();
  }, []);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-gray-600">Loading Lessons...</p>
      </div>
    );
  }

  return (
    <div className="h-full">
      <h2 className="text-2xl font-bold mb-4">Lessons</h2>
      <p className="mb-4">Here are the lesson materials, vocabulary, and interactive concept checks.</p>
      <div className="mb-2">
        <strong>Lesson 1:</strong> Algebra Basics
      </div>
      <p>Concept check: 2 + 2 = ?</p>
      <ul className="list-disc pl-6">
        <li>Lesson 1.1: Vocabulary</li>
        <li>Lesson 1.2: Example Problems</li>
      </ul>
    </div>
  );
}