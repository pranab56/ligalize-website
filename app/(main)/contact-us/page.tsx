"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Banner from '../../../components/common/Banner';

const formSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    toast.success("Message sent successfully!");
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="bg-[#eef5fc] min-h-screen py-20">

      {/* Hero Header Section */}
      <Banner title="Get in Touch with Our Legal Experts" description="Our team is here to help you navigate document authentication, security protocols, and legal compliance." buttonText="View FAQs" buttonLink="/faqs" />

      <div className="container mx-auto pt-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left Content - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-blue-900/5"
          >
            <h2 className="text-3xl font-medium text-[#0f172a] mb-8">Ask us anything!</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-gray-600 font-medium">Full Name <span className="text-red-500">*</span></Label>
                  <Input
                    id="fullName"
                    placeholder="Enter you full name here..."
                    className={`bg-[#f0f4f8] border-transparent focus:bg-white focus:border-blue-200 h-12 rounded-xl transition-all ${errors.fullName ? "border-red-500 focus:border-red-500" : ""}`}
                    {...register("fullName")}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-600 font-medium">Email Address <span className="text-red-500">*</span></Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter you email address here..."
                    className={`bg-[#f0f4f8] border-transparent focus:bg-white focus:border-blue-200 h-12 rounded-xl transition-all ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
                    {...register("email")}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-gray-600 font-medium">Subject <span className="text-red-500">*</span></Label>
                <Controller
                  name="subject"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className={`bg-[#f0f4f8] border-transparent focus:bg-white focus:border-blue-200 h-12 rounded-xl transition-all text-gray-500 py-[22px] w-full ${errors.subject ? "border-red-500 focus:border-red-500" : ""}`}>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="sales">Sales & Billing</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-600 font-medium">Message <span className="text-red-500">*</span></Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className={`bg-[#f0f4f8] border-transparent focus:bg-white focus:border-blue-200 min-h-[180px] resize-none rounded-xl p-4 transition-all ${errors.message ? "border-red-500 focus:border-red-500" : ""}`}
                  {...register("message")}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-[#2563eb] hover:bg-blue-700 text-white rounded-xl px-8 py-6 font-medium mt-4 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/20 flex items-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"} <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </motion.div>

          {/* Right Content - Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-5 h-full pt-10 lg:pl-8 space-y-10"
          >
            <h2 className="text-3xl font-medium text-[#0f172a] mb-8">Direct Contact</h2>

            <div className="space-y-8">
              {/* Address Item */}
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-[#eff6ff] flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-[#1e293b]">Office Address</h3>
                  <p className="text-gray-500 leading-relaxed max-w-[250px]">
                    1200 Avenue of the Americas<br />
                    New York, NY 10036
                  </p>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-[#eff6ff] flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-[#1e293b]">Phone Number</h3>
                  <p className="text-gray-500 font-medium">+1 (800) 123-4567</p>
                  <p className="text-gray-400 text-xs tracking-wide uppercase font-medium">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>

              {/* Email Item */}
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-[#eff6ff] flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-[#1e293b]">Email Address</h3>
                  <a href="mailto:info@legalizedocs.com" className="text-gray-500 hover:text-blue-600 transition-colors block">
                    info@legalizedocs.com
                  </a>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;