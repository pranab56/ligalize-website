"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validate = () => {
    const newErrors: {
      fullName?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};

    if (!fullName) {
      newErrors.fullName = "Full name is required";
    }

    if (!email) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Account created successfully!");
      router.push("/login"); // For simplicity, redirecting to login
    } catch (error) {
      console.error("Sign up error:", error);
      toast.error("An error occurred during sign up.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#EEF2F9] p-4 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl"
      >
        <div className="bg-white rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-[2rem] font-medium text-[#1A1D2E] mb-2 text-center">Create your account</h1>
            <p className="text-[#64748B] text-base">Enter your details to get started as a service provider.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#1A1D2E] ml-1">Full Name</Label>
              <Input
                type="text"
                placeholder="Enter your full name here..."
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                }}
                className={cn(
                  " bg-[#EBF2FA] border-none rounded-2xl focus-visible:ring-1 px-5 transition-all",
                  errors.fullName ? "focus-visible:ring-red-500 bg-red-50/50" : "focus-visible:ring-[#1D68D5]"
                )}
              />
              {errors.fullName && (
                <p className="text-xs font-medium text-red-500 mt-1 ml-1 animate-in fade-in slide-in-from-top-1">
                  {errors.fullName}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#1A1D2E] ml-1">Email Address</Label>
              <Input
                type="email"
                placeholder="Enter your email address here..."
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                className={cn(
                  "bg-[#EBF2FA] border-none rounded-2xl focus-visible:ring-1 px-5 transition-all",
                  errors.email ? "focus-visible:ring-red-500 bg-red-50/50" : "focus-visible:ring-[#1D68D5]"
                )}
              />
              {errors.email && (
                <p className="text-xs font-medium text-red-500 mt-1 ml-1 animate-in fade-in slide-in-from-top-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#1A1D2E] ml-1">Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password here..."
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({ ...errors, password: undefined });
                  }}
                  className={cn(
                    "bg-[#EBF2FA] border-none rounded-2xl focus-visible:ring-1 px-5 transition-all pr-12",
                    errors.password ? "focus-visible:ring-red-500 bg-red-50/50" : "focus-visible:ring-[#1D68D5]"
                  )}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#1A1D2E] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs font-medium text-red-500 mt-1 ml-1 animate-in fade-in slide-in-from-top-1">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#1A1D2E] ml-1">Confirm Password</Label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Repeat your password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: undefined });
                  }}
                  className={cn(
                    " bg-[#EBF2FA] border-none rounded-2xl focus-visible:ring-1 px-5 transition-all pr-12",
                    errors.confirmPassword ? "focus-visible:ring-red-500 bg-red-50/50" : "focus-visible:ring-[#1D68D5]"
                  )}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#1A1D2E] transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-xs font-medium text-red-500 mt-1 ml-1 animate-in fade-in slide-in-from-top-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-[#1D68D5] hover:bg-[#1A5BBF] text-white rounded-2xl text-lg font-medium transition-all shadow group mt-4"
            >
              {isLoading ? 'Creating Account...' : (
                <span className="flex items-center gap-2">
                  Create Account <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </Button>
          </form>

          <div className="text-center mt-8 text-[#64748B] text-base">
            Already have an account?{" "}
            <Link href="/login" className="text-[#1D68D5] hover:underline font-medium text-sm">
              Login
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
