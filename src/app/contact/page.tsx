'use client';

import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />

      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-white pt-[70px]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%)',
          }}
        />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-blue-100 opacity-40 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-start pt-16 pb-20 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5">
              <span className="text-[13px] font-medium text-blue-700">Contact</span>
            </div>

            <h1 className="font-poppins max-w-[700px] text-[2.6rem] font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-[3.4rem] md:text-[4rem]">
              Get in touch
            </h1>

            <p className="mt-6 max-w-[480px] text-[1.05rem] leading-relaxed text-slate-500">
              Have questions or want to partner with us? Reach out directly and we will get back to you.
            </p>

            <div className="mt-10">
              <button
                type="button"
                onClick={() => window.open('mailto:support@ednux.com')}
                className="inline-flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-7 py-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[0.85rem] font-medium text-slate-500">Email us</p>
                  <p className="text-[1rem] font-semibold text-slate-900">support@ednux.com</p>
                </div>
                <svg className="ml-2 h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
