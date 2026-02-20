'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';

export default function FeedbackPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function() {
        try{
          var f = document.createElement("iframe");

          var ifrmSrc = 'https://forms.zohopublic.eu/olamidesokunbi15gm1/form/ShapetheFutureofLearningEdnuxFeedbackSurvey/formperma/-eK_xS2V39NEl514RFVZMFyMu-WMc_H5-DC3eA3RbXA?zf_rszfm=1';

          try{
            if ( typeof ZFAdvLead != "undefined" && typeof zfutm_zfAdvLead != "undefined" ) {
              for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
                var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
                utmPm = ( ZFAdvLead.isSameDomian && ( ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1 ) ) ? "zf_" + utmPm : utmPm;
                var utmVal = zfutm_zfAdvLead.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
                if ( typeof utmVal !== "undefined" ) {
                  if ( utmVal != "" ) {
                    if(ifrmSrc.indexOf('?') > 0){
                         ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal;
                    }else{
                        ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal;
                    }
                  }
                }
              }
            }
            if ( typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined" ) {
              for( var prmIdx = 0 ; prmIdx < ZFLead.utmPNameArr.length ; prmIdx ++ ) {
                var utmPm = ZFLead.utmPNameArr[ prmIdx ];
                var utmVal = zfutm_zfLead.zfutm_gC_enc( ZFLead.utmPNameArr[ prmIdx ] );
                if ( typeof utmVal !== "undefined" ) {
                  if ( utmVal != "" ){
                    if(ifrmSrc.indexOf('?') > 0){
                      ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal;
                    }else{
                      ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal;
                    }
                  }
                }
              }
            }
          }catch(e){}

          f.src = ifrmSrc;
          f.style.border="none";
          f.style.height="600px";
          f.style.width="100%";
          f.style.transition="all 0.5s ease";
          f.style.borderRadius="12px";
          f.setAttribute("aria-label", 'Shape the Future of Learning | Ednux Feedback Survey');

          var d = document.getElementById("zf_div_-eK_xS2V39NEl514RFVZMFyMu-WMc_H5-DC3eA3RbXA");
          if (d) {
            d.appendChild(f);
          }

          window.addEventListener('message', function (event){
            var evntData = event.data;
            if( evntData && evntData.constructor == String ){
              var zf_ifrm_data = evntData.split("|");
              if ( zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3 ) {
                var zf_perma = zf_ifrm_data[0];
                var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
                var iframe = document.getElementById("zf_div_-eK_xS2V39NEl514RFVZMFyMu-WMc_H5-DC3eA3RbXA").getElementsByTagName("iframe")[0];
                if ( iframe && (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
                  var prevIframeHeight = iframe.style.height;
                  var zf_tout = false;
                  if( zf_ifrm_data.length == 3 ) {
                      iframe.scrollIntoView();
                      zf_tout = true;
                  }
                  if ( prevIframeHeight != zf_ifrm_ht_nw ) {
                    if( zf_tout ) {
                        setTimeout(function(){
                            iframe.style.height = zf_ifrm_ht_nw;
                        },500);
                    } else {
                        iframe.style.height = zf_ifrm_ht_nw;
                    }
                  }
                }
              }
            }
          }, false);
        }catch(e){}
      })();
    `;

    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />

      {/* Hero banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 pt-[70px]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Original circles */}
          <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-white opacity-5 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white opacity-5 blur-3xl" />
          {/* Subtle box elements */}
          <div className="absolute top-8 left-10 w-16 h-16 border border-white/10 rounded-lg rotate-12" />
          <div className="absolute top-12 right-14 w-10 h-10 border border-white/8 rounded-lg rotate-45" />
          <div className="absolute bottom-8 left-1/4 w-8 h-8 bg-white/5 rounded-lg rotate-12" />
          <div className="absolute bottom-6 right-10 w-14 h-14 border border-white/8 rounded-lg -rotate-12" />
          <div className="absolute top-1/3 right-1/3 w-5 h-5 border border-white/8 rounded-md -rotate-6" />
          <div className="absolute bottom-1/3 left-1/3 w-12 h-12 border border-white/6 rounded-xl rotate-6" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-[13px] font-medium text-white/90 mb-5">
            Your Voice Matters
          </span>
          <h1 className="text-[2.4rem] font-semibold leading-tight text-white sm:text-[3rem]">
            We&apos;re Building Something Special
          </h1>
          <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-blue-100">
            Ednux is under development. Your feedback directly shapes Africa&apos;s next-generation
            learning platform. Help us get it right.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">

            {/* Left, Info */}
            <div className="lg:col-span-2 flex flex-col justify-start">
              <h2 className="text-[1.5rem] font-semibold text-slate-900">
                Shape the Future of Learning
              </h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-600">
                Ednux is currently under development, and we&apos;re working hard to bring you
                the best educational platform experience.
              </p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-600">
                Your feedback is invaluable. Help shape the future of Ednux by sharing
                your thoughts, ideas, and expectations.
              </p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-600">
                Subscribe to our newsletter to stay updated on our progress and be the
                first to know when we launch.
              </p>

              {/* Benefit callout */}
              <div className="mt-8 flex gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 mt-0.5">
                  <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-[0.88rem] leading-relaxed text-slate-700">
                  Early contributors will receive{' '}
                  <strong className="text-blue-700">exclusive access</strong> to our beta
                  version and special launch benefits!
                </p>
              </div>

              {/* Links */}
              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href="/waitlist"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-[14px] font-medium text-white transition-all hover:bg-blue-700 hover:-translate-y-0.5"
                >
                  Join the Waitlist
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-[14px] font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Contact Us Directly
                </Link>
              </div>
            </div>

            {/* Right, Zoho Form */}
            <div className="lg:col-span-3">
              <div className="mb-4">
                <h3 className="text-[1.2rem] font-semibold text-slate-900">Share Your Feedback</h3>
                <p className="mt-1 text-[0.88rem] text-slate-500">
                  Help us create the perfect educational experience for you
                </p>
              </div>
              <div
                id="zf_div_-eK_xS2V39NEl514RFVZMFyMu-WMc_H5-DC3eA3RbXA"
                className="w-full min-h-[500px] rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden"
              />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
