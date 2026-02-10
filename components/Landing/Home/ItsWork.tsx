"use client"

import { motion } from "framer-motion"
import { PackageSearch, ScanFace, ShieldCheck, Upload } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Uploaded",
    description: "Securely upload your digital documents or high-res scans through our portal.",
    delay: 0.1,
  },
  {
    icon: ScanFace,
    title: "Verification",
    description: "Our AI-powered engine checks for watermarks, digital signatures, and metadata.",
    delay: 0.2,
  },
  {
    icon: PackageSearch,
    title: "Processing",
    description: "Legal experts cross-reference with global databases for final certification.",
    delay: 0.3,
  },
  {
    icon: ShieldCheck,
    title: "Download",
    description: "Receive your legally certified document with a unique validation code.",
    delay: 0.4,
  },
]

export default function ItsWork() {
  return (
    <section className="py-20 lg:py-32 bg-[#F5F7FA]">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-medium text-[#0A2540] mb-6"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-[#0A2540]/70 font-semibold"
          >
            Streamlining document validation in four simple steps
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.delay }}
              className="relative"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-3 w-10 h-10 bg-[#1F6AE1] text-white rounded-full flex items-center justify-center font-bold text-sm z-20 shadow-lg shadow-blue-200">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Card */}
              <div className="h-full bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-start text-left">
                {/* Icon Container */}
                <div className="mb-6 w-14 h-14 rounded-xl bg-[#E8F1FB] flex items-center justify-center text-[#1F6AE1] group-hover:bg-[#1F6AE1] group-hover:text-white transition-colors duration-300">
                  <step.icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-medium text-[#0A2540] mb-4">
                  {step.title}
                </h3>

                <p className="text-[#0A2540]/60  leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>

              {/* Connector (Desktop Line) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-5 w-10 h-[2px] bg-gray-100 z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}