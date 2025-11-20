
import { AuthPage } from "@/components/AuthPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - draw.io",
  description: "Login to your account to access your diagrams.",
};

export default function SignIn() {
    // isSignin = true renders the "Sign In" UI
    return <AuthPage isSignin={true} />;
}