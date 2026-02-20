"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dashboardItems = [
  {
    id: 1,
    title: "Interactive Dashboard",
    subtitle: "A smarter way to learn, track, and grow.",
    description:
      "The Ednux Student Dashboard is the central hub for every learner. Built for clarity, accessibility, and motivation, it brings together everything you need to stay organized, engaged, and in control of your learning journey.",
    features: [
      "Unified Learning Space",
      "Personalized Experience",
      "Real-Time Progress Tracking",
      "Smart Notifications & Reminders",
    ],
    mockupImage: "/assets/images/dashboard-mockup.png",
  },
  {
    id: 2,
    title: "Virtual Classroom",
    subtitle: "Interactive learning environments.",
    description:
      "Join virtual classrooms with seamless video conferencing, interactive whiteboards, and live collaboration. Revisit missed sessions with on-demand recordings, experience education that adapts to your schedule.",
    features: [
      "Live Video Sessions",
      "Interactive Whiteboards",
      "Live Collaboration",
      "Recording & Playback",
    ],
    mockupImage: "/assets/images/classroom-mockup.png",
  },
  {
    id: 3,
    title: "Messages & Notifications",
    subtitle: "Stay connected and informed.",
    description:
      "Communicate seamlessly with instructors and peers through our integrated messaging system. Receive smart notifications that keep you on track without the noise.",
    features: [
      "Direct Messaging",
      "Group Conversations",
      "Smart Notifications",
      "Assignment Reminders",
    ],
    mockupImage: "/assets/images/messages-mockup.png",
  },
  {
    id: 4,
    title: "Courses",
    subtitle: "Comprehensive course management.",
    description:
      "Access all your enrolled courses in one place. Track progress, view materials, submit assignments, and engage with rich course content through an intuitive interface.",
    features: [
      "Course Materials",
      "Assignment Tracking",
      "Progress Monitoring",
      "Interactive Content",
    ],
    mockupImage: "/assets/images/courses-mockup.png",
  },
  {
    id: 5,
    title: "Grades & Performance",
    subtitle: "Track your academic progress.",
    description:
      "Monitor your academic performance with detailed analytics and visual trends. Identify strengths and areas for growth with AI-powered insights tailored to you.",
    features: [
      "Grade Analytics",
      "Performance Trends",
      "AI Insights",
      "Progress Reports",
    ],
    mockupImage: "/assets/images/grades-mockup.png",
  },
  {
    id: 6,
    title: "Social Feed",
    subtitle: "Connect with your learning community.",
    description:
      "Engage with fellow learners, share insights, and participate in academic discussions. Build meaningful connections within your growing educational network.",
    features: [
      "Academic Discussions",
      "Peer Connections",
      "Study Groups",
      "Guided Learning (LXP)",
    ],
    mockupImage: "/assets/images/social-mockup.png",
  },
  {
    id: 7,
    title: "Global Learning Ecosystem",
    subtitle: "Learn beyond boundaries.",
    description:
      "Connect with students and educators across Africa and beyond. Access diverse perspectives, collaborative projects, and cross-cultural learning opportunities in our global ecosystem.",
    features: [
      "Global Connections",
      "Cross-Cultural Learning",
      "Collaborative Projects",
      "International Perspectives",
    ],
    mockupImage: "/assets/images/gle-mockup.png",
  },
  {
    id: 8,
    title: "Projects & Files",
    subtitle: "Organize your academic work.",
    description:
      "Manage all your projects, assignments, and files in one secure location. Collaborate on group projects and access your work from any device, anywhere.",
    features: [
      "File Management",
      "Project Collaboration",
      "Cloud Storage",
      "Version Control",
    ],
    mockupImage: "/assets/images/projects-mockup.png",
  },
];

const InteractiveDashboardSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % dashboardItems.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const current = dashboardItems[activeIndex];

  return (
    <section className="w-full bg-slate-50 py-24" id="how-it-works">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-[13px] font-medium text-blue-700">
            Inside the platform
          </span>
          <h2 className="font-poppins text-[2.2rem] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[2.8rem]">
            Everything in one place
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[1rem] leading-relaxed text-slate-500">
            Explore the features that make Ednux the most complete learning platform for African students.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {dashboardItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
                index === activeIndex
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">

          {/* Left, Mockup Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + "-img"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="relative"
            >
              <div className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-100 opacity-40 blur-2xl" />
              <div className="relative rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={current.mockupImage}
                  alt={current.title}
                  className="w-full h-auto object-cover"
                  style={{ perspective: "1000px", transform: "perspective(1000px) rotateY(-3deg) rotateX(1deg)" }}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right, Content Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + "-content"}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45 }}
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
                <h3 className="font-poppins bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-[2rem] font-bold text-transparent">
                  {current.title}
                </h3>
                <p className="mt-1 text-[1rem] font-medium text-slate-600">
                  {current.subtitle}
                </p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-500">
                  {current.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {current.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-50">
                        <svg className="h-3.5 w-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-[0.88rem] text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress dots */}
              <div className="mt-5 flex justify-center gap-2">
                {dashboardItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-6 bg-blue-600"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default InteractiveDashboardSection;
