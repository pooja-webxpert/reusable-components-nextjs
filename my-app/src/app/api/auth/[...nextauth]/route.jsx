
import { authOptions } from "@/lib/auth"
import NextAuth from "next-auth"



const handler = NextAuth(authOptions)

// Export handler for both GET and POST requests
// ✅ Required for Next.js 13+ App Router route handlers
// - GET is used to fetch session data
// - POST is used to handle sign-in/sign-out requests
export { handler as GET, handler as POST }