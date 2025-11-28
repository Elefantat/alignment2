'use client'

import { Play, ChevronDown, Sunrise } from 'lucide-react'
import PhoneMockup from './PhoneMockup'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #E8F4F8 0%, #C5E4ED 15%, #F9EDCC 50%, #E8C86D 85%, #D4A84B 100%)',
        }}
      />
      
      <div 
        className="absolute bottom-0 left-0 right-0 h-[40%] bg-cover bg-bottom opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=600&fit=crop&crop=bottom&q=80')`,
          maskImage: 'linear-gradient(to top, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 60%, transparent 100%)',
        }}
      />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[400px]">
        <div 
          className="w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(232, 200, 109, 0.4) 0%, rgba(212, 168, 75, 0.2) 30%, transparent 60%)',
          }}
        />
      </div>
      
      <div className="absolute inset-0 wheat-pattern opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-20 flex items-center min-h-[calc(100vh-80px)]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-wheat-300 backdrop-blur-sm shadow-sm">
              <Sunrise size={18} className="text-wheat-600" />
              <span className="text-sm text-soil-700 font-medium">Built for those who work the land</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-semibold leading-[1.1] tracking-tight text-soil-800">
              Find Your
              <br />
              <span className="gradient-text-warm">Alignment</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-soil-700 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
              AI built for reflective wellbeing – not just comfort
            </p>
            
            <p className="text-base md:text-lg text-soil-600 max-w-lg mx-auto lg:mx-0">
              A mate in your pocket when the load feels heavy. No judgement, no fuss – just honest support when you need it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="btn-primary text-lg group">
                <span className="flex items-center gap-2">
                  <Sunrise size={20} />
                  Start Your Journey
                </span>
              </button>
              
              <button className="btn-secondary text-lg group">
                <Play size={20} className="mr-2 group-hover:scale-110 transition-transform text-wheat-600" />
                Watch a Farmer&apos;s Story
              </button>
            </div>

            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-6 border-t border-wheat-300/50">
              <div className="text-center">
                <div className="text-3xl font-display font-semibold text-sage-600">24/7</div>
                <div className="text-sm text-soil-600">Always Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-semibold text-sage-600">100%</div>
                <div className="text-sm text-soil-600">Private & Secure</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-semibold text-sage-600">Free</div>
                <div className="text-sm text-soil-600">For Rural Areas</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div 
                className="absolute -inset-12 rounded-full blur-3xl opacity-60"
                style={{
                  background: 'radial-gradient(circle, rgba(212, 168, 75, 0.3) 0%, rgba(196, 92, 38, 0.1) 50%, transparent 70%)',
                }}
              />
              
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-soil-600 uppercase tracking-widest font-medium">Scroll</span>
          <ChevronDown size={24} className="text-wheat-600" />
        </div>
      </div>
    </section>
  )
}
