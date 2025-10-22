import React from 'react';

const SSI_Section = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 font-['Questrial',sans-serif]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg 
          aria-hidden="true" 
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-700"
        >
          <defs>
            <pattern 
              id="e813992c-7d03-4cc4-a2bd-151760b470a0" 
              width="200" 
              height="200" 
              x="50%" 
              y="-1" 
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-gray-700/20">
            <path 
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" 
              strokeWidth="0" 
            />
          </svg>
          <rect 
            width="100%" 
            height="100%" 
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" 
            strokeWidth="0" 
          />
        </svg>
      </div>
      
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
              Lifelong Ownership and Data Privacy (SSI)
              </h1>
              <p className="mt-6 text-xl/8 text-gray-300">
              Addressing the fundamental failure of trust and portability in traditional credential systems by giving individuals full, perpetual control over their academic and professional history.  
              </p>
            </div>
          </div>
        </div>
        
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img 
            src="assets\images\SSI_faruq2.png" 
            alt="App screenshot" 
            className="w-[30rem] h-[43rem] max-w-none rounded-xl bg-gray-800 shadow-xl ring-1 ring-white/10" 
          />
        </div>
        
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-400 lg:max-w-lg">
              
              <ul role="list" className="mt-8 space-y-8 text-gray-400">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-white">Self-Sovereign Identity (SSI):</strong> Your credentials are secured by W3C Verifiable Credentials (VCs) and Decentralized Identifiers (DIDs). You create and own your digital identity, ensuring your qualifications can never be lost, taken away, or invalidated by a third party, guaranteeing true lifelong portability.
                  </span>
                </li>
                
                <li className="flex gap-x-3">

                  <span>
                    <strong className="font-semibold text-white">Privacy-Preserving Verification (ZKPs):</strong> Zero-Knowledge Proofs (ZKPs) for selective disclosure. This powerful cryptographic tool allows you to prove a specific claim to an employer without revealing any of your sensitive underlying personal data.
                  </span>
                </li>
                
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-white">Global Interoperability:</strong> credentials adhere to the global Open Badges 3.0 and Comprehensive Learner Record (CLR) standards. This ensures your Ednux achievements are instantly recognized and integrated by Applicant Tracking Systems (ATS) and other learning platforms worldwide.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSI_Section;