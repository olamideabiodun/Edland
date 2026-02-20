'use client';

import { Waitlist } from '@clerk/nextjs';
import Footer from '../../components/home/Footer';
import Header from '../../components/home/Header';
import {
  BarChart3,
  Calendar,
  FileText,
  Gauge,
  Inbox,
  MessageCircle,
  School,
  Sparkles,
  Users
} from 'lucide-react';
import type React from 'react';
import { useEffect, useState } from 'react';
import Script from 'next/script';

const slides = [
  {
    title: 'Verified Skill Identity',
    subtitle:
      'Every assignment, project, and endorsement becomes real, verifiable proof. Employers see evidence, not empty claims.',
    features: [
      { icon: FileText, text: 'Tamper-Proof Records' },
      { icon: School, text: 'Institutional Authentication' },
      { icon: Users, text: 'Employer-Ready Proof' },
    ]
  },
  {
    title: 'Living Portfolio Builder',
    subtitle:
      'Your portfolio grows automatically as you learn. By graduation, you have a complete talent graph showing who you have become.',
    features: [
      { icon: FileText, text: 'Auto-Generated Portfolio' },
      { icon: Calendar, text: 'Timestamped Achievements' },
      { icon: BarChart3, text: 'Complete Talent Graph' },
    ]
  },
  {
    title: 'Organized Learning Spaces',
    subtitle:
      'All your lectures, files, teams, chats, and tasks in one structured hub. No more scattered WhatsApp groups.',
    features: [
      { icon: Inbox, text: 'Structured Course Hubs' },
      { icon: MessageCircle, text: 'Team Collaboration' },
      { icon: Sparkles, text: 'Everything Builds Career Proof' },
    ]
  },
  {
    title: 'Real-Time Skill Tracking',
    subtitle:
      'Watch your competency graph update with real abilities, not self-reported claims. See exactly how you compare to industry standards.',
    features: [
      { icon: BarChart3, text: 'Live Competency Graph' },
      { icon: Gauge, text: 'Industry Benchmarks' },
      { icon: Users, text: 'Student Identity Layer' },
    ]
  }
];

interface ActivityIndicatorProps {
	isActive: boolean;
}

const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({ isActive }) => (
  <div
    className={`w-2 h-2 rounded-full transition-all duration-300 ${
      isActive ? 'bg-blue-300' : 'bg-white/30'
    }`}
  />
);


export default function WaitlistPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100); // slight delay to ensure layout is ready
      }
    }
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <div className='min-h-screen relative font-poppins'>
      {/* Google tag (gtag.js) */}
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-49F66DF463" async />
      <Script id="ga-init-waitlist" strategy="afterInteractive">{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);} 
  gtag('js', new Date());

  gtag('config', 'G-49F66DF463');
