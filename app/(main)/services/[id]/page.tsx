
"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CloudUpload,
  FileText,
  Send
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ServiceRequestPage() {
  // State to track the current active step (1, 2, or 3 for Review)
  const [currentStep, setCurrentStep] = useState(1);

  // Helper to toggle steps or move to next
  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handleStepClick = (step: number) => {
    if (step < 3) setCurrentStep(step);
  };

  return (
    <div className="bg-[#eef5fc] min-h-screen py-10 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-10 text-center md:text-left"
        >
          {currentStep === 3 ? "Review and Submit" : "Apostille / Legalization Job Request"}
        </motion.h1>

        {currentStep === 3 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-500 -mt-8 mb-10 text-center md:text-left"
          >
            Please verify all information before final submission for authentication.
          </motion.p>
        )}

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT COLUMN - Main Form Content */}
          <div className="lg:col-span-2 space-y-6">

            {/* STEP 1 CARD */}
            {currentStep < 3 && (
              <div className="bg-white rounded-3xl shadow-sm overflow-hidden transition-all duration-300">
                <div
                  className={`p-6 md:p-8 flex items-center justify-between cursor-pointer ${currentStep === 1 ? 'border-b border-gray-100' : ''}`}
                  onClick={() => handleStepClick(1)}
                >
                  <h2 className="text-xl font-semibold text-[#0f172a]">Step 1: Type of Verification</h2>
                  {currentStep === 1 ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-gray-400" />}
                </div>

                <AnimatePresence>
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-0 space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label className="text-gray-600 font-medium">Document Type</Label>
                            <Select>
                              <SelectTrigger className="bg-[#eef5fc] border-transparent h-12 rounded-lg">
                                <SelectValue placeholder="Select document type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="birth-cert">Birth Certificate</SelectItem>
                                <SelectItem value="diploma">Diploma</SelectItem>
                                <SelectItem value="poa">Power of Attorney</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-gray-600 font-medium">Issuing Authority</Label>
                            <Input placeholder="e.g. Ministry of Interior" className="bg-[#eef5fc] border-transparent h-12 rounded-lg" />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label className="text-gray-600 font-medium">State of Issuance</Label>
                            <Select>
                              <SelectTrigger className="bg-[#eef5fc] border-transparent h-12 rounded-lg">
                                <SelectValue placeholder="Select your state" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ny">New York</SelectItem>
                                <SelectItem value="ca">California</SelectItem>
                                <SelectItem value="tx">Texas</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-gray-600 font-medium">Country</Label>
                            <Input defaultValue="USA" readOnly className="bg-[#eef5fc] border-transparent h-12 rounded-lg text-gray-700 font-medium" />
                          </div>
                        </div>

                        <div className="flex justify-end pt-4">
                          <Button
                            onClick={handleNextStep}
                            className="bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-6 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2"
                          >
                            Continue <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* STEP 2 CARD */}
            {currentStep < 3 && (
              <div className="bg-white rounded-3xl shadow-sm overflow-hidden transition-all duration-300">
                <div
                  className={`p-6 md:p-8 flex items-center justify-between cursor-pointer ${currentStep === 2 ? 'border-b border-gray-100' : ''}`}
                  onClick={() => handleStepClick(2)}
                >
                  <h2 className="text-xl font-semibold text-[#0f172a]">Step 2: Upload Document</h2>
                  {currentStep === 2 ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-gray-400" />}
                </div>

                <AnimatePresence>
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-0">
                        <div className="border-2 border-dashed border-blue-300 bg-[#f8fbff] rounded-2xl h-64 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-50 transition-colors group">
                          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                            <CloudUpload className="w-8 h-8" />
                          </div>
                          <h3 className="text-[#0f172a] font-semibold mb-2">Click to upload card photo</h3>
                          <p className="text-gray-500 text-sm">Front and back recommended</p>
                        </div>

                        <div className="flex justify-end pt-8">
                          <Button
                            onClick={handleNextStep}
                            className="bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-6 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2"
                          >
                            Proceed to Review <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* STEP 3 CONTENT (REVIEW) */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {/* Document Info Card */}
                <div className="bg-white rounded-3xl p-8 shadow-sm">
                  <h2 className="text-xl font-semibold text-[#0f172a] mb-6 border-b border-gray-100 pb-4">Document Information</h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs text-gray-500 uppercase font-bold tracking-wide">Uploaded File</span>
                        <p className="text-[#0f172a] font-semibold mt-1">power_of_attorney_draft_v2.pdf</p>
                        <p className="text-xs text-gray-400 mt-1">Uploaded on Oct 24, 2023</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <span className="text-xs text-gray-500 uppercase font-bold tracking-wide">Document Type</span>
                        <p className="text-[#0f172a] font-semibold mt-1">General Power of Attorney</p>
                      </div>
                      <div>
                        <span className="text-xs text-gray-500 uppercase font-bold tracking-wide">Authentication Level</span>
                        <p className="text-[#0f172a] font-semibold mt-1">Standard Notarization</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Applicant Details Card */}
                <div className="bg-white rounded-3xl p-8 shadow-sm">
                  <h2 className="text-xl font-semibold text-[#0f172a] mb-6 border-b border-gray-100 pb-4">Applicant Details</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                      <span className="text-xs text-gray-500 uppercase font-bold tracking-wide">Full Name</span>
                      <p className="text-[#0f172a] font-semibold mt-1">Jonathan Alexander Miller</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 uppercase font-bold tracking-wide">Document Type</span>
                      <p className="text-[#0f172a] font-semibold mt-1">Birth</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 uppercase font-bold tracking-wide">ID Number</span>
                      <p className="text-[#0f172a] font-semibold mt-1">P894200155</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 uppercase font-bold tracking-wide">Email Address</span>
                      <p className="text-[#0f172a] font-semibold mt-1">j.miller@example.com</p>
                    </div>
                    <div className="lg:col-span-2">
                      <span className="text-xs text-gray-500 uppercase font-bold tracking-wide">Registered Address</span>
                      <p className="text-[#0f172a] font-semibold mt-1">742 Evergreen Terrace, Springfield, IL 62704</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </div>

          {/* RIGHT COLUMN - Sidebar */}
          <div className="lg:col-span-1">

            {/* NEED HELP WIDGET (Steps 1 & 2) */}
            {currentStep < 3 && (
              <div className="bg-[#0f172a] rounded-3xl p-8 text-white sticky top-10">
                <h3 className="text-2xl font-semibold mb-2">Need Help?</h3>
                <div className="space-y-4 mt-6">
                  <p className="text-sm font-light text-blue-100">
                    <span className="block mb-1">support@legalizedocs.io</span>
                    <span className="block">+1 (800) 555-0123</span>
                  </p>
                  <Button className="w-full bg-[#2563eb] hover:bg-blue-600 text-white mt-4 py-6 rounded-xl font-medium flex items-center justify-center gap-2 transition-all">
                    Get In Touch <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* SUMMARY WIDGET (Step 3) */}
            {currentStep === 3 && (
              <div className="space-y-6 sticky top-10">

                {/* Overall Progress */}
                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-[#0f172a]">Overall Progress</h3>
                    <span className="font-bold text-[#0f172a]">75%</span>
                  </div>
                  <Progress value={75} className="h-3 bg-blue-100" indicatorClassName="bg-[#2563eb]" />
                  <p className="text-sm text-gray-500 mt-4 font-medium">Step 3 of 4: Review And Submit</p>
                </div>

                {/* Order Summary */}
                <div className="bg-[#0f172a] rounded-3xl p-8 text-white">
                  <h3 className="text-xl font-semibold mb-6">Order Summary</h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-blue-100">Base verification fee</span>
                      <span className="font-medium">$45.00</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-blue-100">Express processing</span>
                      <span className="font-medium text-green-400">+$15.00</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-blue-100">Digital stamp fee</span>
                      <span className="font-medium">$5.00</span>
                    </div>
                    <div className="h-px bg-white/10 my-4" />
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total Amount</span>
                      <span className="text-[#2563eb] text-2xl">$65.00</span>
                    </div>
                  </div>

                  <Button className="w-full bg-[#2563eb] hover:bg-blue-600 text-white py-6 rounded-xl font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/50">
                    Submit for Authentication <Send className="w-4 h-4 ml-1" />
                  </Button>
                </div>

              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
