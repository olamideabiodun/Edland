'use client';

import React from 'react';
import Header from '../../components/home/Header';
import Footer from '../../components/home/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Questrial' }}>
      <Header />
      
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 mt-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Questrial' }}>
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Effective Date: October 10, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                This Privacy Policy details how Ednux processes Personal Data related to the operation of the LMS and the VCL. We are committed to processing data in accordance with GDPR and CCPA principles, emphasizing privacy-by-design and Self-Sovereign Identity (SSI) principles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Questrial' }}>
                1. Data Controller and Legal Framework
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Data Controller:</strong> Ednux Technology Services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Joint Controllership:</strong> Where you are enrolled through an institution (Issuer), Ednux and the Issuer may operate as joint controllers for the purposes of educational data processing, with responsibilities delineated by separate agreement.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Legal Basis:</strong> Processing is primarily based on Contractual Necessity (Article 6(1)(b) of GDPR) to deliver the LMS and VCL, and Legitimate Interest (Article 6(1)(f) of GDPR) for auditing and refining the Interpretable ML Engine's fairness.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Questrial' }}>
                2. Categories of Personal Data Processed
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900" style={{ fontFamily: 'Questrial' }}>
                        Data Category
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900" style={{ fontFamily: 'Questrial' }}>
                        Specific Data Points
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900" style={{ fontFamily: 'Questrial' }}>
                        Purpose of Processing
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">
                        A. Identity & Account Data
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Full Name, Email, Institutional ID, Hashed Password, Decentralized Identifier (DID).
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Account provisioning, identity resolution for VC issuance, and secure access via Clerk.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">
                        B. Performance & Interaction Data
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Course completion rates, assessment results, submission frequency, collaborative efficacy metrics, time-on-task.
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Primary input for the Interpretable ML Engine to calculate objective competency metrics.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">
                        C. Cryptographic Data
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Public Key, VC Hash, VC Revocation Status (on Stellar).
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Anchoring the proof of the VC on the Stellar Soroban VDR. This public data contains no direct identifying Personal Data.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Questrial' }}>
                3. Purpose of Processing and Data Minimization
              </h2>
              
              <div className="ml-4">
                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  3.1. Core Service Delivery
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Data is processed to provide the personalized LMS experience and issue W3C-compliant VCs.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  3.2. Interpretable ML Engine Operation
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Performance Data is used to train and run the Interpretable ML Engine. This process is continuously audited to ensure algorithmic fairness and mitigate bias in competency scoring, aligning with ethical data practices.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  3.3. Stellar VDR Usage (Data Minimization)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We adhere to strict data minimization. We only record the cryptographic hash and revocation status of the VC on the public Stellar Soroban ledger. Your name, scores, and private educational records remain securely in our off-chain database.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Questrial' }}>
                4. Data Sharing and Transfer
              </h2>
              
              <div className="ml-4">
                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  4.1. Issuing Institutions
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We share Performance and Identity Data with your Issuer to comply with their pedagogical and regulatory requirements and to enable them to issue VCs.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  4.2. Holder-Controlled Disclosure (SSI)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you, the Holder, choose to present a VC to a third-party Verifier (e.g., an employer), the sharing is executed under your control. Ednux facilitates this by supporting the use of Zero-Knowledge Proofs (ZKP), allowing you to prove a claim without disclosing the underlying raw, sensitive metric.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  4.3. Data Transfer (International)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Data may be transferred to and processed in jurisdictions outside your country of residence. We ensure that any international data transfers are protected by adequate legal mechanisms (e.g., Standard Contractual Clauses, where applicable).
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Outside the EU/EEA (including African countries):</strong> Where Personal Data is processed in countries that are not subject to the GDPR (for example, Nigeria, Kenya, South Africa, Ghana), Ednux aligns its practices to local privacy frameworks while maintaining GDPR-level safeguards.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                      <strong>Nigeria (NDPR – Nigeria Data Protection Regulation):</strong> When processing data of Nigerian residents, we apply NDPR principles of lawfulness, purpose limitation, data minimization, and security; and we execute appropriate Data Processing Agreements (DPAs) and, where required, conduct DPIAs. Cross‑border transfers follow NDPR provisions on adequate protection and contractual safeguards.
                    </li>
                    <li>
                      <strong>Kenya (Data Protection Act, 2019):</strong> We honor requirements on consent, purpose limitation, data subject rights, and registration of data controllers/processors where applicable, and use appropriate transfer mechanisms recognized by the Office of the Data Protection Commissioner (ODPC).
                    </li>
                    <li>
                      <strong>South Africa (POPIA):</strong> We comply with the conditions for lawful processing, information quality, openness, and security safeguards. International transfers occur only where the recipient jurisdiction or contract provides an adequate level of protection as contemplated under POPIA.
                    </li>
                    <li>
                      <strong>Other African jurisdictions:</strong> Where specific national privacy statutes apply, we map those obligations to our GDPR controls (access, rectification, erasure, portability, objection) and ensure contractual and technical measures meet or exceed local standards.
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    In all cases, we implement encryption in transit and at rest, strict access controls, and minimum‑necessary processing. Where local law conflicts with GDPR, we adopt the more protective standard for the data subject.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Questrial' }}>
                5. Your Data Rights (GDPR/CCPA Alignment)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You maintain full control over your Personal Data, subject to the limitations imposed by the decentralized ledger:
              </p>
              
              <div className="ml-4">
                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  5.1. Right of Access and Portability
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the right to obtain confirmation of whether your data is being processed. Since Ednux VCs are built on SSI, your core verifiable data is inherently portable and available in your digital wallet.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  5.2. Right to Rectification
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can request the correction of inaccurate data in our centralized LMS records.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  5.3. Right to Erasure ("Right to be Forgotten")
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may request the deletion of your Personal Data from the Ednux centralized database. <strong>Limitation:</strong> You acknowledge that the cryptographic data (hash and revocation status) anchored to the immutable Stellar Soroban VDR cannot be deleted or modified due to the core principles of Distributed Ledger Technology.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  5.4. Restriction, Objection, and Direct Marketing Controls
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may request that we restrict processing in specific circumstances (e.g., while accuracy is contested) and you may object to processing based on legitimate interests, including profiling. Where we rely on legitimate interests, we will honor your objection unless we demonstrate compelling legitimate grounds that override your interests, rights, and freedoms. You can opt out of direct marketing at any time.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  5.5. Automated Decision‑Making and Profiling Transparency
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ednux uses an Interpretable ML Engine to compute competency metrics. These scores are designed to be explainable and auditable. You have the right to obtain meaningful information about the logic involved, the significance, and the envisaged consequences of such processing, and to request human review where legally required.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  5.6. Withdrawal of Consent
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Where processing is based on consent (e.g., certain analytics or communications), you may withdraw consent at any time without affecting the lawfulness of processing before withdrawal.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  5.7. Complaints to Supervisory Authorities (Regional)
                </h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 leading-relaxed mb-2">You may lodge a complaint with a data protection authority in your jurisdiction:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li><strong>EU/EEA:</strong> Your local Data Protection Authority (DPA).</li>
                    <li><strong>Nigeria:</strong> Nigeria Data Protection Commission (NDPC) under the NDPR/NDP Act.</li>
                    <li><strong>Kenya:</strong> Office of the Data Protection Commissioner (ODPC).</li>
                    <li><strong>South Africa:</strong> Information Regulator (POPIA).</li>
                    <li><strong>Other regions:</strong> The competent supervisory authority defined by applicable law.</li>
                  </ul>
                </div>

                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  5.8. Identity Verification and Response Times
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To protect your data, we may need to verify your identity before acting on a request. We aim to respond within one month (or the timeframe required by local law). Complex or numerous requests may take longer as permitted by law.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  5.9. How to Exercise Your Rights
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can submit requests via in‑app privacy settings or by emailing <a href="mailto:support@ednux.com" className="text-blue-600 underline">support@ednux.com</a>. Please specify the right you intend to exercise and any relevant context (e.g., course, Issuer, date range) to help us process your request efficiently.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Questrial' }}>
                6. Data Security and Retention
              </h2>
              
              <div className="ml-4">
                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  Data Security
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We employ industry-standard technical and organizational measures, including encryption, pseudonymization, and tokenization, to protect Personal Data from unauthorized access or breach.
                </p>

                <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Questrial' }}>
                  Data Retention
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We retain Personal Data for the duration of your active account relationship or as required by our agreement with your Issuer. Pseudonymized, non-identifiable data may be retained indefinitely for the purpose of maintaining and auditing the historical integrity of the Interpretable ML Engine.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Questrial' }}>
                7. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> support@ednux.com
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Questrial' }}>
                8. Updates to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top of this policy.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}