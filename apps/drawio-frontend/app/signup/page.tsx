import { AuthPage } from "@/components/AuthPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - draw.io",
  description: "Create a new account to start drawing.",
};

export default function SignUp() {
    // isSignin = false renders the "Create Account" UI
    return <AuthPage isSignin={false} />;
}