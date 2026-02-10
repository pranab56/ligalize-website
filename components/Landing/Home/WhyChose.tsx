"use client"

import { motion } from "framer-motion"
import { Globe, ShieldCheck, Zap } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: ShieldCheck,
    title: "Bank-Level Security",
    description: "AES-256 bit encryption ensures your sensitive legal data remains private and unalterable.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Results",
    description: "Average verification turnaround time is under 120 seconds for standard legal documents.",
  },
  {
    icon: Globe,
    title: "Globally Recognized",
    description: "Certified for use in 140+ countries under the Hague Apostille Convention.",
  },
]

export default function WhyChoose() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-[#1F6AE1] to-[#0CB8B6]">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Side: Image Grid */}
          <div className="flex-1 w-full grid grid-cols-2 gap-4 h-fit">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[1.4/1] rounded-3xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                alt="Digital Security"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[1.4/1] rounded-3xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop"
                alt="Verification Process"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="col-span-2 relative aspect-[1.8/1] rounded-[2.5rem] overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1500&auto=format&fit=crop"
                alt="Document Shield"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 w-full space-y-12">
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-5xl font-medium text-white leading-tight"
            >
              Why Professionals <br /> Choose LegalizeDocs
            </motion.h2>

            <div className="space-y-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  className="flex items-start gap-6 group"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-[#1F6AE1]" strokeWidth={2.5} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-medium text-white">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 text-lg leading-relaxed max-w-md font-medium">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}