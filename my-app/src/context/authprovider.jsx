'use client';

import { SessionProvider } from "next-auth/react";
// AuthProvider wraps the app with NextAuth's session context
// This allows access to authentication state anywhere in the component tree
export const AuthProvider = ({ children ,session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}