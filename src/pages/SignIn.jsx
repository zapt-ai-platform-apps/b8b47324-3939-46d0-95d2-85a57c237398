import React, { useEffect } from 'react';
import * as Sentry from '@sentry/browser';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      try {
        console.log('Auth state changed:', event);
        if (event === 'SIGNED_IN') {
          // For simplicity, let's assume we fetch user type from a profile table or some metadata
          // Instead, we'll just route to the Student Dashboard by default
          // If you have user type info, route to ParentPortal if user is a parent
          navigate('/student-dashboard');
        }
        if (event === 'SIGNED_OUT') {
          navigate('/');
        }
      } catch (error) {
        console.error('Error handling auth state change:', error);
        Sentry.captureException(error);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Sign out error:', error);
      Sentry.captureException(error);
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="text-xl font-semibold mb-2">Sign in with ZAPT</h1>
      <a
        href="https://www.zapt.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-600 mb-4"
      >
        Visit zapt.ai
      </a>
      <div className="w-full max-w-md">
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
          }}
          providers={['google', 'facebook', 'apple']}
        />
      </div>
      <button
        onClick={handleSignOut}
        className="mt-4 py-2 px-4 bg-red-500 text-white cursor-pointer"
      >
        Sign Out
      </button>
    </div>
  );
}