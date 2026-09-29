import { Metadata } from "next";
import { AuthPage } from "@/components/auth/AuthPage";

export const metadata: Metadata = {
  title: "Sign In · ByteSpace",
  description: "Sign in to your ByteSpace account to access your courses.",
};

export default function SignInPage() {
  return <AuthPage mode="login" />;
}
