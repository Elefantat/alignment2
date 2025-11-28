'use client'

import { MessageCircle, Send } from 'lucide-react'

export default function PhoneMockup() {
  return (
    <div className="phone-frame w-[280px] md:w-[320px]">
      <div className="phone-screen">
        {/* Status bar */}
        <div className="bg-gradient-to-r from-sage-500 to-sage-400 px-5 py-2.5 flex justify-between items-center text-white text-xs">
          <span className="font-medium">9:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-4 h-2.5 bg-white/90 rounded-sm" />
          </div>
        </div>
        
        {/* App header */}
        <div className="bg-gradient-to-r from-sage-500 to-sage-400 px-5 py-4 flex items-center gap-4">
          <div className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <MessageCircle size={22} className="text-white" />
          </div>
          <div>
            <p className="text-white font-semibold">Alignment</p>
            <p className="text-white/80 text-sm">Your reflection space</p>
          </div>
        </div>
        
        {/* Chat area */}
        <div className="bg-gradient-to-b from-cream-100 to-white p-4 h-[360px] md:h-[400px] space-y-4">
          {/* AI Message */}
          <div className="flex gap-3">
            <div className="w-9 h-9 bg-sage-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <div className="bg-white border border-wheat-200 rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%] shadow-sm">
              <p className="text-sm text-soil-700 leading-relaxed">
                G&apos;day! I&apos;m here to help you reflect and find some clarity. How are things going on the farm today?
              </p>
            </div>
          </div>
          
          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-sage-500 rounded-2xl rounded-tr-md px-4 py-3 max-w-[85%] shadow-sm">
              <p className="text-sm text-white leading-relaxed">
                It&apos;s been a tough season. The drought&apos;s really wearing on me.
              </p>
            </div>
          </div>
          
          {/* AI Response */}
          <div className="flex gap-3">
            <div className="w-9 h-9 bg-sage-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <div className="bg-white border border-wheat-200 rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%] shadow-sm">
              <p className="text-sm text-soil-700 leading-relaxed">
                That sounds really hard. Working the land when the weather doesn&apos;t cooperate takes a toll. Would you like to talk about what&apos;s weighing on you most?
              </p>
            </div>
          </div>
          
          {/* Typing indicator */}
          <div className="flex gap-3">
            <div className="w-9 h-9 bg-sage-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <div className="bg-white border border-wheat-200 rounded-2xl rounded-tl-md px-4 py-3 shadow-sm">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 bg-wheat-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-wheat-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-terra-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Input area */}
        <div className="bg-white border-t border-wheat-200 px-4 py-4 flex items-center gap-3">
          <input
            type="text"
            placeholder="Share what's on your mind..."
            className="flex-1 text-sm bg-cream-100 border border-wheat-200 rounded-full px-5 py-3 text-soil-700 placeholder-soil-500/50 outline-none focus:border-sage-400 focus:bg-white transition-all duration-300"
            readOnly
          />
          <button className="w-12 h-12 bg-sage-500 rounded-full flex items-center justify-center text-white hover:bg-sage-600 transition-all duration-300 hover:scale-105 shadow-sm">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
