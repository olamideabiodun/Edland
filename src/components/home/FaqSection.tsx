"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    category: "General",
    items: [
      {
        q: "What is Ednux?",
        a: "Ednux is the Career Operating System for African students, a social learning management system that helps students learn collaboratively, build verified career portfolios automatically, and get discovered by employers. It turns every class, project, assignment, and activity into career evidence that grows from year one to graduation.",
      },
      {
        q: "Who is Ednux built for?",
        a: "Ednux is built for three groups: students who want to turn their learning into employment proof, universities that want to modernise learning and track student outcomes, and employers who need to find and verify real student talent.",
      },
      {
        q: "What problem does Ednux solve?",
        a: "Africa's higher education system produces millions of graduates every year, but employers cannot trust their skills. CVs are easy to exaggerate and hard to verify. Ednux fixes the documentation problem, the visibility problem, and the proof problem, connecting learning, skills, evidence, and opportunity in one platform.",
      },
    ],
  },
  {
    category: "For Students",
    items: [
      {
        q: "How does Ednux build my portfolio?",
        a: "Automatically. Every class you attend, every assignment you submit, every leadership role you take, and every club you join is recorded and converted into verified skill data. By graduation, you have a living career timeline, not a one-page CV.",
      },
      {
        q: "How is Ednux different from LinkedIn?",
        a: "LinkedIn assumes you are already a professional. Students on LinkedIn lack work experience to post and cannot showcase class projects, micro-certificates, or coursework. Ednux is built specifically for students, tracking who you are becoming, not just who you are today.",
      },
      {
        q: "Can employers actually see my Ednux profile?",
        a: "Yes. Employers on Ednux can search for vetted student talent and review real work, real activity records, and verified skill signals, not empty CVs.",
      },
      {
        q: "Will Ednux help me stay organised?",
        a: "Yes. All your lectures, files, team chats, assignments, and course materials live in one structured hub, replacing the chaos of WhatsApp groups and scattered drives.",
      },
    ],
  },
  {
    category: "For Educators and Institutions",
    items: [
      {
        q: "How does Ednux help universities?",
        a: "Ednux helps institutions modernise learning, track student competence rather than just course completion, and connect their students directly to employment opportunities, improving graduate outcome data.",
      },
      {
        q: "Can lecturers manage assignments and grading on Ednux?",
        a: "Yes. Lecturers can upload course materials, set assignments, manage grading workflows, and endorse student skills, with their endorsements contributing directly to a student's verified portfolio.",
      },
      {
        q: "Can Ednux integrate with existing institutional systems?",
        a: "Yes. API-based integration is available for student records and internal platforms. Contact us for technical details.",
      },
    ],
  },
  {
    category: "Platform and Access",
    items: [
      {
        q: "When will Ednux launch?",
        a: "Ednux is currently in pre-launch development. Join the waitlist to be among the first to access the platform and receive exclusive early access benefits.",
      },
      {
        q: "Is Ednux available on mobile?",
        a: "Yes. Ednux is being built for both web and mobile, with offline access planned for selected modules, important for students in areas with limited connectivity.",
      },
      {
        q: "Is my data secure on Ednux?",
        a: "Yes. Ednux uses secure protocols and adheres to data privacy regulations. Your learning data and career evidence belong to you.",
      },
    ],
  },
];

interface AccordionItemProps {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem = ({ q, a, isOpen, onToggle }: AccordionItemProps) => (
  <div className="border border-slate-200 rounded-xl overflow-hidden mb-2">
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-slate-50"
    >
      <span className="text-[0.95rem] font-medium text-slate-800 pr-4">{q}</span>
      <span
        className={`flex-shrink-0 ml-3 flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 transition-transform duration-300 ${
          isOpen ? "rotate-180 bg-blue-600 border-blue-600" : "bg-white"
        }`}
      >
        <svg
          className={`h-3.5 w-3.5 ${isOpen ? "text-white" : "text-slate-500"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="px-5 pb-4 pt-1 text-[0.9rem] leading-relaxed text-slate-500 border-t border-slate-100">
            {a}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FaqSection = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (key: string) => setOpenItem((prev) => (prev === key ? null : key));

  return (
    <section className="w-full bg-white py-24" id="faq">
      <div className="mx-auto max-w-[860px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-[13px] font-medium text-blue-700">
            Got questions?
          </span>
          <h2 className="font-poppins text-[2.2rem] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[2.6rem]">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[0.95rem] text-slate-500">
            Everything you need to know about Ednux, for students, educators, and institutions.
          </p>
        </div>

        {/* FAQ Groups */}
        <div className="space-y-10">
          {faqData.map((group) => (
            <div key={group.category}>
              <h3 className="mb-3 text-[0.85rem] font-semibold uppercase tracking-widest text-slate-400">
                {group.category}
              </h3>
              {group.items.map((item, i) => {
                const key = `${group.category}-${i}`;
                return (
                  <AccordionItem
                    key={key}
                    q={item.q}
                    a={item.a}
                    isOpen={openItem === key}
                    onToggle={() => toggle(key)}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-10 text-center text-[0.9rem] text-slate-400">
          More questions?{" "}
          <a href="/contact" className="text-blue-600 underline hover:text-blue-700 transition-colors">
            Reach out on our Contact page
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default FaqSection;
