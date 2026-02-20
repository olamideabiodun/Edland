"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Verified Skill Identity",
    description:
      "Every assignment you complete, every project you lead, every endorsement you receive becomes real, verifiable proof. Employers see evidence, not empty claims. When your lecturer endorses you, Ednux records it with institutional authentication. No one can fake this.",
  },
  {
    title: "Living Portfolio Builder",
    description:
      "Your portfolio grows automatically as you learn. Class projects, presentations, club activities, certifications, all timestamped and verified. By graduation, you have a complete talent graph showing exactly what you have done and who you have become.",
  },
  {
    title: "Organized Learning Spaces",
    description:
      "All your lectures, files, teams, chats, tasks, and feedback live in one structured hub. No more scattered WhatsApp groups where information goes to die. Everything is organized by course, team, or project, and everything contributes to your growing career proof.",
  },
  {
    title: "Student Identity Layer",
    description:
      "Ednux becomes your living digital profile that grows from Year 1 to graduation and beyond. Unlike one page CVs that barely capture your real capabilities, Ednux documents your entire journey.",
  },
  {
    title: "Collaborative Learning Tools",
    description:
      "Create study groups, share resources, work on team projects, and learn together. When you lead a group project, Ednux records leadership skill. When you solve problems together, Ednux tracks collaboration. Every interaction builds your verified record.",
  },
  {
    title: "Real Time Skill Tracking",
    description:
      "Learn Excel, Python, writing, or any skill, and watch your competency graph update with real abilities, not self reported claims. See exactly which skills you are developing and how you compare to industry standards.",
  },
];

const BentoFeaturesSection = () => (
  <section className="w-full bg-white py-24" id="features-section">
    <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

      {/* Section header */}
      <div className="mb-14 text-center">
        <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-[13px] font-medium text-blue-700">
          What Ednux does
        </span>
        <h2 className="font-poppins text-[2.2rem] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[2.8rem]">
          From learning to{" "}
          <span className="text-blue-600">employability</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[1rem] leading-relaxed text-slate-500">
          An advanced learning management system that replaces traditional skill tracking
          with real-world skill verification. Every skill you learn generates a lifelong
          data asset that you own entirely.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-[1rem] font-semibold text-slate-900">{feature.title}</h3>
            <p className="mt-2 text-[0.88rem] leading-relaxed text-slate-500 flex-1">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default BentoFeaturesSection;
