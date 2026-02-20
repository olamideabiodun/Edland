"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import RotatingWord from "@/components/common/RotatingWord";

const Hero = () => (
  <section className="relative w-full overflow-hidden bg-white pt-[70px]">

    {/* Faded grid background */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
        maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%)",
      }}
    />

    {/* Soft glow blobs */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-blue-100 opacity-40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-indigo-50 opacity-30 blur-3xl" />
    </div>

    <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-start pt-16 pb-20 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5"
        >
          <span className="text-[13px] font-medium text-blue-700">
            Career OS for African Students
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-poppins max-w-[860px] text-[2.6rem] font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-[3.4rem] md:text-[4rem]"
        >
          Redefining{" "}
          <span className="inline-flex items-center rounded-xl bg-blue-600 px-3 py-1 text-white mx-1">
            <RotatingWord
              words={["Assessment", "Learning", "Verification", "Education"]}
            />
          </span>
          <br className="hidden sm:block" />
          For Every Learner
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-[600px] text-[1.05rem] leading-relaxed text-slate-500 md:text-[1.1rem]"
        >
          A social learning management system that helps African students learn
          collaboratively and build career ready portfolios automatically.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <Link
            href="/waitlist"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-[15px] font-medium text-white transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5"
          >
            Join Waitlist
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </div>
  </section>
);

export default Hero;
