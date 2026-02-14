
"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CloudUpload,
  FileText,
  Send,
  Trash2
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form State
  const [formData, setFormData] = useState({
    documentType: "birth-cert",
    issuingAuthority: "",
    stateOfIssuance: "ny",
  });

  // Helper to toggle steps or move to next
  const handleNextStep = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!selectedFile) {
        toast.error("Please upload a document before proceeding.");
        return;
      }
      setCurrentStep(3);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleStepClick = (step: number) => {
    if (step < 3) setCurrentStep(step);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Basic validation
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        toast.error("Please upload a PDF or Image (JPEG/PNG) file.");
        return;
      }

      // Size validation (e.g., 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size should be less than 5MB.");
        return;
      }

      setIsUploading(true);
      // Simulate upload
      setTimeout(() => {
        setSelectedFile(file);
        setIsUploading(false);
        toast.success("Document uploaded successfully!");
      }, 1000);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    toast.success("File removed.");
  };

  return (
    <div className="bg-[#eef5fc] min-h-screen py-8 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12 text-center md:text-left"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#0f172a] mb-3">
            {currentStep === 3 ? "Review and Submit" : "Apostille / Legalization Job Request"}
          </h1>
          {currentStep === 3 && (
            <p className="text-gray-500 text-sm sm:text-base">
              Please verify all information before final submission for authentication.
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

          {/* LEFT COLUMN - Main Form Content */}
          <div className="lg:col-span-2 space-y-6">

            {/* STEP 1 CARD */}
            {currentStep < 3 && (
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-sm overflow-hidden transition-all duration-300">
                <div
                  className={`p-5 md:p-8 flex items-center justify-between cursor-pointer ${currentStep === 1 ? 'border-b border-gray-100' : ''}`}
                  onClick={() => handleStepClick(1)}
                >
                  <h2 className="text-lg md:text-xl font-semibold text-[#0f172a]">Step 1: Type of Verification</h2>
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
                      <div className="p-5 md:p-8 pt-0 space-y-6 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 w-full">
                          <div className="space-y-2 w-full">
                            <Label className="text-gray-600 font-medium">Document Type</Label>
                            <Select
                              value={formData.documentType}
                              onValueChange={(val) => setFormData({ ...formData, documentType: val })}
                            >
                              <SelectTrigger className="bg-[#eef5fc] w-full border-transparent h-12 py-[22px] rounded-lg">
                                <SelectValue placeholder="Select document type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="birth-cert">Birth Certificate</SelectItem>
                                <SelectItem value="diploma">Diploma</SelectItem>
                                <SelectItem value="poa">Power of Attorney</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2 w-full">
                            <Label className="text-gray-600 font-medium">Issuing Authority</Label>
                            <Input
                              placeholder="e.g. Ministry of Interior"
                              className="bg-[#eef5fc] border-transparent h-12 rounded-lg"
                              value={formData.issuingAuthority}
                              onChange={(e) => setFormData({ ...formData, issuingAuthority: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 w-full">
                          <div className="space-y-2 w-full">
                            <Label className="text-gray-600 font-medium w-full mb-2">State of Issuance</Label>
                            <Select
                              value={formData.stateOfIssuance}
                              onValueChange={(val) => setFormData({ ...formData, stateOfIssuance: val })}
                            >
                              <SelectTrigger className="bg-[#eef5fc] w-full border-transparent h-12 py-[22px] rounded-lg">
                                <SelectValue placeholder="Select your state" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ny">New York</SelectItem>
                                <SelectItem value="ca">California</SelectItem>
                                <SelectItem value="tx">Texas</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2 w-full">
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
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-sm overflow-hidden transition-all duration-300">
                <div
                  className={`p-5 md:p-8 flex items-center justify-between cursor-pointer ${currentStep === 2 ? 'border-b border-gray-100' : ''}`}
                  onClick={() => handleStepClick(2)}
                >
                  <h2 className="text-lg md:text-xl font-semibold text-[#0f172a]">Step 2: Upload Document</h2>
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
                      <div className="p-5 md:p-8 pt-0">
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                        />

                        {!selectedFile ? (
                          <div
                            onClick={triggerFileUpload}
                            className={`border-2 border-dashed border-blue-300 bg-[#f8fbff] rounded-2xl h-64 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-50 transition-colors group ${isUploading ? 'opacity-50 pointer-events-none' : ''}`}
                          >
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                              {isUploading ? (
                                <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                              ) : (
                                <CloudUpload className="w-8 h-8" />
                              )}
                            </div>
                            <h3 className="text-[#0f172a] font-semibold mb-2">
                              {isUploading ? 'Uploading...' : 'Click to upload document'}
                            </h3>
                            <p className="text-gray-500 text-sm">PDF, JPEG, or PNG (Max 5MB)</p>
                          </div>
                        ) : (
                          <div className="border-2 border-solid border-blue-100 bg-white rounded-2xl p-6 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                <FileText className="w-6 h-6" />
                              </div>
                              <div>
                                <h3 className="text-[#0f172a] font-semibold break-all">{selectedFile.name}</h3>
                                <p className="text-gray-500 text-sm">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={removeFile}
                              className="text-red-500 hover:text-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="w-5 h-5" />
                            </Button>
                          </div>
                        )}

                        <div className="flex justify-end pt-8">
                          <Button
                            onClick={handleNextStep}
                            disabled={!selectedFile || isUploading}
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
                <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm">
                  <h2 className="text-lg md:text-xl font-semibold text-[#0f172a] mb-6 border-b border-gray-100 pb-4">Document Information</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs text-gray-500 uppercase font-bold tracking-wide">Uploaded File</span>
                        <p className="text-[#0f172a] font-semibold mt-1">{selectedFile?.name || "No file uploaded"}</p>
                        <p className="text-xs text-gray-400 mt-1">Uploaded recently</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <span className="text-xs text-gray-500 uppercase font-bold tracking-wide">Document Type</span>
                        <p className="text-[#0f172a] font-semibold mt-1">
                          {formData.documentType === 'birth-cert' ? 'Birth Certificate' :
                            formData.documentType === 'diploma' ? 'Diploma' : 'Power of Attorney'}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs text-gray-500 uppercase font-bold tracking-wide">Issuing Authority</span>
                        <p className="text-[#0f172a] font-semibold mt-1">{formData.issuingAuthority || "Not specified"}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Applicant Details Card */}
                <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm">
                  <h2 className="text-lg md:text-xl font-semibold text-[#0f172a] mb-6 border-b border-gray-100 pb-4">Applicant Details</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <div>
                      <span className="text-xs text-gray-500 uppercase font-bold tracking-wide">Full Name</span>
                      <p className="text-[#0f172a] font-semibold mt-1">Jonathan Alexander Miller</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 uppercase font-bold tracking-wide">State of Issuance</span>
                      <p className="text-[#0f172a] font-semibold mt-1">
                        {formData.stateOfIssuance === 'ny' ? 'New York' :
                          formData.stateOfIssuance === 'ca' ? 'California' : 'Texas'}
                      </p>
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

                <div className="flex justify-start">
                  <Button
                    onClick={handlePrevStep}
                    variant="ghost"
                    className="text-gray-500 hover:text-[#2563eb] flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" /> Go back and edit
                  </Button>
                </div>
              </motion.div>
            )}

          </div>

          {/* RIGHT COLUMN - Sidebar */}
          <div className="lg:col-span-1">

            {/* NEED HELP WIDGET (Steps 1 & 2) */}
            {currentStep < 3 && (
              <div className="bg-[#0f172a] rounded-2xl md:rounded-3xl p-6 md:p-8 text-white sticky top-10">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Need Help?</h3>
                <div className="space-y-4 mt-6">
                  <p className="text-sm font-light text-blue-100">
                    <span className="block mb-1">support@legalizedocs.io</span>
                    <span className="block">+1 (800) 555-0123</span>
                  </p>
                  <Link href="/contact-us" className="block w-full">
                    <Button className="w-full bg-[#2563eb] hover:bg-blue-600 text-white mt-4 py-6 rounded-xl font-medium flex items-center justify-center gap-2 transition-all">
                      Get In Touch <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            {/* SUMMARY WIDGET (Step 3) */}
            {currentStep === 3 && (
              <div className="space-y-6 sticky top-10">

                {/* Overall Progress */}
                <div className="bg-white rounded-2xl md:rounded-3xl p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-[#0f172a]">Overall Progress</h3>
                    <span className="font-bold text-[#0f172a]">75%</span>
                  </div>
                  <Progress value={75} className="h-3 bg-blue-100" />
                  <p className="text-sm text-gray-500 mt-4 font-medium">Step 3 of 4: Review And Submit</p>
                </div>

                {/* Order Summary */}
                <div className="bg-[#0f172a] rounded-2xl md:rounded-3xl p-6 md:p-8 text-white">
                  <h3 className="text-lg md:text-xl font-semibold mb-6">Order Summary</h3>

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

                  <Button className="w-full bg-[#2563eb] hover:bg-blue-600 text-white py-6 rounded-xl font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/50 mb-3">
                    Submit for Authentication <Send className="w-4 h-4 ml-1" />
                  </Button>
                  <Button
                    onClick={handlePrevStep}
                    variant="outline"
                    className="w-full bg-transparent border-white/20 hover:bg-white/10 text-white py-6 rounded-xl font-medium flex items-center justify-center gap-2 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" /> Go Back
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
