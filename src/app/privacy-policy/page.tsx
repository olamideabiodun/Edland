'use client';

import React from 'react';
import Header from '../../components/home/Header';
import Footer from '../../components/home/Footer';

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-[0.95rem] text-slate-500">Effective Date: January 1, 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[860px] px-4 sm:px-6 py-16 space-y-12">

        <section>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">
            At Ednux, your data is not a product. It is the foundation of something you own: your verified career identity. This Privacy Policy explains what information we collect, why we collect it, how we use it, and the rights you have over it. We built Ednux because African students deserve better tools. We protect your data with the same seriousness.
          </p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">1. Who We Are</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">
            Ednux is a Career Operating System for African students. We operate a social learning management system that helps students learn collaboratively, track skills in real time, and build verified career portfolios automatically. We are the data controller for all personal information processed through the Ednux platform.
          </p>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-[0.95rem] text-slate-700">
            <span className="font-medium">Contact:</span>{' '}
            <a href="mailto:support@ednux.com" className="text-blue-600 hover:underline">support@ednux.com</a>
          </div>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">2. What Information We Collect</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">2.1. Account Information</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">When you create an account, we collect your full name, email address, institution name, and year of study. This is used to create your student identity on Ednux.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">2.2. Learning and Activity Data</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">We collect data about how you use the platform, including courses completed, assignments submitted, projects contributed to, skills endorsed by lecturers or peers, group activity, and time spent learning. This data powers your Living Portfolio and skill tracking features.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">2.3. Institution-Linked Data</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">If you are enrolled through an institution, your institution may share enrollment information with us to verify your student status and link institutional records to your Ednux profile.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">2.4. Communications</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">If you contact us via email or our feedback form, we collect the content of those communications to respond to you and improve the platform.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">2.5. Usage and Technical Data</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">We collect standard technical data including device type, browser type, IP address, and page interactions. This helps us keep the platform running reliably and improve the user experience.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">3. How We Use Your Information</h2>
          <div className="space-y-3 text-[0.97rem] leading-[1.85] text-slate-600">
            <p>We use your data only for purposes that serve you directly:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To create and maintain your Ednux student identity and profile</li>
              <li>To build and update your Living Portfolio automatically as you learn</li>
              <li>To track your skills in real time and generate verified competency records</li>
              <li>To power collaborative learning spaces, study groups, and team projects</li>
              <li>To issue verified endorsements from lecturers and institutions</li>
              <li>To make your verified skills discoverable to employers when you choose to share them</li>
              <li>To improve the platform based on how students use it</li>
              <li>To send you important account updates and platform notifications</li>
            </ul>
            <p>We do not sell your personal data. We do not use your data for advertising. Your career proof belongs to you.</p>
          </div>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">4. Sharing Your Information</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">4.1. Institutions</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">We share relevant learning and performance data with your enrolled institution to support course management, assessment, and institutional verification of your skills. Institutions accessing your data do so under data processing agreements with Ednux.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">4.2. Employers</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">Your verified skills and portfolio are only visible to employers when you explicitly choose to share them. We will never surface your profile to an employer without your consent.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">4.3. Service Providers</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">We work with trusted third-party providers (including authentication, hosting, and analytics services) who process data on our behalf under strict confidentiality obligations. These providers are not permitted to use your data for their own purposes.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">4.4. Legal Requirements</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">We may disclose your information where required by law, court order, or to protect the rights, safety, or property of Ednux or others.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">5. Your Rights</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600 mb-4">You have full control over your personal data. Depending on your jurisdiction, your rights include:</p>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-[0.93rem] leading-[1.8] text-slate-600">
            <ul className="space-y-2">
              <li><span className="font-medium text-slate-700">Access:</span> Request a copy of the data we hold about you.</li>
              <li><span className="font-medium text-slate-700">Correction:</span> Request that inaccurate data be corrected.</li>
              <li><span className="font-medium text-slate-700">Deletion:</span> Request that your personal data be deleted from our systems.</li>
              <li><span className="font-medium text-slate-700">Portability:</span> Request your data in a portable format so you can take it with you.</li>
              <li><span className="font-medium text-slate-700">Objection:</span> Object to specific types of data processing, including profiling.</li>
              <li><span className="font-medium text-slate-700">Withdrawal of Consent:</span> Where we rely on consent, you may withdraw it at any time.</li>
            </ul>
          </div>
          <p className="mt-4 text-[0.97rem] leading-[1.85] text-slate-600">
            To exercise any of these rights, email us at <a href="mailto:support@ednux.com" className="text-blue-600 hover:underline">support@ednux.com</a>. We will respond within 30 days.
          </p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">6. Data Security</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">
            We use industry-standard security measures to protect your data, including encryption in transit and at rest, secure authentication, and strict access controls. Only authorised Ednux team members with a clear need can access personal data. We regularly review and improve our security practices.
          </p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">7. Data Retention</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">
            We retain your personal data for as long as your account is active or as needed to provide our services. If you delete your account, we will delete or anonymize your personal data within 90 days, except where we are required by law to retain it longer. Your verified skill records and portfolio data, once generated, may be retained in anonymized form to maintain the integrity of institutional records.
          </p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">8. Cookies</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">
            We use cookies and similar technologies to keep you logged in, remember your preferences, and understand how the platform is used. You can manage cookie preferences through your browser settings. Disabling certain cookies may affect platform functionality.
          </p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">9. Regional Privacy Rights</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600 mb-4">
            Ednux is built for African students. We take local data protection laws seriously across our primary markets:
          </p>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-[0.93rem] leading-[1.8] text-slate-600 space-y-2">
            <p><span className="font-medium text-slate-700">Nigeria (NDPR/NDP Act):</span> We comply with principles of lawful processing, purpose limitation, data minimization, and data subject rights under the Nigeria Data Protection Regulation.</p>
            <p><span className="font-medium text-slate-700">Kenya (Data Protection Act, 2019):</span> We honor consent requirements, purpose limitation, and the rights of data subjects as recognized by the Office of the Data Protection Commissioner.</p>
            <p><span className="font-medium text-slate-700">South Africa (POPIA):</span> We comply with the conditions for lawful processing and security safeguards under the Protection of Personal Information Act.</p>
            <p><span className="font-medium text-slate-700">Other African countries:</span> We apply GDPR-equivalent safeguards as a minimum standard across all jurisdictions where Ednux operates.</p>
          </div>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">10. Changes to This Policy</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">
            We may update this Privacy Policy as the platform evolves. When we make material changes, we will notify you by email or through an in-app notice. The updated policy will always show the revised Effective Date at the top of this page.
          </p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">11. Contact Us</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600 mb-4">Questions about this Privacy Policy or how we handle your data? We want to hear from you.</p>
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
