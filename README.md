# Online Tutoring Platform

This app provides a multi-page online tutoring platform with student and parent portals, lesson modules, chat features, and more. Below is a list of user journeys that guide you through the different aspects of the app.

1. [Sign In](docs/journeys/sign-in.md) - Access the platform with student or parent credentials
2. [Student Dashboard](docs/journeys/student-dashboard.md) - View tasks, homework, quizzes, and progress
3. [Parent Portal](docs/journeys/parent-portal.md) - Communicate with the tutor and track student performance
4. [Group Chat](docs/journeys/group-chat.md) - Interact with multiple students in a chat room
5. [Group Meeting](docs/journeys/group-meeting.md) - Join an audio/video session with the tutor
6. [Lessons](docs/journeys/lessons.md) - Explore structured lessons, vocabulary, and interactive concept checks

Alongside these journeys, the application logs important events to Sentry for error tracking and uses PWA features via Progressier for offline capabilities.

## External Services
This app uses:
- React Router DOM for multi-page navigation
- Supabase for user authentication
- Sentry for error tracking
- Progressier for adding PWA functionality
- Umami for analytics

## Environment Variables
Create a .env file at the root of the project with the following:
```
VITE_PUBLIC_APP_ID=<Your ZAPT App ID>
VITE_PUBLIC_SENTRY_DSN=<Sentry DSN>
VITE_PUBLIC_APP_ENV=<Environment Name, e.g. production or staging>
VITE_PUBLIC_UMAMI_WEBSITE_ID=<Umami Website ID>
COCKROACH_DB_URL=<Database URL if needed>
NPM_TOKEN=<NPM Token if needed>
```