`}</Script>
      {/* header */}
      <Header />

      <div className='grid grid-cols-1 md:grid-cols-2 min-h-screen'>
        {/* Left side - Animated content */}
        <div className='bg-blue-600 text-white px-6 md:px-16 py-12 md:py-24 flex flex-col justify-center relative overflow-hidden'>
          {/* Background decorative elements */}
          <div className='absolute inset-0 z-0 overflow-hidden'>
            {/* Gradient orbs */}
            <div
              className='absolute inset-0'
              style={{
                backgroundImage: `radial-gradient(circle at 20% 80%, rgba(164, 182, 255, 0.15) 0%, transparent 50%),
                                 radial-gradient(circle at 80% 20%, rgba(164, 182, 255, 0.15) 0%, transparent 50%),
                                 radial-gradient(circle at 60% 60%, rgba(255, 255, 255, 0.05) 0%, transparent 40%)`
              }}
            />

            {/* Floating geometric shapes */}
            <div className='absolute top-1/4 left-1/4 w-16 h-16 border border-white/10 rounded-full animate-pulse' />
            <div
              className='absolute top-1/3 right-1/4 w-8 h-8 bg-blue-300/10 rounded-lg rotate-45 animate-bounce'
              style={{ animationDuration: '3s' }}
            />
            <div className='absolute bottom-1/3 left-1/6 w-12 h-12 border-2 border-white/8 rounded-lg rotate-12' />
            <div
              className='absolute top-1/2 right-1/6 w-6 h-6 bg-white/5 rounded-full animate-pulse'
              style={{ animationDelay: '1s' }}
            />
            <div className='absolute bottom-1/4 right-1/3 w-10 h-10 border border-blue-300/15 rounded-full' />

            {/* Grid pattern overlay */}
            <div
              className='absolute inset-0 opacity-5'
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />

            {/* Animated dots */}
            <div
              className='absolute top-1/5 left-1/5 w-2 h-2 bg-blue-300/20 rounded-full animate-ping'
              style={{ animationDuration: '2s' }}
            />
            <div
              className='absolute bottom-1/5 right-1/5 w-3 h-3 bg-white/10 rounded-full animate-ping'
              style={{ animationDuration: '3s', animationDelay: '0.5s' }}
            />
            <div
              className='absolute top-2/3 left-1/3 w-1 h-1 bg-blue-200/30 rounded-full animate-pulse'
              style={{ animationDelay: '2s' }}
            />

            {/* Curved lines */}
            <svg
              className='absolute top-0 left-0 w-full h-full opacity-10'
              viewBox='0 0 400 400'
            >
              <path
                d='M 50 200 Q 200 50 350 200'
                stroke='rgba(255,255,255,0.1)'
                strokeWidth='2'
                fill='none'
              />
              <path
                d='M 0 300 Q 200 150 400 300'
                stroke='rgba(164,182,255,0.1)'
                strokeWidth='1'
                fill='none'
              />
            </svg>
          </div>

          {/* Content container */}
          <div className='relative z-10 mt-16'>
            {/* Animated title */}
            <h2
              className={`text-4xl md:text-5xl font-semibold mb-6 leading-tight font-poppins transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
            >
              {currentSlideData.title}
            </h2>

            {/* Animated subtitle */}
            <p
              className={`text-lg md:text-xl text-white/95 font-normal mb-10 max-w-md leading-relaxed transition-all duration-500 delay-100 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
            >
              {currentSlideData.subtitle}
            </p>

            {/* Animated features */}
            <div className='mb-12'>
              <div
                className={`p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-500 hover:bg-white/15 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-5'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className='space-y-4'>
                  {currentSlideData.features.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 transition-all duration-500 ${
                        isVisible
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 -translate-x-3'
                      }`}
                      style={{ transitionDelay: `${300 + index * 100}ms` }}
                    >
                      <div className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-300/20 backdrop-blur-sm'>
                        <feature.icon size={20} className='text-blue-300' />
                      </div>
                      <span className='text-base font-medium'>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Activity indicators */}
            <div className='flex items-center gap-4 mb-8'>
              <span className='text-sm text-white/70 mr-4'>
                Career OS for African Students
              </span>
              {slides.map((_, index) => (
                <ActivityIndicator
                  key={index}
                  isActive={index === currentSlide}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Waitlist form */}
        <div className='flex items-center justify-center bg-gray-50 px-4 md:px-16 relative pt-24 lg:pt-38'>
          {/* Subtle background pattern */}
          <div
            className='absolute inset-0 z-0'
            style={{
              backgroundImage:
								'radial-gradient(circle at 80% 20%, rgba(67, 97, 238, 0.05) 0%, transparent 50%)'
            }}
          />

          <div
            id='waitlist_info'
            className='w-full max-w-md py-12 md:py-0 relative z-10'
          >
            <h3 className='text-3xl font-semibold text-gray-800 mb-4'>
              Join the Waitlist
            </h3>
            <p className='text-gray-600 mb-8 text-lg'>
              Be among the first African students to own your skills, prove your growth, and become visible to opportunity.
            </p>

            <Waitlist />

            {/* Additional info */}
            <div className='mt-8 p-6 bg-blue-50 rounded-xl'>
              <p className='text-gray-700 font-semibold mb-3'>
                Why join early?
              </p>
              <div className='text-gray-600 text-sm space-y-2'>
                <div>• Shape the platform before it launches</div>
                <div>• Get early access to your verified skill portfolio</div>
                <div>• Be first to become visible to employers on Ednux</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
