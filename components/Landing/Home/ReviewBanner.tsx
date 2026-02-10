"use client"

import { Star } from "lucide-react"
import Link from "next/link"

export default function ReviewBanner() {
  return (
    <div className="w-full bg-[#fdfbf2] border-b border-[#e5e5e5] py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-sm text-[#1e1e1e]">

          {/* Group 1: Text */}
          <div className="flex items-center gap-2">
            <span className="text-[#191919]">Our customers say</span>
            <span className="font-bold text-[#191919]">Excellent</span>
          </div>

          {/* Group 2: Stars */}
          <div className="flex gap-1 my-2 md:my-0">
            {[1, 2, 3, 4, 5].map((star) => (
              <div key={star} className="bg-[#00B67A] p-[6px] rounded-[2px] flex items-center justify-center">
                <Star className="w-4 h-4 text-white fill-white stroke-none" />
              </div>
            ))}
          </div>

          {/* Group 3: Rating & Reviews */}
          <div className="flex flex-wrap justify-center items-center gap-1 text-[#191919]">
            <span>4.8 out of 5 based on</span>
            <Link
              href="#"
              className="underline font-semibold hover:text-[#00B67A] transition-colors decoration-1 underline-offset-2"
            >
              749 reviews
            </Link>
          </div>

          {/* Group 4: Trustpilot Logo */}
          <div className="flex items-center gap-2 mt-2 md:mt-0 md:ml-2">
            <Star className="w-6 h-6 text-[#00B67A] fill-[#00B67A] stroke-none" />
            <span className="font-bold text-base text-[#191919]">Trustpilot</span>
          </div>

        </div>
      </div>
    </div>
  )
}
