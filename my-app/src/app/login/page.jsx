"use client";

import TextInputField from "@/component/shared/form/textField";
import { errorMsg } from "@/component/toster-msg/msg";
import { routesUrl } from "@/utils/pagesurl";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const { data: session } = useSession();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [isSigningIn, setIsSigningIn] = useState(false);
  const router = useRouter();
  // Function to handle login submission
  const onLoginUser = async (data) => {
    const { email, password } = data;
    setIsSigningIn(true);
    try {
      // Attempt sign in with NextAuth credentials provider
      const signInResponse = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      // Handle invalid credentials
      if (signInResponse?.status === 401) {
        // errorMessage({ description: "Invalid email or password" });
        return;
      }
      // Handle other errors
      if (!signInResponse?.ok) {
        errorMsg(signInResponse?.error || "An error occurred");
        return;
      }
      // If successful, reset form and redirect
      setIsSigningIn(false);
      reset();
      router.replace(routesUrl.Button);
    } catch (error) {
      errorMsg(error?.response?.data?.message);
    } finally {
      setIsSigningIn(false);
    }
  };
  // Redirect authenticated users directly to the dashboard
  useEffect(() => {
    if (session?.user) {
      router.replace(routesUrl.Button);
    }
  }, [session, router]);

  return (
    <div className="bg-gradient-to-br  to-red-100">
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/aceWebx-Logo.png"
              alt="Logo"
              className=" w-60 drop-shadow-lg"
            />
          </div>

          {/* Login Card */}
          <Card className="rounded-2xl bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl">
            <CardContent className="px-8 py-10">
              <h1 className="text-center text-3xl font-bold text-[#b82025] drop-shadow-sm">
                Welcome Back
              </h1>
              <p className="text-center text-sm text-gray-500 mt-2">
                Sign in to continue to your dashboard
              </p>

              <form
                onSubmit={handleSubmit(onLoginUser)}
                className="space-y-6 mt-8"
              >
                {/* Email */}
                <TextInputField
                  control={control}
                  name="email"
                  label="Email"
                  className="w-full"
                  // variant="outlined"
                />

                {/* Password */}
                <TextInputField
                  control={control}
                  name="password"
                  label="Password"
                  className="w-full"
                  // variant="outlined"
                />

                {/* Submit Button */}
                <CardActions className="flex flex-col space-y-4 px-0">
                  <Button
                    type="submit"
                    disabled={isSigningIn}
                    className="w-full h-12 rounded-lg bg-[#b82025] hover:bg-[#a11d21] text-white font-medium shadow-md hover:shadow-lg transition"
                  >
                    {isSigningIn ? (
                      <span className="flex items-center gap-2">
                        {/* <Loader2 className="h-5 w-5 animate-spin" /> */}
                        Signing in...
                      </span>
                    ) : (
                      "Sign In"
                    )}
                  </Button>

                  {/* <p className="text-center text-sm text-gray-500">
                      Don’t have an account?{" "}
                      <a
                        href="/register"
                        className="text-[#b82025] font-medium hover:underline"
                      >
                        Sign Up
                      </a>
                    </p> */}
                </CardActions>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
