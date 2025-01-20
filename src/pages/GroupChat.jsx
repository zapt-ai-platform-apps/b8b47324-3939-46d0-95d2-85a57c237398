import React from 'react';
import * as Sentry from '@sentry/browser';

export default function GroupChat() {
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const messages = [
    { from: 'Jane', text: 'Hello everyone!' },
    { from: 'John', text: 'Hey, how are you?' },
  ];

  const handleSendMessage = async () => {
    try {
      console.log('Sending message:', message);
      setLoading(true);
      // Fake a call to the backend
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      Sentry.captureException(error);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Group Chat</h2>
      <div className="flex-1 border p-2 mb-2 overflow-y-auto">
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.from}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <div className="flex items-center">
        <input
          className="box-border border p-2 flex-grow mr-2"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={loading}
        />
        <button
          className="cursor-pointer bg-blue-500 text-white px-4 py-2"
          onClick={handleSendMessage}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}