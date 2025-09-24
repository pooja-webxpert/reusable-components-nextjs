import axios from "axios";
import { getSession, signOut } from "next-auth/react";
// Base URL for API requests, read from environment variable
export const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/v1.0.1/`;
// Create an Axios instance with the base URL
const api = axios.create({ baseURL });
// Request interceptor: adds authentication token to headers if available
api.interceptors.request.use(
  async (config) => {
    try {
      const session = await getSession(); // Get current session from NextAuth
      // If user has an access token, attach it to the request headers
      if (session?.user?.accessToken) {
        config.headers["x-access-token"] = session?.user?.accessToken;
      }

      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
// Response interceptor: handles global response logic
api.interceptors.response.use(
  (response) => {
    // If the API returns error code 601, sign out the user

    if (response.data.errorCode === 601) {
      signOut();
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// Export the Axios instance for use in the app
export default api;
