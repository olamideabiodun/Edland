"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";

const features = [
  {
    tag: "Social",
    title: "Social Networking & Community",
    description:
      "Connect learners, classmates, and professionals in collaborative spaces built for meaningful knowledge sharing. Follow educators, join academic discussions, and build your learning network.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    tag: "AI",
    title: "AI-Powered Learning",
    description:
      "Intelligent algorithms personalize your learning path, adapt to your pace, and provide instant feedback. Get AI-generated summaries, study plans, and smart recommendations tailored to your goals.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
      </svg>
    ),
  },
  {
    tag: "Workspace",
    title: "Project & Workspace Tools",
    description:
      "Manage academic projects, assign tasks, track deadlines, and organize your work in one powerful workspace. Collaborate with teammates and submit everything in one place.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
      </svg>
    ),
  },
  {
    tag: "LMS",
    title: "Course & Learning Management",
    description:
      "Access courses, assignments, and study resources with intelligent organization. Instructors can create rich course content, auto-grade assessments, and track student progress in real time.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    tag: "Analytics",
    title: "Progress Tracking & Analytics",
    description:
      "Monitor learning progress with detailed visual analytics, performance trends, and AI-powered insights. Students see exactly where they stand, and educators get actionable class-wide data.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    tag: "Assessment",
    title: "Verifiable Competency (CBE)",
    description:
      "Our Competency-Based Education system turns your performance into objective, auditable skill scores, shareable with employers and institutions as proof of real-world capability.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 pt-[70px]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-indigo-600 opacity-10 blur-3xl" />
          <div className="absolute bottom-0 left-20 h-60 w-60 rounded-full bg-blue-600 opacity-10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1240px] px-4 py-24 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-medium text-white/80 mb-6">
            Features
          </span>
          <h1 className="max-w-2xl text-[2.8rem] font-semibold leading-tight text-white sm:text-[3.4rem]">
            Built to Power{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Modern Learning
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-slate-300">
            Everything you need to learn, collaborate, and stay productive, in one intelligent platform designed for African learners.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                    {f.icon}
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[12px] font-medium text-slate-500">
                    {f.tag}
                  </span>
                </div>
                <h3 className="text-[1.05rem] font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-slate-500 flex-1">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 text-center">
        <h2 className="text-[2rem] font-semibold text-white sm:text-[2.4rem]">Ready to experience Ednux?</h2>
        <p className="mx-auto mt-4 max-w-md text-[1rem] text-blue-100">
          Join our waitlist and be among the first to access Africa&apos;s next-generation learning platform.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/waitlist"
            className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-[15px] font-semibold text-blue-700 shadow-lg transition-all hover:-translate-y-0.5"
          >
            Join Waitlist
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-[15px] font-medium text-white hover:bg-white/20 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
