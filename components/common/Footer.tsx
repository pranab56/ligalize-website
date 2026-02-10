"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFFFF] border-t border-slate-100/50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Section - Takes up 5 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="relative">
                {/* Custom Logo Icon Implementation based on image */}
                <div className="w-10 h-10 border-2 border-[#1e293b] rounded-md flex items-center justify-center relative bg-transparent">
                  <div className="w-6 h-0.5 bg-[#1e293b] absolute top-2 left-1.5" />
                  <div className="w-4 h-0.5 bg-[#1e293b] absolute top-4 left-1.5" />
                  <div className="w-6 h-0.5 bg-[#1e293b] absolute top-6 left-1.5" />
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full">
                    <div className="text-green-600">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-2xl font-bold text-[#0f172a]">
                Legalize<span className="text-[#10b981]">Docs</span>
              </span>
            </Link>

            <p className="text-slate-500 text-base leading-relaxed max-w-sm">
              The gold standard in digital legal authentication and document verification. Secure, fast, and globally compliant.
            </p>
          </motion.div>

          {/* Company Links - Takes up 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 lg:pl-8 space-y-6"
          >
            <h3 className="font-semibold text-[#0f172a] text-lg">Company</h3>
            <ul className="space-y-4">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-500 hover:text-[#10b981] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info - Takes up 4 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <h3 className="font-semibold text-[#0f172a] text-lg">Contact</h3>
            <div className="space-y-6">

              <div className="flex gap-4 items-start group">
                <div className="text-blue-500 mt-1 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <a href="mailto:info@legalizedocs.com" className="block text-slate-500 hover:text-blue-600 transition-colors">info@legalizedocs.com</a>
                  <a href="mailto:processing@legalizedocs.com" className="block text-slate-500 hover:text-blue-600 transition-colors">processing@legalizedocs.com</a>
                  <a href="mailto:billing@legalizedocs.com" className="block text-slate-500 hover:text-blue-600 transition-colors">billing@legalizedocs.com</a>
                </div>
              </div>

              <div className="flex gap-4 items-center group">
                <div className="text-blue-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <a href="tel:+18005550123" className="text-slate-500 hover:text-blue-600 transition-colors">
                  +1 (800) 555-0123
                </a>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="text-blue-500 mt-1 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-slate-500 max-w-[250px]">
                  1200 Avenue of the Americas, New York, NY
                </span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-center items-center text-center">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} LegalVerify Document Authentication Services. All rights reserved. SOC2 Type II Certified.
          </p>
        </div>
      </div>
    </footer>
  );
}
