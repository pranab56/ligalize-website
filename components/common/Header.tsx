"use client"

import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Image
                src="/icons/Logo.png"
                alt="LegalizeDocs Logo"
                width={208}
                height={152}
                className="w-28 sm:w-36 md:w-52 h-auto object-contain"
                priority
              />
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
            className="md:hidden p-2 text-[#0A2540] hover:bg-gray-100 rounded-lg transition-colors z-[60]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay & Content - Moved outside motion.header to avoid fixed position clipping */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[40]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] sm:w-[320px] bg-white z-[50] flex flex-col p-6 shadow-2xl overflow-y-auto"
            >
              {/* Branding in Menu */}
              <div className="flex items-center justify-between mb-10 pt-2">
                <Image
                  src="/icons/Logo.png"
                  alt="LegalizeDocs Logo"
                  width={1000}
                  height={1000}
                  className=" "
                />
              </div>

              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-semibold py-3 border-b border-gray-50 flex items-center justify-between group ${pathname === item.href ? 'text-primary' : 'text-[#0A2540]'
                      }`}
                  >
                    {item.name}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col gap-3 mt-auto pt-10">
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
          </>
        )}
      </AnimatePresence>
    </>
  )
}

