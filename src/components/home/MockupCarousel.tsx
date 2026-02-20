"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const image1 = "/assets/images/Ednux(6).png";
const image2 = "/assets/images/Ednux(5).png";
const image3 = "/assets/images/Ednux(7).png";
const image4 = "/assets/images/Ednux(8).png";
const image5 = "/assets/images/Ednux(9).png";
const image6 = "/assets/images/Ednux(10).png";
const image7 = "/assets/images/Ednux(4).png";
const image8 = "/assets/images/Ednux(3).png";

const row1 = [image1, image2, image3, image7];
const row2 = [image4, image5, image6, image8];

const MockupCarousel = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const row1X = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const row2X = useTransform(scrollYProgress, [0, 1], ["-15%", "10%"]);

  return (
    <section ref={ref} className="w-full overflow-hidden bg-slate-50 py-12">
      {/* Header */}
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-[13px] font-medium text-blue-700 mb-4">
          The platform
        </span>
        <h2 className="font-poppins text-[2rem] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[2.4rem]">
          Built for how students actually learn
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-[0.95rem] leading-relaxed text-slate-500">
          Every screen, every feature, designed around the African student experience.
        </p>
      </div>

      {/* Row 1 — moves left on scroll */}
      <div className="relative mb-5">
        <motion.div style={{ x: row1X }} className="flex gap-6 w-max px-6">
          {row1.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[480px] overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="Ednux platform mockup" className="w-full h-auto object-cover" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 — moves right on scroll */}
      <div className="relative">
        <motion.div style={{ x: row2X }} className="flex gap-6 w-max px-6">
          {row2.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[480px] overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="Ednux platform mockup" className="w-full h-auto object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MockupCarousel;
