'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';

const values = [
  {
    title: 'Innovation First',
    description:
      'We relentlessly explore new frontiers in educational technology, building tools that empower, adapt, and evolve with the needs of African learners.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: 'Learner-Centric',
    description:
      'Every feature, decision, and design begins with one question: Does this help students succeed? Their growth is our north star.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: 'Accessibility for All',
    description:
      'Quality education should never be gated by geography, income, or device. Ednux is built to reach every learner, everywhere.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Community Driven',
    description:
      'Learning thrives in connection. We champion collaboration, peer support, and shared knowledge across institutions and borders.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

const features = [
  { title: 'AI-Powered Learning', desc: 'Intelligent algorithms personalize learning paths and provide instant feedback to optimize educational outcomes.' },
  { title: 'Social Learning Hub', desc: 'Connect learners, educators, and professionals in collaborative spaces that foster knowledge sharing.' },
  { title: 'Advanced Analytics', desc: 'Comprehensive insights into learning progress, engagement metrics, and performance optimization.' },
  { title: 'Enterprise Security', desc: 'Bank-level security protocols ensure your educational data remains protected and compliant.' },
  { title: '24/7 Support', desc: 'Round-the-clock assistance from our dedicated team of education technology specialists.' },
  { title: 'Scalable Platform', desc: 'From individual learners to enterprise organizations, our platform grows with your needs.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 pt-[70px]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-600 opacity-10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-indigo-600 opacity-10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1240px] px-4 py-24 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-medium text-white/80 mb-6">
            About Ednux
          </span>
          <h1 className="max-w-3xl text-[2.8rem] font-semibold leading-tight text-white sm:text-[3.6rem]">
            Transforming Education Through{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              AI Innovation
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-[1.1rem] leading-relaxed text-slate-300">
            We&apos;re building the future of education, where artificial intelligence meets
            social learning, creating personalized experiences that adapt to every learner&apos;s
            unique journey across Africa.
          </p>
          <Link
            href="/waitlist"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[15px] font-semibold text-slate-900 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Join Our Mission
          </Link>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 text-center">
          <h2 className="text-[2rem] font-semibold text-slate-900 sm:text-[2.4rem]">Our Vision</h2>
          <p className="mx-auto mt-6 max-w-[780px] text-[1.05rem] leading-[1.8] text-slate-600">
            At Ednux, we envision a future where every African learner, regardless of background,
            location, or circumstance, has access to personalized, high-quality education that
            unlocks their full potential. We are building more than a platform. We are building a
            movement: one that redefines how students learn, how educators teach, and how institutions
            grow.
          </p>
          <p className="mx-auto mt-5 max-w-[780px] text-[1.05rem] leading-[1.8] text-slate-600">
            Our vision is to transform education across Africa by harnessing AI, making learning
            mobile-first, connecting learners through collaboration, and equipping institutions with
            data-driven insights. We believe the future of education is not imported, it&apos;s built
            locally, with global standards and deep cultural relevance.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[2rem] font-semibold text-slate-900 sm:text-[2.4rem]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-7"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-[1rem] font-semibold text-slate-900">{v.title}</h3>
                  <p className="mt-1.5 text-[0.9rem] leading-relaxed text-slate-500">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[2rem] font-semibold text-slate-900 sm:text-[2.4rem]">What We&apos;re Building</h2>
            <p className="mt-3 text-slate-500">Cutting-edge capabilities for the modern African learner.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-7 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-3 h-1.5 w-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
                <h3 className="text-[1rem] font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[2rem] font-semibold text-slate-900 sm:text-[2.4rem]">Meet Our Founder</h2>
            <p className="mt-3 text-slate-500">Architect, technologist, and innovator with a vision for African education.</p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Text side */}
              <div className="lg:col-span-3 p-8 sm:p-12">
                <h3 className="text-[1.8rem] font-bold text-slate-900">Faruq Olamide Sokunbi</h3>
                <p className="mt-1 text-[0.9rem] text-slate-500">Architecture Student & Software Engineer</p>
                <div className="mt-3 flex items-center gap-3">
                  {[
                    { label: 'X', href: 'https://x.com/Mide_abiodun99' },
                    { label: 'Instagram', href: 'https://instagram.com/mide__999' },
                    { label: 'LinkedIn', href: 'https://linkedin.com/in/sokunbifaruq/' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-slate-200 px-3 py-1.5 text-[12px] font-medium text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
                <div className="mt-6 space-y-4 text-[0.95rem] leading-[1.8] text-slate-600">
                  <p>
                    I founded Ednux after relocating to Cyprus to pursue architecture studies and experiencing
                    firsthand how technology could revolutionize education. The contrast was remarkable:
                    while students in Cyprus accessed assignments, grades, and assessments instantly through
                    sophisticated LMS platforms, many institutions in Nigeria continued to rely on traditional
                    methods, printed handouts, manual grading, and significant feedback delays.
                  </p>
                  <p>
                    This ignited my mission. I recognized not merely a gap, but a transformative opportunity
                    to develop superior solutions for African learners. Ednux emerged from this vision: a
                    comprehensive platform where students can learn, develop, and excel with the same
                    efficiency and accessibility found in global educational systems.
                  </p>
                  <p>
                    Architecture has instilled in me discipline, creativity, and the power of analytical
                    thinking. Ednux channels these same principles into every feature we deliver. For me,
                    transforming African education transcends being merely a goal, it represents a calling.
                  </p>
                </div>
              </div>

              {/* Image side */}
              <div className="lg:col-span-2 relative bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8 min-h-[300px]">
                <img
                  src="/assets/images/founder.png"
                  alt="Faruq Olamide Sokunbi, Founder of Ednux"
                  className="w-full max-w-[320px] object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 text-center">
        <h2 className="text-[2rem] font-semibold text-white sm:text-[2.4rem]">Join Us in Building the Future</h2>
        <p className="mx-auto mt-4 max-w-md text-[1rem] text-blue-100">
          Be part of the movement redefining education across Africa. Early access starts with you.
        </p>
        <Link
          href="/waitlist"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[15px] font-semibold text-blue-700 shadow-lg transition-all duration-200 hover:-translate-y-0.5"
        >
          Join the Waitlist
        </Link>
      </section>

      <Footer />
    </div>
  );
}
