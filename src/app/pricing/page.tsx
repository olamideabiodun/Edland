'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';

const plans = [
  {
    name: 'Free',
    price: null,
    subtitle: 'For individuals getting started',
    cta: 'Get Started',
    ctaHref: '/waitlist',
    highlight: false,
    features: [
      'AI-assisted study tools',
      'Basic social learning access',
      'Limited storage (1GB)',
      'Community support',
      'Mobile & web access',
    ],
  },
  {
    name: 'Pro',
    price: 'Coming Soon',
    subtitle: 'For serious learners',
    cta: 'Join Waitlist',
    ctaHref: '/waitlist',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Everything in Free',
      'Unlimited AI assistance',
      'Advanced analytics & insights',
      'Workspace & task manager',
      'Unlimited cloud storage',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    subtitle: 'For schools & organizations',
    cta: 'Contact Sales',
    ctaHref: '/contact',
    highlight: false,
    features: [
      'Everything in Pro',
      'Institution dashboards',
      'Team management tools',
      'Custom LMS integrations',
      'Dedicated account manager',
      'White-label options',
    ],
  },
];

const CheckIcon = () => (
  <svg className="h-4 w-4 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 pt-[70px]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-600 opacity-10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1240px] px-4 py-24 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-medium text-white/80 mb-6">
            Pricing
          </span>
          <h1 className="text-[2.8rem] font-semibold leading-tight text-white sm:text-[3.4rem]">
            Simple &amp; Transparent{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[1.05rem] leading-relaxed text-slate-300">
            Choose the plan that fits your learning journey. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col rounded-2xl border p-8 transition-shadow duration-300 ${
                  plan.highlight
                    ? 'border-blue-500 bg-white shadow-2xl shadow-blue-500/15 scale-[1.02]'
                    : 'border-slate-200 bg-white hover:shadow-lg'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1 text-[12px] font-semibold text-white shadow-md">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-[1.1rem] font-semibold text-slate-900">{plan.name}</h3>
                  <p className="mt-1 text-[0.88rem] text-slate-500">{plan.subtitle}</p>

                  <div className="mt-5 mb-6">
                    {plan.price ? (
                      <p className="text-[1.5rem] font-bold text-slate-900">{plan.price}</p>
                    ) : (
                      <p className="text-[1.5rem] font-bold text-slate-900">
                        Free <span className="text-[1rem] font-normal text-slate-400">forever</span>
                      </p>
                    )}
                  </div>

                  <Link
                    href={plan.ctaHref}
                    className={`block w-full rounded-xl py-3 text-center text-[14px] font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl'
                        : 'border border-slate-200 bg-slate-50 text-slate-800 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckIcon />
                      <span className="text-[0.9rem] text-slate-600">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-center text-[0.9rem] text-slate-400">
            All prices will be announced at launch. Waitlist members get early access &amp; exclusive benefits.
          </p>
        </div>
      </section>

      {/* FAQ quick answers */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-[760px] px-4 sm:px-6 text-center">
          <h2 className="text-[1.8rem] font-semibold text-slate-900">Still have questions?</h2>
          <p className="mt-3 text-[0.95rem] text-slate-500">
            We&apos;re happy to walk you through the right plan for your institution or use case.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-[15px] font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Contact Sales
            </Link>
            <Link
              href="/waitlist"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 text-[15px] font-medium text-white shadow-md shadow-blue-500/25 hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 text-center">
        <h2 className="text-[2rem] font-semibold text-white">Join thousands of learners using Ednux</h2>
        <p className="mx-auto mt-4 max-w-md text-[1rem] text-blue-100">
          Start for free. Upgrade when you&apos;re ready. No pressure.
        </p>
        <Link
          href="/waitlist"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[15px] font-semibold text-blue-700 shadow-lg transition-all hover:-translate-y-0.5"
        >
          Get Started Free
        </Link>
      </section>

      <Footer />
    </div>
  );
}
