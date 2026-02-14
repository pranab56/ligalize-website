"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFFFF] border-t border-slate-100/50 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8 mb-16">

          {/* Brand Section - Takes up full width on mobile, half on tablet, 5 columns on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-5 space-y-6"
          >
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/icons/Logo.png"
                alt="LegalizeDocs Logo"
                width={208}
                height={152}
                className="w-40 sm:w-48 md:w-52 h-auto object-contain"
                priority
              />

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
            className="sm:col-span-1 lg:col-span-3 lg:pl-8 space-y-6"
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
            className="sm:col-span-1 lg:col-span-4 space-y-6"
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
