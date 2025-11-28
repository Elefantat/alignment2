'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sun } from 'lucide-react'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#about', label: 'About Us' },
    { href: '#community', label: 'Community' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-cream-100/95 backdrop-blur-md shadow-warm border-b border-wheat-300/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <Logo className="w-12 h-12 transition-transform duration-300 group-hover:scale-105" />
            <span className="text-2xl font-display font-semibold text-soil-800">
              Alignment
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-5 py-2 text-soil-700 hover:text-sage-600 font-medium transition-all duration-300 group rounded-full"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 rounded-full bg-wheat-200/0 group-hover:bg-wheat-200/50 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link 
              href="#signup" 
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #558B2F, #7CB342)',
                boxShadow: '0 4px 15px rgba(85, 139, 47, 0.3)',
              }}
            >
              <Sun size={18} className="group-hover:rotate-45 transition-transform duration-300" />
              <span>Get Started</span>
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-soil-700 hover:text-sage-600 transition-colors rounded-full hover:bg-wheat-200/50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-cream-100/98 backdrop-blur-md border-b border-wheat-300/50 shadow-warm transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="px-4 py-6 space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 px-4 text-lg text-soil-700 hover:text-sage-600 hover:bg-wheat-200/50 rounded-xl font-medium transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="#signup"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary w-full text-center"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
