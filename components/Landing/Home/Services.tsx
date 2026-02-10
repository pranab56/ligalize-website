"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ClipboardCheck, FileText, Landmark } from "lucide-react"

const services = [
  {
    title: "Document Review & Processing",
    description: "Review and preparation of documents to determine the appropriate apostille or legalization requirements prior to submission.",
    icon: ClipboardCheck,
    delay: 0.1,
  },
  {
    title: "State & Federal Apostille Services",
    description: "Preparation and submission of apostille requests at the state and U.S. Department of State level, as well as authentication certificates for documents used in non-Hague Convention countries.",
    icon: FileText,
    delay: 0.2,
  },
  {
    title: "Notary Services",
    description: "Remote online notarization (RON) and in-person notary services to support apostille and document legalization requests.",
    icon: Landmark,
    delay: 0.3,
  },
]

export default function Services() {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-medium text-[#0A2540] mb-6"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-[#0A2540]/70 font-medium"
          >
            Document authentication services for international use.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
            >
              <Card className="h-full border-none shadow-xl shadow-primary/5 rounded-[2rem] cursor-pointer hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group p-0">
                <CardContent className="p-8 lg:p-10 flex flex-col h-full">
                  <div className="mb-8 relative">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-primary/10 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-medium text-[#0A2540] mb-4 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-[#0A2540]/60 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-primary/5 to-transparent pointer-events-none -z-0" />
    </section>
  )
}