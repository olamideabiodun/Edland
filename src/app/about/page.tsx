'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />

      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-white pt-[70px]">
        {/* Faded grid background */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%)',
          }}
        />
        {/* Soft glow blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-blue-100 opacity-40 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-start pt-16 pb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5"
            >
              <span className="text-[13px] font-medium text-blue-700">About Ednux</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-poppins max-w-[820px] text-[2.6rem] font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-[3.4rem] md:text-[4rem]"
            >
              Africa doesn&apos;t have a{' '}
              <span className="text-blue-600">talent problem</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 max-w-[600px] text-[1.05rem] leading-relaxed text-slate-500 md:text-[1.1rem]"
            >
              It has a documentation problem. A visibility problem. A proof problem. We built Ednux to fix that.
            </motion.p>

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
                Join the Mission
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Ednux Exists */}
      <section className="py-24">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-[13px] font-medium text-blue-700 mb-4">
              Our origin
            </span>
            <h2 className="font-poppins text-[2rem] font-semibold text-slate-900 sm:text-[2.4rem]">
              Why Ednux Exists
            </h2>
          </div>
          <div className="space-y-5 text-[1rem] leading-[1.85] text-slate-600">
            <p>
              Every year, millions of African students graduate with real skills, real knowledge, and real potential. But employers cannot trust what they cannot verify. Students spend four or more years learning, growing, leading, and building, only to graduate with a one page CV that anyone can exaggerate and no one can verify.
            </p>
            <p>
              The old system is breaking down fast. Traditional learning platforms were built for course delivery, not career development. They track assignments for lecturers, but everything stays locked inside the school. Students cannot build portfolios. They cannot showcase growth. They cannot prove what they actually know.
            </p>
            <p>
              We watched this happen to our classmates. We watched it happen to ourselves. We saw talented students struggle for years after graduation, not because they lacked skills, but because they lacked proof.
            </p>
            <p className="font-medium text-slate-900">So we decided to fix it.</p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-[13px] font-medium text-blue-700 mb-4">
              The team
            </span>
            <h2 className="font-poppins text-[2rem] font-semibold text-slate-900 sm:text-[2.4rem]">
              Who We Are
            </h2>
          </div>
          <div className="space-y-5 text-[1rem] leading-[1.85] text-slate-600">
            <p>
              We are not observers studying the market like outsiders. We are not researchers analyzing students from a distance. We are the students who were failed by the system, building the tool that stops the failure.
            </p>
            <p>
              Ednux was born from frustration, from watching brilliant minds go unnoticed, from seeing hard work disappear into WhatsApp chats and forgotten folders, from graduating into a world that demanded proof we were never given the tools to create.
            </p>
            <p className="font-medium text-slate-900">
              We built Ednux because we needed Ednux. And because millions of students across Africa need it too.
            </p>
          </div>
        </div>
      </section>

      {/* What We Are Building */}
      <section className="py-24">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-[13px] font-medium text-blue-700 mb-4">
              The vision
            </span>
            <h2 className="font-poppins text-[2rem] font-semibold text-slate-900 sm:text-[2.4rem]">
              What We Are Building
            </h2>
          </div>
          <div className="space-y-5 text-[1rem] leading-[1.85] text-slate-600">
            <p>
              Ednux is more than an app. It is the digital rails for the next generation of the African workforce. It is the empowerment layer missing in African education. It is the bridge between learning and opportunity.
            </p>
            <p>
              We are building the ecosystem where students become visible, verified, and employable. Where every class, every project, every leadership role, every skill learned becomes permanent, verifiable career proof.
            </p>
            <p className="font-medium text-slate-900">
              We are building the tool we wish existed when we were students fighting the system. And we will not stop until every African student has the power to prove exactly who they are and what they can do.
            </p>
            <p className="font-semibold text-slate-900">
              This is why Ednux exists. This is what we do. This is why we win.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-[13px] font-medium text-blue-700 mb-4">
              The founder
            </span>
            <h2 className="font-poppins text-[2rem] font-semibold text-slate-900 sm:text-[2.4rem]">Meet Our Founder</h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="grid grid-cols-1">
              {/* Text side */}
              <div className="p-8 sm:p-12">
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

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 text-center">
        <h2 className="font-poppins text-[2rem] font-semibold text-white sm:text-[2.4rem]">Join Us in Building the Future</h2>
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
