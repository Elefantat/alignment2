'use client'

import { Users, Brain, Sparkles, Target, Headphones, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Users,
    title: 'Connect',
    description: 'Join a community who gets it',
    color: 'sage',
  },
  {
    icon: Brain,
    title: 'Reflect',
    description: 'Have a yarn with the AI',
    color: 'wheat',
  },
  {
    icon: Sparkles,
    title: 'Grow',
    description: 'Gain insights about yourself',
    color: 'terra',
  },
  {
    icon: Target,
    title: 'Integrate',
    description: 'Set practical goals',
    color: 'sky',
  },
  {
    icon: Headphones,
    title: 'Support',
    description: '24/7 when you need it',
    color: 'sage',
  },
]

const colorClasses: Record<string, { bg: string; icon: string; border: string }> = {
  sage: { bg: 'bg-sage-100', icon: 'text-sage-600', border: 'border-sage-200' },
  wheat: { bg: 'bg-wheat-100', icon: 'text-wheat-600', border: 'border-wheat-200' },
  terra: { bg: 'bg-terra-100', icon: 'text-terra-500', border: 'border-terra-200' },
  sky: { bg: 'bg-sky-100', icon: 'text-sky-500', border: 'border-sky-200' },
}

export default function HowItWorks() {
  return (
    <section id="features" className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Subtle texture */}
      <div className="absolute inset-0 wheat-pattern opacity-20" />
      
      {/* Decorative wheat stalks on sides */}
      <div className="absolute left-0 top-1/4 w-20 h-40 opacity-10">
        <svg viewBox="0 0 80 160" fill="none" className="w-full h-full">
          <path d="M40 160 Q40 80 40 20" stroke="#D4A84B" strokeWidth="3" />
          <ellipse cx="25" cy="40" rx="12" ry="20" fill="#D4A84B" transform="rotate(-15 25 40)" />
          <ellipse cx="55" cy="40" rx="12" ry="20" fill="#D4A84B" transform="rotate(15 55 40)" />
          <ellipse cx="40" cy="25" rx="10" ry="18" fill="#D4A84B" />
        </svg>
      </div>
      <div className="absolute right-0 top-1/3 w-20 h-40 opacity-10 transform scale-x-[-1]">
        <svg viewBox="0 0 80 160" fill="none" className="w-full h-full">
          <path d="M40 160 Q40 80 40 20" stroke="#D4A84B" strokeWidth="3" />
          <ellipse cx="25" cy="40" rx="12" ry="20" fill="#D4A84B" transform="rotate(-15 25 40)" />
          <ellipse cx="55" cy="40" rx="12" ry="20" fill="#D4A84B" transform="rotate(15 55 40)" />
          <ellipse cx="40" cy="25" rx="10" ry="18" fill="#D4A84B" />
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-sage-100 border border-sage-200 text-sage-600 text-sm font-medium mb-6">
            How It Works
          </span>
          <h2 className="section-heading mb-6">
            Simple as a morning cuppa
          </h2>
          <p className="text-xl text-soil-600 max-w-2xl mx-auto">
            Five straightforward steps to understanding yourself better and finding your balance
          </p>
        </div>
        
        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-[72px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-sage-200 via-wheat-300 via-terra-200 to-sage-200 rounded-full" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const colors = colorClasses[step.color]
              return (
                <div 
                  key={step.title}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="card-warm p-6 text-center h-full">
                    {/* Icon container */}
                    <div className="relative mb-5 mx-auto w-fit">
                      <div className={`w-[72px] h-[72px] rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                        <step.icon className={`w-8 h-8 ${colors.icon}`} strokeWidth={1.5} />
                      </div>
                      
                      {/* Step number */}
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-wheat-500 text-white flex items-center justify-center shadow-sm">
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-display font-semibold text-soil-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-soil-600">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow connector for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-[72px] -right-2 w-4 items-center justify-center z-10">
                      <ArrowRight size={16} className="text-wheat-400" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
