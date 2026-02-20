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
            <p className="mt-4 text-[0.95rem] text-slate-500">Effective Date: October 10, 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[860px] px-4 sm:px-6 py-16 space-y-12">

        <section>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">
            These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "Holder," or "Issuer") and Ednux Technology Services ("Ednux," "we," or "us") governing access to the Ednux Learning Management System (LMS) and the Verifiable Competency Loop (VCL), including all associated software, interfaces, APIs, and the use of the Stellar Soroban blockchain for credential anchoring. By accessing or utilizing the Services, you confirm your unqualified acceptance of these Terms.
          </p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">1. Preamble and Acceptance</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">
            If you are acting on behalf of an institution, you warrant that you have full legal authority to bind that entity. These Terms govern your use of all Services and supersede any prior agreements between you and Ednux relating to the subject matter herein.
          </p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">2. Definitions of Core Technology & Roles</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full border-collapse text-[0.93rem]">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-5 py-3.5 text-left font-semibold text-slate-800 border-b border-slate-200">Term</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-slate-800 border-b border-slate-200">Definition in the Context of Ednux</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { term: 'Verifiable Credential (VC)', def: 'A tamper-proof, cryptographic credential issued in accordance with the W3C Verifiable Credential Data Model.' },
                  { term: 'Decentralized Identifier (DID)', def: 'A globally unique identifier controlled by the User, created and anchored utilizing the DID:STLLR method on the Soroban network.' },
                  { term: 'Interpretable ML Engine', def: 'The proprietary software system utilizing models to generate auditable, objective competency metrics from user performance data.' },
                  { term: 'Holder', def: 'The individual User who possesses and controls their DID and VCs within their digital wallet.' },
                  { term: 'Issuer', def: 'An Institution or Organization (e.g., University) that legally attests to and issues a VC to a Holder via the Ednux platform.' },
                  { term: 'Verifiable Data Registry (VDR)', def: 'The Stellar Soroban ledger, used solely to anchor the public keys, DID documents, and revocation status of VCs. No Personal Data is stored on the Stellar public ledger.' },
                ].map((row) => (
                  <tr key={row.term} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-medium text-slate-700 align-top whitespace-nowrap">{row.term}</td>
                    <td className="px-5 py-4 text-slate-600">{row.def}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">3. Service Provision and Self-Sovereign Identity (SSI)</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">3.1. Provision of Services</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">Ednux grants the User a limited, non-exclusive, non-transferable right to access and use the LMS and VCL.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">3.2. SSI Acknowledgment</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">The User acknowledges and agrees that the Self-Sovereign Identity (SSI) model places control and responsibility for private cryptographic keys and the presentation of VCs entirely with the Holder. Ednux does not maintain custody of private keys and cannot recover lost or compromised DIDs.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">3.3. Credential Accuracy</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">Issuers are solely responsible for the factual accuracy of the claims contained within any VC they issue through the Ednux platform.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">4. Data Integrity and Acceptable Use</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">4.1. Data Input License</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">By using the LMS, the User grants Ednux a perpetual, royalty-free, and sub-licensable license to use User Performance Data for the express purposes of: (a) generating Verifiable Competency Metrics; and (b) training, auditing, and refining the Interpretable ML Engine to ensure fairness and accuracy.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">4.2. Prohibition of Fraud</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">Any attempt to manipulate performance data, game the ML Engine, or fraudulently alter a VC will constitute a material breach of these Terms, resulting in immediate suspension, termination, and the definitive anchoring of a Revocation Status on the Stellar VDR.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">5. Disclaimer of Warranties and Limitation of Liability</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">5.1. No Warranties</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">The Services, including the VCL and the underlying Stellar Soroban infrastructure, are provided on an "as-is" and "as-available" basis. Ednux expressly disclaims all warranties, whether express, implied, or statutory, including warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-800 mb-1.5">5.2. Limitation of Liability</h3>
              <p className="text-[0.97rem] leading-[1.85] text-slate-600">To the maximum extent permitted by law, Ednux shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits or loss of data, arising from the use of the Services or any failure of the Stellar network. In no event shall Ednux's total liability exceed the greater of (i) fifty U.S. Dollars ($50.00) or (ii) the amount paid by you to Ednux in the six (6) months preceding the claim.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">6. Indemnification</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">You agree to indemnify, defend, and hold harmless Ednux, its affiliates, directors, and employees from and against any and all claims, liabilities, damages, and costs (including reasonable attorneys' fees) arising out of or related to: (a) your use of the Services; (b) your breach of these Terms; or (c) your violation of any applicable law or the rights of any third party.</p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">7. Governing Law and Dispute Resolution</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law principles. Any dispute arising from these Terms shall be resolved by binding arbitration in New York, New York, in accordance with the rules of the American Arbitration Association.</p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">8. Intellectual Property Rights</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">The Ednux platform, including its software, architecture, and the design of the Interpretable ML Engine, is the exclusive property of Ednux Technology Services. All trademarks, service marks, and trade names used in connection with the Services are the property of Ednux or its licensors.</p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">9. Termination and Suspension</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">Ednux reserves the right to suspend or terminate your access to the Services immediately, without prior notice, for any violation of these Terms, including but not limited to fraudulent activity, manipulation of data, or breach of security protocols. Upon termination, your right to use the Services will cease immediately.</p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">10. Modifications to Terms</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600">Ednux reserves the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on our website and updating the Effective Date. Your continued use of the Services after such modifications constitutes acceptance of the updated Terms.</p>
        </section>

        <section>
          <h2 className="font-poppins text-[1.35rem] font-semibold text-slate-900 mb-4">11. Contact Information</h2>
          <p className="text-[0.97rem] leading-[1.85] text-slate-600 mb-4">If you have any questions about these Terms of Service, please contact us:</p>
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
