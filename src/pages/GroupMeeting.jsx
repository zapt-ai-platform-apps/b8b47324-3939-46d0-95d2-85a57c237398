import React from 'react';
import * as Sentry from '@sentry/browser';

export default function GroupMeeting() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function initMeeting() {
      try {
        console.log('Initializing group meeting...');
        setLoading(true);
        // Fake a call to the backend or video service
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (error) {
        console.error('Error initializing meeting:', error);
        Sentry.captureException(error);
      }
    }
    initMeeting();
  }, []);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-gray-600">Connecting to Group Meeting...</p>
      </div>
    );
  }

  return (
    <div className="h-full">
      <h2 className="text-2xl font-bold mb-4">Group Meeting</h2>
      <p>Welcome to the group meeting! If a video stream is integrated, it would appear here.</p>
      <p className="mt-2">
        Use a "Raise Hand" feature to ask a question, or chat with participants during the meeting.
      </p>
    </div>
  );
}