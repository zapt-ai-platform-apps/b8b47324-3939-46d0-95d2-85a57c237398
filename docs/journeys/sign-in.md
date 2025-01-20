# Sign In

## Steps

1. Navigate to the Sign-In page.  
2. You will see a heading "Sign in with ZAPT" and a link to www.zapt.ai.  
3. Below that, the Supabase authentication component allows you to log in using various methods (email/password or social providers).  
4. Upon successful sign-in, you will be redirected:  
   - If your account is set as "student," you land on the Student Dashboard.  
   - If your account is set as "parent," you land on the Parent Portal.  
5. If sign-in fails, you will see an error message from the authentication library.  
6. Once signed in, the app listens for further auth state changes. You can sign out at any time, and the UI will update without a page refresh.