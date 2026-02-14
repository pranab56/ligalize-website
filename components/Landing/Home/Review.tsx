"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"
import "swiper/css"
import "swiper/css/autoplay"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const reviews = [
  {
    content: "LegalizeDocs has cut our contract processing time by 70%. It's the most reliable platform we've used in a decade of practice.",
    author: "David Chen",
    role: "SENIOR PARTNER, GLOBAL LAW",
    image: "https://i.pravatar.cc/150?u=david",
  },
  {
    content: "LegalizeDocs has cut our contract processing time by 70%. It's the most reliable platform we've used in a decade of practice.",
    author: "Anna Smith",
    role: "HEAD OF LEGAL, TECH CORP",
    image: "https://i.pravatar.cc/150?u=anna",
  },
  {
    content: "LegalizeDocs has cut our contract processing time by 70%. It's the most reliable platform we've used in a decade of practice.",
    author: "James Wilson",
    role: "DIRECTOR, FUTURE VENTURES",
    image: "https://i.pravatar.cc/150?u=james",
  },
]

// Duplicate reviews to ensure smooth infinite loop
const carouselReviews = [...reviews, ...reviews]

export default function Review() {
  return (
    <section className="py-20 lg:py-32 bg-[#E8F1FB] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-12 lg:mb-24 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0A2540] mb-4"
          >
            Trusted by Legal Experts
          </motion.h2>
        </div>

        {/* Reviews Carousel */}
        <div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            speed={1000}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="!pb-10 !px-4"
          >
            {carouselReviews.map((review, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div
                  className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-xl shadow-gray-200/50 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-6 h-6 text-[#FFC107] fill-[#FFC107]" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-[#0A2540]/70 text-lg leading-relaxed mb-8 font-medium">
                      &quot;{review.content}&quot;
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 border border-gray-100">
                      <Image
                        src={review.image}
                        alt={review.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0A2540] text-xl mb-0.5">
                        {review.author}
                      </h4>
                      <p className="text-[12px] font-bold text-[#0A2540]/50 tracking-wider">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  )
}