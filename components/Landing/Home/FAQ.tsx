"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Minus, Plus } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What is an apostille?",
    answer: "An apostille is a certification that verifies the authenticity of a document for use in countries that are members of the Hague Apostille Convention.",
  },
  {
    question: "What is the difference between an apostille and authentication?",
    answer: "Apostilles are for countries that are part of the Hague Convention, while authentications (and legalizations) are for countries that are not members of the convention.",
  },
  {
    question: "How do I know if my document requires a state or federal apostille?",
    answer: "Generally, documents issued by a state (like birth certificates or notarized documents) require a state apostille, while federal documents (like FBI background checks) require a federal apostille from the U.S. Department of State.",
  },
  {
    question: "What types of documents do you handle?",
    answer: "We handle a wide range of documents including birth certificates, wedding certificates, diplomas, transcripts, power of attorney, corporate documents, and more.",
  },
  {
    question: "What if I'm not sure which service I need?",
    answer: "Our experts can review your documents and destination country to determine exactly what level of authentication is required for your specific situation.",
  },
  {
    question: "How long does the process take?",
    answer: "Timeline varies depending on the type of document and the issuing authority, but we offer expedited services to ensure your documents are processed as quickly as possible.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl  font-medium text-[#0A2540]"
          >
            Questions about service
          </motion.h2>
        </div>

        {/* FAQs List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden p-0"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-8 py-6 md:py-6 cursor-pointer flex items-center justify-between text-left group transition-all"
                >
                  <span className={`text-lg md:text-xl font-medium transition-colors ${isOpen ? 'text-[#0A2540]' : 'text-[#0A2540]/80'}`}>
                    {faq.question}
                  </span>

                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#1F6AE1] text-white' : 'bg-[#E8F1FB] text-[#1F6AE1]'
                    }`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="p-0"
                    >
                      <div className="px-8 pb-6 md:pb-6">
                        <p className="text-[#0A2540]/60 text-base md:text-md leading-relaxed font-medium max-w-2xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
