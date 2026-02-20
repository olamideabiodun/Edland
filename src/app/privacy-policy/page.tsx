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
            <p className="mt-4 text-[0.95rem] text-slate-500">Effective Date: October 10, 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[860px] px-4 sm:px-6 py-16 space-y-12">

        <section>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">
            This Privacy Policy details how Ednux processes Personal Data related to the operation of the LMS and the VCL. We are committed to processing data in accordance with GDPR and CCPA principles, emphasizing privacy-by-design and Self-Sovereign Identity (SSI) principles.
          </p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">1. Data Controller and Legal Framework</h2>
          <div className="space-y-3 text-[0.97rem] leading-[1.85] text-slate-600">
            <p><span className="font-medium text-slate-800">Data Controller:</span> Ednux Technology Services.</p>
            <p><span className="font-medium text-slate-800">Joint Controllership:</span> Where you are enrolled through an institution (Issuer), Ednux and the Issuer may operate as joint controllers for the purposes of educational data processing, with responsibilities delineated by separate agreement.</p>
            <p><span className="font-medium text-slate-800">Legal Basis:</span> Processing is primarily based on Contractual Necessity (Article 6(1)(b) of GDPR) to deliver the LMS and VCL, and Legitimate Interest (Article 6(1)(f) of GDPR) for auditing and refining the Interpretable ML Engine's fairness.</p>
          </div>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">2. Categories of Personal Data Processed</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full border-collapse text-[0.93rem]">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-5 py-3.5 text-left font-semibold text-slate-800 border-b border-slate-200">Data Category</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-slate-800 border-b border-slate-200">Specific Data Points</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-slate-800 border-b border-slate-200">Purpose of Processing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-medium text-slate-700">A. Identity & Account Data</td>
                  <td className="px-5 py-4 text-slate-600">Full Name, Email, Institutional ID, Hashed Password, Decentralized Identifier (DID).</td>
                  <td className="px-5 py-4 text-slate-600">Account provisioning, identity resolution for VC issuance, and secure access via Clerk.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-medium text-slate-700">B. Performance & Interaction Data</td>
                  <td className="px-5 py-4 text-slate-600">Course completion rates, assessment results, submission frequency, collaborative efficacy metrics, time-on-task.</td>
                  <td className="px-5 py-4 text-slate-600">Primary input for the Interpretable ML Engine to calculate objective competency metrics.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-medium text-slate-700">C. Cryptographic Data</td>
                  <td className="px-5 py-4 text-slate-600">Public Key, VC Hash, VC Revocation Status (on Stellar).</td>
                  <td className="px-5 py-4 text-slate-600">Anchoring the proof of the VC on the Stellar Soroban VDR. This public data contains no direct identifying Personal Data.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">3. Purpose of Processing and Data Minimization</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">3.1. Core Service Delivery</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">Data is processed to provide the personalized LMS experience and issue W3C-compliant VCs.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">3.2. Interpretable ML Engine Operation</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">Performance Data is used to train and run the Interpretable ML Engine. This process is continuously audited to ensure algorithmic fairness and mitigate bias in competency scoring, aligning with ethical data practices.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">3.3. Stellar VDR Usage (Data Minimization)</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">We adhere to strict data minimization. We only record the cryptographic hash and revocation status of the VC on the public Stellar Soroban ledger. Your name, scores, and private educational records remain securely in our off-chain database.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">4. Data Sharing and Transfer</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">4.1. Issuing Institutions</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">We share Performance and Identity Data with your Issuer to comply with their pedagogical and regulatory requirements and to enable them to issue VCs.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">4.2. Holder-Controlled Disclosure (SSI)</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">When you, the Holder, choose to present a VC to a third-party Verifier (e.g., an employer), the sharing is executed under your control. Ednux facilitates this by supporting the use of Zero-Knowledge Proofs (ZKP), allowing you to prove a claim without disclosing the underlying raw, sensitive metric.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">4.3. Data Transfer (International)</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">Data may be transferred to and processed in jurisdictions outside your country of residence. We ensure that any international data transfers are protected by adequate legal mechanisms (e.g., Standard Contractual Clauses, where applicable).</p>
              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-[0.93rem] leading-[1.8] text-slate-600 space-y-3">
                <p><span className="font-medium text-slate-800">Outside the EU/EEA (including African countries):</span> Where Personal Data is processed in countries not subject to the GDPR, Ednux aligns its practices to local privacy frameworks while maintaining GDPR-level safeguards.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-medium text-slate-700">Nigeria (NDPR):</span> We apply NDPR principles of lawfulness, purpose limitation, data minimization, and security, and execute appropriate Data Processing Agreements and DPIAs where required.</li>
                  <li><span className="font-medium text-slate-700">Kenya (Data Protection Act, 2019):</span> We honor requirements on consent, purpose limitation, data subject rights, and registration of data controllers/processors where applicable.</li>
                  <li><span className="font-medium text-slate-700">South Africa (POPIA):</span> We comply with conditions for lawful processing, information quality, openness, and security safeguards.</li>
                  <li><span className="font-medium text-slate-700">Other African jurisdictions:</span> We map local obligations to our GDPR controls and ensure contractual and technical measures meet or exceed local standards.</li>
                </ul>
                <p>In all cases, we implement encryption in transit and at rest, strict access controls, and minimum-necessary processing.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">5. Your Data Rights (GDPR/CCPA Alignment)</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600 mb-5">You maintain full control over your Personal Data, subject to the limitations imposed by the decentralized ledger:</p>
          <div className="space-y-5">
            {[
              { n: '5.1', title: 'Right of Access and Portability', body: 'You have the right to obtain confirmation of whether your data is being processed. Since Ednux VCs are built on SSI, your core verifiable data is inherently portable and available in your digital wallet.' },
              { n: '5.2', title: 'Right to Rectification', body: 'You can request the correction of inaccurate data in our centralized LMS records.' },
              { n: '5.3', title: 'Right to Erasure ("Right to be Forgotten")', body: 'You may request the deletion of your Personal Data from the Ednux centralized database. Note: the cryptographic data anchored to the immutable Stellar Soroban VDR cannot be deleted or modified due to the core principles of Distributed Ledger Technology.' },
              { n: '5.4', title: 'Restriction, Objection, and Direct Marketing Controls', body: 'You may request that we restrict processing in specific circumstances and you may object to processing based on legitimate interests, including profiling. You can opt out of direct marketing at any time.' },
              { n: '5.5', title: 'Automated Decision-Making and Profiling Transparency', body: 'Ednux uses an Interpretable ML Engine to compute competency metrics. These scores are designed to be explainable and auditable. You have the right to obtain meaningful information about the logic involved and to request human review where legally required.' },
              { n: '5.6', title: 'Withdrawal of Consent', body: 'Where processing is based on consent, you may withdraw consent at any time without affecting the lawfulness of processing before withdrawal.' },
              { n: '5.8', title: 'Identity Verification and Response Times', body: 'To protect your data, we may need to verify your identity before acting on a request. We aim to respond within one month (or the timeframe required by local law).' },
              { n: '5.9', title: 'How to Exercise Your Rights', body: null },
            ].map((item) => (
              <div key={item.n}>
                <h3 className="font-medium text-slate-800 mb-1.5">{item.n}. {item.title}</h3>
                {item.body ? (
                  <p className="text-[0.97rem] leading-[1.85] text-slate-600">{item.body}</p>
                ) : (
                  <p className="text-[0.97rem] leading-[1.85] text-slate-600">
                    You can submit requests via in-app privacy settings or by emailing{' '}
                    <a href="mailto:support@ednux.com" className="text-blue-600 hover:underline">support@ednux.com</a>.
                  </p>
                )}
              </div>
            ))}
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">5.7. Complaints to Supervisory Authorities</h3>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-[0.93rem] leading-[1.8] text-slate-600">
                <p className="mb-2">You may lodge a complaint with a data protection authority in your jurisdiction:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><span className="font-medium text-slate-700">EU/EEA:</span> Your local Data Protection Authority (DPA).</li>
                  <li><span className="font-medium text-slate-700">Nigeria:</span> Nigeria Data Protection Commission (NDPC).</li>
                  <li><span className="font-medium text-slate-700">Kenya:</span> Office of the Data Protection Commissioner (ODPC).</li>
                  <li><span className="font-medium text-slate-700">South Africa:</span> Information Regulator (POPIA).</li>
                  <li><span className="font-medium text-slate-700">Other regions:</span> The competent supervisory authority defined by applicable law.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">6. Data Security and Retention</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">Data Security</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">We employ industry-standard technical and organizational measures, including encryption, pseudonymization, and tokenization, to protect Personal Data from unauthorized access or breach.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">Data Retention</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">We retain Personal Data for the duration of your active account relationship or as required by our agreement with your Issuer. Pseudonymized, non-identifiable data may be retained indefinitely for maintaining and auditing the historical integrity of the Interpretable ML Engine.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">7. Contact Information</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600 mb-4">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-[0.95rem] text-slate-700">
            <span className="font-medium">Email:</span>{' '}
            <a href="mailto:support@ednux.com" className="text-blue-600 hover:underline">support@ednux.com</a>
          </div>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">8. Updates to This Policy</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the Effective Date.</p>
        </section>

      </div>

      <Footer />
    </div>
  );
}
