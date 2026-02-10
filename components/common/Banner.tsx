"use client";

import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Banner({ title, description, buttonText, buttonLink }: { title: string, description: string, buttonText: string, buttonLink: string }) {
  return (
    <div className="relative w-full h-[400px] container mx-auto rounded-2xl  md:h-[500px]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#0A2540B8]/80 w-full h-full z-10 rounded-2xl" />
      <img
        src="/images/banner/image.jpg"
        alt="Contact Header Background"
        className="w-full h-full object-cover rounded-2xl"
      />

      {/* Content Container */}
      <div className="absolute inset-0 z-20 container mx-auto px-4 flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-light"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href={buttonLink}>
            <Button className="bg-[#2563eb] hover:bg-blue-700 text-white rounded-lg px-8 py-6 text-base font-medium transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg hover:shadow-blue-500/25">
              {buttonText} <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}