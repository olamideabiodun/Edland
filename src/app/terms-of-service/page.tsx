'use client';

import React from 'react';
import Header from '../../components/home/Header';
import Footer from '../../components/home/Footer';

export default function TermsOfServicePage() {
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
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-blue-100 opacity-40 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-start pt-14 pb-16 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5">
              <span className="text-[13px] font-medium text-blue-700">Legal</span>
            </div>
            <h1 className="font-poppins text-[2.4rem] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[3rem]">
              Terms of Service
            </h1>
            <p className="mt-4 text-[0.95rem] text-slate-500">Effective Date: January 1, 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[860px] px-4 sm:px-6 py-16 space-y-12">

        <section>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">
            These Terms of Service ("Terms") govern your access to and use of the Ednux platform, including the learning management system, skill tracking tools, portfolio builder, and all associated features ("Services"). By creating an account or using any part of Ednux, you agree to be bound by these Terms. If you are using Ednux on behalf of an institution, you confirm that you have authority to bind that institution.
          </p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">1. What Ednux Is</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">
            Ednux is a Career Operating System for African students. We provide a social learning management system that turns every class, project, assignment, and endorsement into verified, tamper-proof career proof. Our goal is to solve the documentation and visibility problem that prevents talented African graduates from accessing opportunity.
          </p>
          <p className="mt-4 text-[0.97rem] leading-[1.85] text-slate-600">
            Ednux is currently in pre-launch. By joining the waitlist or accessing any part of the platform, you agree to these Terms.
          </p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">2. Eligibility</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">
            You must be at least 16 years old to use Ednux. By using the platform, you confirm that the information you provide during registration is accurate and up to date. Ednux is primarily designed for students enrolled in African educational institutions, though use is not restricted to those regions.
          </p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">3. Your Account</h2>
          <div className="space-y-4 text-[0.97rem] leading-[1.85] text-slate-600">
            <p>You are responsible for maintaining the security of your account credentials. Do not share your password. Notify us immediately at <a href="mailto:support@ednux.com" className="text-blue-600 hover:underline">support@ednux.com</a> if you suspect unauthorized access to your account.</p>
            <p>You are responsible for all activity that occurs under your account. Ednux will not be liable for any loss resulting from unauthorized use of your account due to your failure to keep credentials secure.</p>
          </div>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">4. Your Data and Your Portfolio</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">4.1. Ownership</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">You own your data. Your verified skill records, portfolio, and career proof belong to you. Ednux does not claim ownership over the content you create or the achievements you earn on the platform.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">4.2. License to Operate</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">By using Ednux, you grant us a limited, non-exclusive license to process your learning and activity data for the sole purpose of generating your skill records, portfolio, and verified competency metrics. We use this data to provide the service to you, not to sell or monetize it independently.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">4.3. Accuracy of Records</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">Where institutions or lecturers issue endorsements or verifications through Ednux, those parties are responsible for the accuracy of the claims they make. Ednux facilitates the recording and verification process but does not independently verify the underlying academic claims.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">5. Acceptable Use</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600 mb-4">You agree not to use Ednux in any way that:</p>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-[0.93rem] leading-[1.8] text-slate-600">
            <ul className="space-y-2 list-disc pl-5">
              <li>Misrepresents your identity, academic record, or skills</li>
              <li>Attempts to manipulate, falsify, or game the skill tracking or endorsement system</li>
              <li>Infringes on the intellectual property rights of Ednux or any third party</li>
              <li>Violates the privacy or rights of other users, students, or institutions</li>
              <li>Uploads malicious code, engages in hacking, or attempts to disrupt platform infrastructure</li>
              <li>Harasses, threatens, or abuses other users through Ednux's collaborative features</li>
              <li>Uses the platform for any unlawful purpose under applicable law</li>
            </ul>
          </div>
          <p className="mt-4 text-[0.97rem] leading-[1.85] text-slate-600">Violations of this section may result in immediate suspension or permanent termination of your account. Fraudulent manipulation of skill records will be logged and cannot be reversed.</p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">6. Institutional Use</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">
            Institutions that use Ednux to manage courses, issue endorsements, or verify student competencies do so under a separate institutional agreement with Ednux. Institutions are responsible for ensuring that their use of the platform complies with applicable student data protection laws in their jurisdiction. Institutions may not access student data beyond what is necessary for educational administration and verification.
          </p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">7. Intellectual Property</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">
            The Ednux name, logo, platform design, software architecture, and all associated intellectual property are owned by Ednux Technology Services. Nothing in these Terms grants you a right to use any Ednux branding, trademarks, or proprietary technology outside of normal platform use. You may not copy, reproduce, or reverse-engineer any part of the Ednux platform without express written permission.
          </p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">8. Platform Availability</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">
            We aim to keep Ednux available and reliable, but we do not guarantee uninterrupted access. The platform may be temporarily unavailable due to maintenance, updates, or factors outside our control. Ednux is provided on an "as-is" and "as-available" basis, especially during the pre-launch and early access phases. We are actively building and improving the product.
          </p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">9. Limitation of Liability</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">
            To the maximum extent permitted by law, Ednux shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform, including loss of data or missed employment opportunities. Our total liability to you for any claim arising from these Terms shall not exceed the amount you have paid to Ednux in the six months preceding the claim, or fifty US dollars ($50), whichever is greater.
          </p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">10. Termination</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">
            You may delete your account at any time by contacting us at <a href="mailto:support@ednux.com" className="text-blue-600 hover:underline">support@ednux.com</a>. Ednux reserves the right to suspend or permanently terminate any account that violates these Terms, with or without prior notice. Verified skill records generated prior to termination may be retained in anonymized form as part of institutional records.
          </p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">11. Changes to These Terms</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">
            We may update these Terms as the platform grows. When changes are material, we will notify you by email or through an in-app notice. Continued use of the platform after changes are posted constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">12. Governing Law</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">
            These Terms are governed by applicable law. Where disputes arise, we will first attempt to resolve them through direct communication. If unresolved, disputes will be subject to the jurisdiction of the courts applicable to the registered operating entity of Ednux Technology Services.
          </p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">13. Contact Us</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600 mb-4">Questions about these Terms? Reach out directly.</p>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-[0.95rem] text-slate-700">
            <span className="font-medium">Email:</span>{' '}
            <a href="mailto:support@ednux.com" className="text-blue-600 hover:underline">support@ednux.com</a>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
