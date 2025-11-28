'use client'

import Image from 'next/image'
import { Heart, Search, Puzzle, Shield, Settings, ArrowRight } from 'lucide-react'

const steps = [
  { icon: Heart, title: 'Feel', color: 'terra' },
  { icon: Search, title: 'Reflect', color: 'wheat' },
  { icon: Puzzle, title: 'Recognize\nPattern', color: 'sage' },
  { icon: Shield, title: 'Reclaim\nChoice', color: 'sky' },
  { icon: Settings, title: 'Integrate\nChange', color: 'sage' },
]

const colorClasses: Record<string, { bg: string; border: string }> = {
  terra: { bg: 'bg-terra-100', border: 'border-terra-300' },
  wheat: { bg: 'bg-wheat-100', border: 'border-wheat-300' },
  sage: { bg: 'bg-sage-100', border: 'border-sage-300' },
  sky: { bg: 'bg-sky-100', border: 'border-sky-300' },
}

export default function AlignmentSections() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=1080&fit=crop&q=80')` }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(251, 249, 243, 0.95) 0%, rgba(245, 240, 230, 0.9) 50%, rgba(251, 249, 243, 0.95) 100%)' }} />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
        
        {/* Meet the Founder Card */}
        <div className="card-warm p-8 md:p-10 border border-wheat-200">
          <div className="flex flex-col-reverse md:flex-row gap-8 items-center md:items-start">
            <div className="flex-1">
              <div className="mb-4 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-wheat-100 border border-wheat-200 text-wheat-600 text-xs font-medium mb-3">Meet the Founder</span>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-soil-800 mb-1">Jeremy Walker</h3>
                <p className="text-sage-600 font-medium">Founder, Beneath the Surface</p>
              </div>
              <div className="space-y-4 text-soil-600 leading-relaxed text-sm md:text-base">
                <p>I grew up in a farming family in regional Western Australia and began working on a relative&apos;s property straight after school. At 22, I took on clearing and farming a 6,000-acre ex-bluegum plantation—a demanding role that quickly became my identity. My self-worth rose and fell with the seasons, and eventually the pressure became impossible to ignore.</p>
                <p>Through therapy, psychology, and long periods alone—especially after my wife and daughter moved to Perth—I began to understand the habits and pain driving my behaviour. Leaving the farm marked a shift toward rebuilding with clarity. Since then, I&apos;ve focused on studying human behaviour through Dr Shefali Tsabary&apos;s Conscious Psychology Institute and a Diploma in Psychotherapy and Counselling. That journey led to Beneath the Surface, a platform designed to help people reflect honestly and explore what&apos;s happening beneath everyday life.</p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-warm">
                <Image src="/founder.png" alt="Jeremy Walker - Founder" width={176} height={176} className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>

        {/* How Alignment Works Card */}
        <div className="card-warm p-8 md:p-12 border border-wheat-200">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-wheat-100 border border-wheat-200 text-wheat-600 text-sm font-medium mb-6">The Journey</span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-soil-800 mb-6">How <span className="gradient-text-warm">Alignment</span> Works</h2>
            </div>
            <div className="space-y-4 text-soil-600 text-lg leading-relaxed">
              <p>Alignment listens to your reality and adapts to your world. It helps you understand what&apos;s sitting beneath your emotions, recognise patterns, and make sense of your inner world in a grounded, practical way.</p>
              <p>When you&apos;re ready, Alignment connects you to people and services that fit your situation. Its Resource Library provides tailored recommendations that surface the right tools, stories, and guidance for what you&apos;re facing.</p>
            </div>
            <div className="pt-6">
              <div className="flex flex-wrap items-start justify-center gap-3 md:gap-2">
                {steps.map((step, index) => {
                  const colors = colorClasses[step.color]
                  return (
                    <div key={step.title} className="flex items-center">
                      <div className="flex flex-col items-center group cursor-pointer">
                        <div className={`w-16 h-16 md:w-18 md:h-18 rounded-2xl ${colors.bg} border-2 ${colors.border} flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                          <step.icon className="w-7 h-7 md:w-8 md:h-8 text-soil-700" strokeWidth={1.5} />
                        </div>
                        <span className="mt-3 text-xs md:text-sm font-medium text-soil-600 text-center whitespace-pre-line leading-tight">{step.title}</span>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="hidden md:flex mx-2 md:mx-3 items-center text-wheat-400 mt-[-20px]">
                          <ArrowRight size={18} />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Social Impact Card */}
        <div className="card-warm p-8 md:p-12 border border-sage-200">
          <div className="space-y-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-sage-100 border border-sage-200 text-sage-600 text-sm font-medium mb-6">Our Commitment</span>
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-soil-800">Social Impact & <span className="gradient-text-earth">Giving Back</span></h2>
              </div>
              <div className="hidden md:block flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-wheat-100 border border-wheat-200 flex items-center justify-center">
                  <svg viewBox="0 0 60 60" className="w-12 h-12">
                    <path d="M30 55 Q30 30 30 10" stroke="#D4A84B" strokeWidth="3" fill="none" />
                    <ellipse cx="20" cy="18" rx="8" ry="14" fill="#D4A84B" opacity="0.6" transform="rotate(-15 20 18)" />
                    <ellipse cx="40" cy="18" rx="8" ry="14" fill="#D4A84B" opacity="0.6" transform="rotate(15 40 18)" />
                    <ellipse cx="30" cy="12" rx="6" ry="12" fill="#D4A84B" opacity="0.8" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-5 text-soil-600 text-lg leading-relaxed">
              <p>Alignment was born from lived experience — a journey through isolation, pressure, and honest self-reflection that reshaped how I understand mental health. That personal shift became a mission to make emotional awareness accessible to all Australians, especially those who carry the load quietly.</p>
              <p>Our heart sits with regional and remote communities, and with Aboriginal and Torres Strait Islander communities, where the need for support is greatest. Suicide rates in very remote areas are more than double those of major cities, and First Nations people face rates nearly three times higher. These realities guide our commitment.</p>
              <div className="my-8 p-6 rounded-2xl bg-gradient-to-r from-sage-100 to-wheat-100 border border-sage-200">
                <div className="flex items-center gap-6">
                  <div className="text-5xl md:text-6xl font-display font-semibold text-sage-600">10%</div>
                  <p className="text-soil-700">of annual net revenue goes to our Access & Outreach Fund, offering <strong>free access</strong> to rural and remote communities</p>
                </div>
              </div>
              <p>It&apos;s more than a business model — it&apos;s a promise to give back. Every reflection shared with Alignment helps build a wider ecosystem of care, and every dollar returned through our fund helps someone in a remote town or culturally rich community feel seen, supported, and connected.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
