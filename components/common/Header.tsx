"use client"

import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
  ]

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="container mx-auto px-4 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9">
            <Image
              src="/icons/Logo.png"
              alt="LegalizeDocs Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex items-center text-xl font-bold tracking-tight">
            <span className="text-[#0A2540]">Legalize</span>
            <span className="text-[#2DC766]">Docs</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[15px] font-semibold transition-all duration-200 hover:text-primary ${isActive ? 'text-primary' : 'text-[#0A2540]'
                  }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            onClick={() => router.push('/login')}
            variant="outline"
            className="h-11 px-7 border-primary border-[1.5px] text-[#0A2540] hover:bg-primary/5 font-bold rounded-xl transition-all duration-200 flex items-center gap-2"
          >
            Login <ArrowRight className="w-4 h-4" />
          </Button>

          <Button
            onClick={() => router.push('/signup')}
            className="h-11 px-7 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-primary/20 flex items-center gap-2"
          >
            Sign Up <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#0A2540] hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="fixed inset-0 top-20 bg-white z-40 md:hidden flex flex-col p-6 gap-8 shadow-xl"
            >
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-semibold py-2 border-b border-gray-50 ${pathname === item.href ? 'text-primary' : 'text-[#0A2540]'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col gap-3">
                <Button
                  onClick={() => { router.push('/login'); setIsOpen(false); }}
                  variant="outline"
                  className="w-full h-12 border-primary text-[#0A2540] font-bold rounded-xl"
                >
                  Login <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  onClick={() => { router.push('/signup'); setIsOpen(false); }}
                  className="w-full h-12 bg-primary text-white font-bold rounded-xl"
                >
                  Sign Up <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

