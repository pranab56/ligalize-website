
"use client";

import Banner from "@/components/common/Banner";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, Check, FileText, Stamp, X } from "lucide-react";
import { useRouter } from 'next/navigation';
import FAQ from '../../../components/Landing/Home/FAQ';

export default function ServicesPage() {
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

  const router = useRouter();


  return (
    <div className="bg-[#eef5fc] py-10 flex flex-col gap-20">

      {/* Banner Component */}
      <Banner
        title="Services"
        description="Comprehensive document authentication solutions tailored to your international needs."
        buttonText="Get Started"
        buttonLink="/contact-us"
      />

      <div className="container mx-auto px-4 relative z-10 space-y-16 md:space-y-24">

        {/* Our Services Section */}
        <section className="text-center space-y-10 md:space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 px-4"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a]">Our Services</h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              Document authentication services for international use.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {/* Service 1: Document Review */}
            <motion.div variants={itemVariants}>
              <Card onClick={() => router.push("/services/sfsdfs")} className="h-full border-0 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 md:p-8 text-left h-full flex flex-col">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                    <FileText className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-4">Document Review & Processing</h3>
                  <p className="text-gray-500 leading-relaxed text-sm flex-grow">
                    Review and preparation of documents to determine the appropriate apostille or legalization requirements prior to submission.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service 2: Apostille */}
            <motion.div variants={itemVariants}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 md:p-8 text-left h-full flex flex-col">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                    <Stamp className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-4">State & Federal Apostille Services</h3>
                  <p className="text-gray-500 leading-relaxed text-sm flex-grow">
                    Preparation and submission of apostille requests at the state and U.S. Department of State level, as well as authentication certificates for documents used in non-Hague Convention countries.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service 3: Notary */}
            <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 md:p-8 text-left h-full flex flex-col">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                    <Briefcase className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-4">Notary Services</h3>
                  <p className="text-gray-500 leading-relaxed text-sm flex-grow">
                    Remote online notarization (RON) and in-person notary services to support apostille and document legalization requests.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        {/* Compare Service Tiers Section */}
        <section className="text-center space-y-10 md:space-y-16 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 px-4"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#0f172a]">Compare Service Tiers</h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              Choose the plan that fits your verification volume and legal requirements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-2 sm:px-4"
          >
            <div className="bg-white rounded-2xl md:rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100">
              <div className="w-full overflow-x-auto">
                <div className="min-w-[650px] lg:min-w-full grid grid-cols-3 text-left">

                  {/* Header Row */}
                  <div className="p-5 md:p-8 font-semibold text-base md:text-lg text-[#0f172a] bg-gray-50/50 flex items-center border-b border-gray-100">
                    Features
                  </div>
                  <div className="p-5 md:p-8 font-semibold text-base md:text-lg text-[#0f172a] bg-gray-50/50 text-center border-b border-gray-100">
                    Standard
                  </div>
                  <div className="p-5 md:p-8 font-semibold text-base md:text-lg text-[#0f172a] bg-blue-50/50 text-center border-b border-gray-100">
                    Premium
                  </div>

                  {/* Row 1: Turnaround Time */}
                  <div className="p-5 md:p-8 text-gray-500 font-medium border-b border-gray-50 flex items-center text-sm md:text-base">
                    Turnaround Time
                  </div>
                  <div className="p-5 md:p-8 text-gray-500 text-center border-b border-gray-50 flex items-center justify-center text-sm md:text-base">
                    3-5 Business Days
                  </div>
                  <div className="p-5 md:p-8 text-blue-600 font-medium text-center bg-blue-50/30 border-b border-gray-50 flex items-center justify-center text-sm md:text-base">
                    24-48 Hours
                  </div>

                  {/* Row 2: Certificate Types */}
                  <div className="p-5 md:p-8 text-gray-500 font-medium border-b border-gray-50 flex items-center text-sm md:text-base">
                    Certificate Types
                  </div>
                  <div className="p-5 md:p-8 text-gray-500 text-center border-b border-gray-50 flex items-center justify-center text-sm md:text-base">
                    Digital PDF Only
                  </div>
                  <div className="p-5 md:p-8 text-blue-600 font-medium text-center bg-blue-50/30 border-b border-gray-50 flex items-center justify-center text-sm md:text-base">
                    Digital Physical Apostille
                  </div>

                  {/* Row 3: API Access */}
                  <div className="p-5 md:p-8 text-gray-500 font-medium border-b border-gray-50 flex items-center text-sm md:text-base">
                    API Access
                  </div>
                  <div className="p-5 md:p-8 text-gray-400 text-center border-b border-gray-50 flex items-center justify-center">
                    <X className="w-5 h-5" />
                  </div>
                  <div className="p-5 md:p-8 text-blue-600 text-center bg-blue-50/30 border-b border-gray-50 flex items-center justify-center">
                    <div className="bg-blue-600 rounded text-white p-0.5"> <Check className="w-3.5 h-3.5" strokeWidth={3} /> </div>
                  </div>

                  {/* Row 4: Support Tier */}
                  <div className="p-5 md:p-8 text-gray-500 font-medium border-b border-gray-50 flex items-center text-sm md:text-base">
                    Support Tier
                  </div>
                  <div className="p-5 md:p-8 text-gray-500 text-center border-b border-gray-50 flex items-center justify-center text-sm md:text-base">
                    Email Support
                  </div>
                  <div className="p-5 md:p-8 text-blue-600 font-medium text-center bg-blue-50/30 border-b border-gray-50 flex items-center justify-center text-sm md:text-base">
                    Priority 24/7 Phone & Slack
                  </div>

                  {/* Row 5: Volume Discounts */}
                  <div className="p-5 md:p-8 text-gray-500 font-medium flex items-center text-sm md:text-base">
                    Volume Discounts
                  </div>
                  <div className="p-5 md:p-8 text-gray-400 text-center flex items-center justify-center">
                    <X className="w-5 h-5" />
                  </div>
                  <div className="p-5 md:p-8 text-blue-600 text-center bg-blue-50/30 flex items-center justify-center">
                    <div className="bg-blue-600 rounded text-white p-0.5"> <Check className="w-3.5 h-3.5" strokeWidth={3} /> </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </section>
        <FAQ />
      </div>
    </div>
  );
}
