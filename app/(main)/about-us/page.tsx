
"use client";

import Banner from "@/components/common/Banner";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FileText, Landmark, Zap } from "lucide-react";
import FAQ from '../../../components/Landing/Home/FAQ';

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="flex flex-col gap-20 py-20">
      {/* Optional: Consistent Banner across pages */}
      <Banner
        title="Redefining Trust in the Digital Age"
        description="Global, secure, and legally-binding document authentication built for the modern professional landscape."
        buttonText="Explore Our Solutions"
        buttonLink="/contact-us"
      />

      <div className="container mx-auto max-w-6xl space-y-8">

        {/* Our Mission Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <Card className="border-0 shadow-lg shadow-blue-900/5 overflow-hidden">
            <CardContent className="p-10 md:p-14 text-center bg-white rounded-xl">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Our Mission</h2>
              <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed text-lg">
                To provide secure, accessible, and legally-binding authentication globally, ensuring every document is verified with absolute integrity and technological excellence.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="bg-[#eff6ff] rounded-2xl p-10 md:p-14 border border-blue-50 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-blue-100/50">

              <div className="text-center px-4 pt-4 md:pt-0">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">1M+</div>
                <div className="text-gray-500 font-medium tracking-wide text-sm md:text-base">DOCUMENTS VERIFIED</div>
              </div>

              <div className="text-center px-4 pt-8 md:pt-0">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-500 font-medium tracking-wide text-sm md:text-base">COUNTRIES SUPPORTED</div>
              </div>

              <div className="text-center px-4 pt-8 md:pt-0">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-500 font-medium tracking-wide text-sm md:text-base">SECURITY RATE</div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
      {/* Core Principles Section */}
      <div className="pt-8 container mx-auto ">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-medium text-[#0f172a] text-center mb-12"
        >
          Core Principles
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Integrity Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">Integrity</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Unwavering ethical standards in every verification process we conduct.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Innovation Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">Innovation</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Cutting-edge verification technology that evolves with the digital landscape.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Security Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                  <Landmark className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">Security</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Military-grade encryption protecting your most sensitive legal documents.
                </p>
              </CardContent>
            </Card>
          </motion.div>

        </motion.div>
      </div>
      <FAQ />
    </div>
  );
}