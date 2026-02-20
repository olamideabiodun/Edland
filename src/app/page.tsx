'use client';

import Script from 'next/script';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FaqSection from '../components/home/FaqSection';
import Footer from '../components/home/Footer';
import Header from '../components/home/Header';
import Hero from '../components/home/Hero';
import High_integrity from '../components/home/High_integrity';
import MockupCarousel from '../components/home/MockupCarousel';

/* ────────────────────────────────────────────────
   CTA Section
──────────────────────────────────────────────── */
const CTASection = () => (
  <section className="w-full overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 py-24 relative">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-white opacity-5" />
      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white opacity-5" />
    </div>

    <div className="relative z-10 mx-auto max-w-[760px] px-4 text-center sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-poppins text-[2.2rem] font-semibold leading-tight text-white sm:text-[2.8rem]"
      >
        Be Part of Africa&apos;s Learning Revolution!
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mx-auto mt-5 max-w-[560px] text-[1rem] leading-relaxed text-blue-100"
      >
        Ednux is gathering the voices of thousands of African students to build something
        that truly serves. Tell us what you want, what you need. Be the first to experience
        it when we launch.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
      >
        <Link
          href="/waitlist"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[15px] font-semibold text-blue-700 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
        >
          Join Waitlist
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <Link
          href="/feedback"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-[15px] font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
        >
          Share Feedback
        </Link>
      </motion.div>
    </div>
  </section>
);

/* ────────────────────────────────────────────────
   Home page
──────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* Analytics */}
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-49F66DF463" async />
      <Script id="ga-init-home" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-49F66DF463');
      `}</Script>

      <Header />
      <Hero />
      <High_integrity />
      <MockupCarousel />
      <CTASection />
      <FaqSection />
      <Footer />
    </>
  );
}
