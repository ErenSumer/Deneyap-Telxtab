"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { AtSign, Lock, UserPlus, Loader2, Check, Info } from "lucide-react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const { signUp } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!agreed) {
      setError("You must agree to the Terms of Service and Privacy Policy");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await signUp(email, password);
      if (error) {
        setError(error.message);
        setIsLoading(false);
        return;
      }

      // Successful signup
      setSuccess(
        "Account created successfully! Check your email to confirm your account."
      );
      setIsLoading(false);

      // Optional: Redirect after a delay
      // setTimeout(() => router.push('/auth/login'), 3000);
    } catch (err) {
      console.error("Signup error:", err);
      setError("An unexpected error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden flex flex-col">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#ec4899)] opacity-20 mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#ec4899)] opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#ec4899)] opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="fixed bottom-20 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl"
      />

      <div className="flex flex-col items-center justify-center flex-grow px-4">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block mb-8">
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                LinguaLeap
              </h1>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 border border-gray-800 shadow-lg shadow-purple-500/10"
          >
            <h2 className="text-2xl font-bold mb-2 text-white">
              Create your account
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Start your language learning journey today
            </p>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
              >
                {error}
              </motion.div>
            )}

            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm flex items-start"
              >
                <Check className="w-5 h-5 mr-2 shrink-0 mt-0.5" />
                <span>{success}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-gray-300">
                  Email
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <AtSign size={18} />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm text-gray-300">
                  Password
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Lock size={18} />
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    className="pl-10 bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white"
                  />
                </div>
                <div className="text-xs text-gray-400 flex items-center mt-1">
                  <Info className="w-3 h-3 mr-1" />
                  Password must be at least 8 characters
                </div>
              </div>

              <div className="flex items-start space-x-2 mt-4">
                <Checkbox
                  id="terms"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  className="border-gray-600 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                />
                <Label
                  htmlFor="terms"
                  className="text-sm text-gray-300 font-normal leading-tight"
                >
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <UserPlus className="mr-2 h-4 w-4" />
                  )}
                  Create Account
                </Button>
              </motion.div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center py-6 text-gray-400 text-sm"
      >
        <p>
          By creating an account, you agree to our{" "}
          <Link href="/terms" className="text-purple-400 hover:text-purple-300">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="text-purple-400 hover:text-purple-300"
          >
            Privacy Policy
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
