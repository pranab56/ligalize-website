
"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section className="py-20 md:py-32 bg-[#F5F7FA] flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-24">

          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[450px] md:max-w-[500px] h-[350px] sm:h-[450px] md:h-[567px] rounded-2xl overflow-hidden bg-blue-50/50">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Man in suit pointing"
                className="object-cover w-full h-full object-top mix-blend-multiply"
                style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
              />
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 w-full bg-white p-6 sm:p-8 rounded-2xl md:rounded-3xl shadow-xl shadow-gray-200/40 border border-gray-100"
          >
            <h2 className="text-2xl sm:text-3xl font-medium text-[#0A2540] mb-6 sm:mb-8">
              Ask us anything!
            </h2>

            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter you full name here..."
                    className="bg-gray-50/50 border-gray-200 focus:bg-white h-12 rounded-lg"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter you email address here..."
                    className="bg-gray-50/50 border-gray-200 focus:bg-white h-12 rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-gray-700 font-medium">Subject</Label>
                <Select>
                  <SelectTrigger className="w-full bg-gray-50/50 border-gray-200 focus:bg-white h-12 py-6 rounded-lg text-gray-500">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="sales">Sales & Billing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="bg-gray-50/50 border-gray-200 focus:bg-white min-h-[150px] resize-none rounded-lg p-4"
                />
              </div>

              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-6 h-12 rounded-lg mt-4 transition-all flex items-center gap-2"
              >
                Send Message <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
