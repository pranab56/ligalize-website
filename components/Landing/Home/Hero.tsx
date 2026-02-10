"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Hero() {
  const router = useRouter()

  return (
    <section className="relative w-full bg-background overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left Content */}
        <div className="flex-1 w-full  space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-5xl lg:text-6xl font-medium text-[#0A2540] leading-[1.05] tracking-tight mb-8">
              Reliable 
              Document <br />
              Authentication <br />
              Services <br />
            </h1>
            <p className="text-[#0A2540]/70 text-lg lg:text-lg leading-relaxed font-medium">
              Apostille and document legalization services.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <Button
              onClick={() => router.push('/signup')}
              className="bg-primary hover:bg-primary/95 text-white h-12 rounded-lg text-base font-medium transition-all duration-300 w-full sm:w-auto flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Button>

            <Button
              onClick={() => router.push('/quote')}
              variant="outline"
              className="bg-white/50 backdrop-blur-sm border-2 border-primary/20 text-[#0A2540] hover:bg-primary/5 h-12 px-10 rounded-lg text-base font-medium transition-all duration-300 w-full sm:w-auto flex items-center gap-2"
            >
              Request a Quote <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full relative"
        >
          <div className="relative w-full aspect-[4/3] flex items-center justify-center">
            {/* Main Illustration placeholder */}
            <div className="relative w-[90%] h-[90%] transform transition-transform duration-700 hover:scale-105">
              <Image
                src="/images/hero.png"
                alt="Document Authentication Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Decorative Background Circles */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-3xl opacity-50" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}