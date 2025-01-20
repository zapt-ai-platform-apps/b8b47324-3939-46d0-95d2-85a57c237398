import React from 'react';
import * as Sentry from '@sentry/browser';

export default function ParentPortal() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function loadParentData() {
      try {
        console.log('Fetching parent data...');
        setLoading(true);
        // Fake a call to the backend
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (error) {
        console.error('Error loading parent data:', error);
        Sentry.captureException(error);
      }
    }
    loadParentData();
  }, []);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-gray-600">Loading Parent Portal...</p>
      </div>
    );
  }

  return (
    <div className="h-full">
      <h2 className="text-2xl font-bold mb-4">Parent Portal</h2>
      <p className="mb-4">Monitor your child's progress and communicate with the tutor.</p>
      <p><strong>Student Performance Status:</strong> Good Progress</p>
      <p className="mt-2">
        <strong>Upcoming Tasks:</strong> Chapter 5 Homework, Quiz 2
      </p>
      <p className="mt-2">Send a message to the tutor:</p>
      <textarea
        className="box-border border w-full max-w-md p-2 mt-1"
        rows="4"
        placeholder="Type your message..."
      ></textarea>
      <br />
      <button
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 mt-2"
        onClick={() => console.log('Message sent')}
      >
        Send
      </button>
    </div>
  );
}