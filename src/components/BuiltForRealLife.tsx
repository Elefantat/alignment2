'use client'

import Image from 'next/image'

const lenses = [
  { title: 'Rural & Agricultural', description: 'Supports the pressures, isolation, identity load, and realities of working the land.', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop', highlight: true },
  { title: 'FIFO & Mining', description: 'Understands the emotional whiplash of swings, distance, fatigue, and relationship strain.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop' },
  { title: 'Migrant', description: 'Supports belonging, identity, cultural transition, and emotional strength in new environments.', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop' },
  { title: 'Corporate', description: 'Helps leaders and teams manage pressure, performance identity, and emotional load.', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop' },
  { title: 'Students & Young Adults', description: 'Guides identity formation, emotional literacy, uncertainty, and life transitions.', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop' },
  { title: 'Loneliness & Aged Care', description: 'Provides gentle support for isolation, life transitions, and connection in later life.', image: 'https://images.unsplash.com/photo-1516733968668-dbdce39c4651?w=600&h=400&fit=crop' },
  { title: 'First Nations', description: 'Grounded in cultural safety, community, Country, strength, and lived experience.', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop' },
]

export default function BuiltForRealLife() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #FBF9F3 0%, #F5F0E6 50%, #F9EDCC 100%)' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-terra-100 border border-terra-200 text-terra-500 text-sm font-medium mb-6">Understands Your World</span>
          <h2 className="section-heading mb-6">Built For Real Life</h2>
          <p className="text-xl text-soil-600 max-w-2xl mx-auto">Alignment speaks your language and understands the unique challenges of your lifestyle</p>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="mb-8">
              <div className="card-warm overflow-hidden border-2 border-sage-300">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto min-h-[280px]">
                    <Image src={lenses[0].image} alt={lenses[0].title} fill className="object-cover" />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-600 text-sm font-medium mb-4 w-fit">
                      <span className="w-2 h-2 rounded-full bg-sage-500" />Primary Focus
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-semibold text-soil-800 mb-4">{lenses[0].title}</h3>
                    <p className="text-lg text-soil-600 leading-relaxed mb-6">{lenses[0].description}</p>
                    <p className="text-soil-500 leading-relaxed">Whether you&apos;re dealing with drought, market pressures, succession planning, or just the isolation that comes with remote life – Alignment gets it. Built with input from real farmers across Australia.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {lenses.slice(1).map((lens) => (
                <div key={lens.title} className="card-warm overflow-hidden group">
                  <div className="relative h-40 overflow-hidden">
                    <Image src={lens.image} alt={lens.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-soil-800/60 via-soil-800/20 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-display font-semibold text-soil-800 mb-2">{lens.title}</h3>
                    <p className="text-sm text-soil-600 leading-relaxed">{lens.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
