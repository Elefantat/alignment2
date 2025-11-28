'use client'

import Link from 'next/link'
import Logo from './Logo'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Sunrise } from 'lucide-react'

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Demo', href: '#demo' },
    { label: 'FAQ', href: '#faq' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' },
    { label: 'Press', href: '#press' },
  ],
  resources: [
    { label: 'Community', href: '#community' },
    { label: 'Support', href: '#support' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms', href: '#terms' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section with sunset gradient */}
      <div 
        className="relative"
        style={{
          background: 'linear-gradient(180deg, #FBF9F3 0%, #F9EDCC 30%, #E8C86D 70%, #D4A84B 100%)',
        }}
      >
        {/* Wheat field silhouette */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 bg-repeat-x opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 100 Q20 60 20 40 M20 45 Q10 35 15 25 M20 45 Q30 35 25 25 M20 35 Q25 20 20 10' stroke='%233D2317' stroke-width='2' fill='none'/%3E%3Cpath d='M50 100 Q50 70 50 50 M50 55 Q40 45 45 35 M50 55 Q60 45 55 35 M50 45 Q55 30 50 20' stroke='%233D2317' stroke-width='2' fill='none'/%3E%3Cpath d='M80 100 Q80 65 80 45 M80 50 Q70 40 75 30 M80 50 Q90 40 85 30 M80 40 Q85 25 80 15' stroke='%233D2317' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-wheat-300 backdrop-blur-sm text-soil-700 text-sm font-medium mb-8">
              <Sunrise size={16} className="text-wheat-600" />
              Start Today
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-soil-800 mb-6">
              Ready to start your <span className="gradient-text-warm">journey?</span>
            </h2>
            
            <p className="text-xl text-soil-600 mb-10 max-w-xl mx-auto">
              Join thousands of Aussies who are already using Alignment to find clarity and peace of mind.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg">
                Start Your First Yarn
              </button>
              <button className="btn-secondary text-lg">
                Watch Jeremy&apos;s Story
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer - earthy dark */}
      <div className="bg-soil-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                <Logo className="w-12 h-12" variant="light" />
                <span className="text-2xl font-display font-semibold text-cream-100">
                  Alignment
                </span>
              </Link>
              <p className="text-cream-300/70 text-sm mb-8 max-w-xs leading-relaxed">
                AI-supported inner-work platform that meets you where you&apos;re at. A stigma-free way to get clear on what&apos;s going inside.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl bg-soil-700 border border-soil-600 flex items-center justify-center hover:bg-sage-600 hover:border-sage-500 transition-all duration-300"
                  >
                    <social.icon size={18} className="text-cream-200" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Product Links */}
            <div>
              <h3 className="font-display font-semibold text-cream-100 mb-5">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-cream-300/60 hover:text-wheat-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company Links */}
            <div>
              <h3 className="font-display font-semibold text-cream-100 mb-5">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-cream-300/60 hover:text-wheat-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Resources Links */}
            <div>
              <h3 className="font-display font-semibold text-cream-100 mb-5">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-cream-300/60 hover:text-wheat-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="border-t border-soil-700 mt-14 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-cream-300/60">
                <a href="mailto:hello@alignment.com" className="flex items-center gap-2 hover:text-wheat-400 transition-colors">
                  <Mail size={16} />
                  hello@alignment.com
                </a>
                <a href="tel:+1800123456" className="flex items-center gap-2 hover:text-wheat-400 transition-colors">
                  <Phone size={16} />
                  1800 123 456
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  Australia
                </span>
              </div>
              
              <p className="text-sm text-cream-300/40">
                © {new Date().getFullYear()} Alignment. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        
        {/* Crisis support banner */}
        <div className="bg-soil-900 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-cream-300/60">
              If you&apos;re in crisis, please call <a href="tel:131114" className="text-wheat-400 hover:underline font-medium">Lifeline 13 11 14</a> or <a href="tel:1800659467" className="text-wheat-400 hover:underline font-medium">Beyond Blue 1800 659 467</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
