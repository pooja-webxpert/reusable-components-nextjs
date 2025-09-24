import api from "./api";
import CredentialsProvider from "next-auth/providers/credentials";
// NextAuth authentication options
export const authOptions = {
  // Use JWT-based sessions instead of database sessions
  session: {
    strategy: "jwt",
  },
  // Define authentication providers
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // The authorize function validates credentials against your API
      async authorize(credentials) {
        try {
          const { data } = await api.post("auth/login", credentials);
          return {
            ...data.data,
            id: data.data.id.toString(),
            isVerified2FA: false,
          };
        } catch {
          return null;
        }
      },
    }),
  ],
  // Custom pages
  pages: {
    signIn: "/login",
  },
  // Callbacks to customize JWT and session handling
  callbacks: {
    // Called whenever a session is checked
    async session({ session, token }) {
      session.user = token.user; // Attach user object from JWT to session
      return session;
    },
    // Called whenever a JWT is created/updated
    async jwt({ token, user, session, trigger }) {
      // Update token when session is updated
      if (trigger === "update" && session?.user) {
        token.user = session.user;
      }
      // Add user to token on initial sign-in
      if (user) token.user = user;
      return token;
    },
  },
};
