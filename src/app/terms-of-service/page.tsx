'use client';

import React from 'react';
import Header from '../../components/home/Header';
import Footer from '../../components/home/Footer';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Questrial' }}>
      <Header />
      
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 mt-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Questrial' }}>
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Effective Date: October 10, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Questrial' }}>
                1. Preamble and Acceptance
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "Holder," or "Issuer") and Ednux Technology Services ("Ednux," "we," or "us") governing access to the Ednux Learning Management System (LMS) and the Verifiable Competency Loop (VCL), including all associated software, interfaces, APIs, and the use of the Stellar Soroban blockchain for credential anchoring. By accessing or utilizing the Services, you confirm your unqualified acceptance of these Terms. If you are acting on behalf of an institution, you warrant that you have full legal authority to bind that entity.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Questrial' }}>
                2. Definitions of Core Technology & Roles
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900" style={{ fontFamily: 'Questrial' }}>
                        Term
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900" style={{ fontFamily: 'Questrial' }}>
                        Definition in the Context of Ednux
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">
                        Verifiable Credential (VC)
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        A tamper-proof, cryptographic credential issued in accordance with the W3C Verifiable Credential Data Model.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">
                        Decentralized Identifier (DID)
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        A globally unique identifier controlled by the User, created and anchored utilizing the DID:STLLR method on the Soroban network.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">
                        Interpretable ML Engine
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        The proprietary software system utilizing models to generate auditable, objective competency metrics from user performance data.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">
                        Holder
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        The individual User who possesses and controls their DID and VCs within their digital wallet.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">
                        Issuer
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        An Institution or Organization (e.g., University) that legally attests to and issues a VC to a Holder via the Ednux platform.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">
                        Verifiable Data Registry (VDR)
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        The Stellar Soroban ledger, used solely to anchor the public keys, DID documents, and revocation status of VCs. No Personal Data is stored on the Stellar public ledger.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Questrial' }}>
                3. Service Provision and Self-Sovereign Identity (SSI)
              </h2>
              
              <div className="ml-4">
                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  3.1. Provision of Services
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ednux grants the User a limited, non-exclusive, non-transferable right to access and use the LMS and VCL.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  3.2. SSI Acknowledgment
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The User acknowledges and agrees that the Self-Sovereign Identity (SSI) model places control and responsibility for private cryptographic keys and the presentation of VCs entirely with the Holder. Ednux does not maintain custody of private keys and cannot recover lost or compromised DIDs.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  3.3. Credential Accuracy
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Issuers are solely responsible for the factual accuracy of the claims contained within any VC they issue through the Ednux platform.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Questrial' }}>
                4. Data Integrity and Acceptable Use
              </h2>
              
              <div className="ml-4">
                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  4.1. Data Input License
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By using the LMS, the User grants Ednux a perpetual, royalty-free, and sub-licensable license to use User Performance Data for the express purposes of: (a) generating Verifiable Competency Metrics; and (b) training, auditing, and refining the Interpretable ML Engine to ensure fairness and accuracy. This license is critical to the functionality of the Services.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  4.2. Prohibition of Fraud
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Any attempt to manipulate performance data, game the ML Engine, or fraudulently alter a VC will constitute a material breach of these Terms, resulting in immediate suspension, termination, and the definitive anchoring of a Revocation Status on the Stellar VDR.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Questrial' }}>
                5. Disclaimer of Warranties and Limitation of Liability
              </h2>
              
              <div className="ml-4">
                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  5.1. No Warranties
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Services, including the VCL and the underlying Stellar Soroban infrastructure, are provided on an "as-is" and "as-available" basis. Ednux expressly disclaims all warranties, whether express, implied, or statutory, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  5.2. Limitation of Liability
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the maximum extent permitted by law, Ednux shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits or loss of data, arising from the use of the Services or any failure of the Stellar network. In no event shall Ednux's total liability exceed the greater of (i) fifty U.S. Dollars ($50.00) or (ii) the amount paid by you to Ednux in the six (6) months preceding the claim.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Questrial' }}>
                6. Indemnification
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to indemnify, defend, and hold harmless Ednux, its affiliates, directors, and employees from and against any and all claims, liabilities, damages, and costs (including reasonable attorneys' fees) arising out of or related to: (a) your use of the Services; (b) your breach of these Terms; or (c) your violation of any applicable law or the rights of any third party.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Questrial' }}>
                7. Governing Law and Dispute Resolution
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law principles. Any dispute arising from these Terms shall be resolved by binding arbitration in New York, New York, in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Questrial' }}>
                8. Intellectual Property Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Ednux platform, including its software, architecture, and the design of the Interpretable ML Engine, is the exclusive property of Ednux Technology Services. All trademarks, service marks, and trade names used in connection with the Services are the property of Ednux or its licensors.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Questrial' }}>
                9. Termination and Suspension
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ednux reserves the right to suspend or terminate your access to the Services immediately, without prior notice, for any violation of these Terms, including but not limited to fraudulent activity, manipulation of data, or breach of security protocols. Upon termination, your right to use the Services will cease immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Questrial' }}>
                10. Modifications to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ednux reserves the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on our website and updating the "Effective Date." Your continued use of the Services after such modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Questrial' }}>
                11. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> support@ednux.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}