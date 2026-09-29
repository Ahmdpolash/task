import { Metadata } from "next";
import { AuthPage } from "@/components/auth/AuthPage";

export const metadata: Metadata = {
  title: "Sign Up · ByteSpace",
  description: "Create an account on ByteSpace and start learning today.",
};

export default function SignUpPage() {
  return <AuthPage mode="register" />;
}
